from rest_framework import serializers

from shopping_cart.models import ShoppingCart


class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = [
            'id', 
            'user',
            'products',
            'message',
            'updated_at',
            'created_at',
        ]
