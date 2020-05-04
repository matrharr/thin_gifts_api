from django.db.models import Sum

from rest_framework import serializers

from products.serializers import ProductSerializer

from shopping_cart.models import ShoppingCart

class ShoppingCartSerializer(serializers.ModelSerializer):
    cart_products = ProductSerializer(source='get_cart_products', many=True, required=False)
    total_price = serializers.SerializerMethodField('get_total_price')
    shopping_cart_products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = ShoppingCart
        fields = [
            'id', 
            'user',
            'cart_products',
            'updated_at',
            'created_at',
            'total_price',
            'shopping_cart_products',
        ]

    def get_total_price(self, instance):
        return instance.cart_products.aggregate(Sum('price'))
    