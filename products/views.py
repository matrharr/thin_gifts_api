from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from products.serializers import ProductSerializer
from products.models import Product

from tags.models import Tag
from tags.serializers import TagSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # def get_queryset(self):
    #     queryset = Product.objects.all()
    #     p_type = self.request.query_params.get('type', None)
    #     if p_type is not None:
    #         queryset = queryset.filter(p_type=p_type)
    #     return queryset

    @action(detail=False, methods=['get'])
    def get_cards(self, request):
        cards = Product.objects.filter(p_type='CA')
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