from django.db.models import Sum

from rest_framework import serializers

from products.serializers import ProductSerializer

from shopping_cart.cart_product_serializer import AddressSerializer
from shopping_cart.cart_serializer import ShoppingCartSerializer

from orders.models import Order, OrderProduct


class OrderSerializer(serializers.ModelSerializer):
    order_products = ProductSerializer(source='get_order_products', many=True)
    total_price = serializers.SerializerMethodField('get_total_price')

    class Meta:
        model = Order
        fields = [
            'id',
            'user',
            'email',
            'order_products',
            'updated_at',
            'created_at',
            'total_price',
            'status'
        ]

    def get_total_price(self, instance):
        return instance.order_products.aggregate(Sum('price'))

class OrderProductSerializer(serializers.ModelSerializer):
    return_address = AddressSerializer(required=False)
    recipient_address = AddressSerializer(required=False)
    shopping_cart = ShoppingCartSerializer()
    product = ProductSerializer()

    class Meta:
        model = OrderProduct
        fields = [
            'id',
            'created_at',
            'updated_at',
            'product',
            'shopping_cart',
            'message',
            'return_address',
            'recipient_address',
            'status'
        ]