from rest_framework import serializers

from products.models import Product

from tags.models import Tag


class ProductSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True,
        queryset=Tag.objects.all(),
        slug_field='name'
    )
    
    class Meta:
        model = Product
        fields = [
            'id',
            'name', 
            'description', 
            'price', 
            'p_type',
            'creator_name',
            'tags'
        ]
