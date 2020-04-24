from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from django_filters.rest_framework import DjangoFilterBackend

from products.serializers import ProductSerializer
from products.models import Product
from products.filters import ProductFilter

from tags.models import Tag
from tags.serializers import TagSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset          = Product.objects.all()
    serializer_class  = ProductSerializer

    @action(detail=False, methods=['get'])
    def get_products(self, request):
        p_type = self.request.query_params.get('type', None)
        if not p_type:
            return Response(data="Must specify a product type.", status=status.HTTP_400_BAD_REQUEST)
        cards = Product.objects.filter(p_type=p_type)
        page = self.paginate_queryset(cards)

        tags = Tag.objects.filter(product__in=cards).distinct()

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            res_data = {
                'cards': ProductSerializer(page, many=True).data,
                'tags': TagSerializer(tags, many=True).data
            }
            return Response(data=res_data)
        
        serializer = self.get_serializer(page, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        queryset = Product.objects.all()
        tags = self.request.query_params.getlist('tags', None)
        p_type = self.request.query_params.get('type', None)
        if tags:
            queryset = queryset.filter(tags__in=tags).distinct()
        if p_type:
            queryset = queryset.filter(p_type=p_type)
        return queryset