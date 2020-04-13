from rest_framework import serializers

from products.models import Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [
            'name', 
            'description', 
            'price', 
            'p_type',
            'creator_name'
        ]
