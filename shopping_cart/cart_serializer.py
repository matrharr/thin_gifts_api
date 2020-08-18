from django.db.models import Sum

from rest_framework import serializers

from products.serializers import ProductSerializer

from shopping_cart.models import ShoppingCart
from shopping_cart.cart_product_serializer import ShoppingCartProductSerializer

class ShoppingCartSerializer(serializers.ModelSerializer):
    # cart_products = ProductSerializer(source='get_cart_products', many=True, required=False)
    total_price = serializers.SerializerMethodField('get_total_price')
    stamp_cost = serializers.SerializerMethodField('get_stamp_cost')
    # shopping_cart_products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    shopping_cart_products_detail = ShoppingCartProductSerializer(source="shopping_cart_products", read_only=True, many=True)
    
    class Meta:
        model = ShoppingCart
        fields = [
            'id', 
            'user',
            'cart_products',
            'updated_at',
            'created_at',
            'total_price',
            # 'shopping_cart_products',
            'shopping_cart_products_detail',
            'stamp_cost'
        ]

    def get_stamp_cost(self, instance):
        return instance.cart_products.count() * 0.55

    def get_total_price(self, instance):
        return instance.cart_products.aggregate(Sum('price'))
    