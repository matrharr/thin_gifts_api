from rest_framework import serializers

from products.serializers import ProductSerializer

from shopping_cart.models import ShoppingCart, ShoppingCartProduct, Address
from shopping_cart.cart_serializer import ShoppingCartSerializer


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            'name',
            'street',
            'street2',
            'city',
            'state',
            'code'
        ]


class ShoppingCartProductSerializer(serializers.ModelSerializer):
    return_address = AddressSerializer(required=False)
    recipient_address = AddressSerializer(required=False)
    shopping_cart = ShoppingCartSerializer()
    product = ProductSerializer()
    
    class Meta:
        model = ShoppingCartProduct
        fields = [
            'id',
            'created_at',     
            'updated_at',  
            'product',   
            'shopping_cart',
            'message',
            'return_address',
            'recipient_address'
        ]

    

    def create(self, validated_data):
        return_address_data = validated_data.pop('return_address', None)
        recipient_address_data = validated_data.pop('recipient_address', None)
        
        if return_address_data:
            return_address = Address.objects.create(**return_address_data)
        else:
            return_address = None
        
        if recipient_address_data:
            recipient_address = Address.objects.create(**recipient_address_data)
        else:
            recipient_address = None
        
        instance = ShoppingCartProduct.objects.create(
            return_address=return_address,
            recipient_address=recipient_address, 
            **validated_data
        )
        return instance

    def update(self, instance, validated_data):
        return_address_data = validated_data.pop('return_address')
        recipient_address_data = validated_data.pop('recipient_address')
        
        if instance.return_address:
            # update address
            updated_return = self._set_address_data(instance.return_address, return_address_data)
            updated_return.save()
        else:
            # add new
            ret_addr = Address.objects.create(**return_address_data)
            # addr.save()
            instance.return_address = ret_addr

        if instance.recipient_address:
            # update address
            updated_recipient = self._set_address_data(instance.recipient_address, recipient_address_data)
            updated_recipient.save()
        else:
            # add new
            rec_addr = Address.objects.create(**recipient_address_data)
            instance.recipient_address = rec_addr
            # addr.save()

        instance.message = validated_data.get('message', instance.message)
        instance.save()
        
        return instance

    def _set_address_data(self, address, address_data):
        address.name = address_data.get('name', None)
        address.street = address_data.get('street', None)
        address.street2 = address_data.get('street2', None)
        address.city = address_data.get('city', None)
        address.state = address_data.get('state', None)
        address.code = address_data.get('code', None)

        return address

