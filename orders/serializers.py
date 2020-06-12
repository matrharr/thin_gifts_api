from django.db.models import Sum

from rest_framework import serializers

from products.serializers import ProductSerializer

from shopping_cart.cart_product_serializer import AddressSerializer
from shopping_cart.cart_serializer import ShoppingCartSerializer

from orders.models import Order, OrderProduct


class OrderProductSerializer(serializers.ModelSerializer):
    return_address_detail = AddressSerializer(source='return_address', required=False, read_only=True)
    recipient_address_detail = AddressSerializer(source='recipient_address', required=False, read_only=True)
    product_detail = ProductSerializer(source='product', read_only=True)
    message = serializers.CharField(max_length=2500)
    color = serializers.CharField(max_length=50)
    font = serializers.CharField(max_length=50)

    class Meta:
        model = OrderProduct
        fields = [
            'id',
            'created_at',
            'updated_at',
            'product',
            'order',
            'message',
            'color',
            'font',
            'return_address',
            'recipient_address',
            'status',
            'return_address_detail',
            'recipient_address_detail',
            'product_detail'
        ]


class OrderSerializer(serializers.ModelSerializer):
    order_products = ProductSerializer(source='get_order_products', many=True, required=False, read_only=True)
    total_price = serializers.SerializerMethodField('get_total_price')
    order_products_set = OrderProductSerializer(many=True, required=False)

    def create(self, validated_data):
        order_products_data = validated_data.pop('order_products_set')
        order = Order.objects.create(**validated_data)
        for d in order_products_data:
            OrderProduct.objects.create(
                order=order,
                product=d['product'],
                message=d['message'],
                color=d['color'],
                font=d['font'],
                return_address=d['return_address'],
                recipient_address=d['recipient_address']
            )
        return order


    class Meta:
        model = Order
        fields = [
            'id',
            'user',
            'email',
            'order_products_set',
            'order_products',
            'updated_at',
            'created_at',
            'total_price',
            'status'
        ]

    def get_total_price(self, instance):
        return instance.order_products.aggregate(Sum('price'))
