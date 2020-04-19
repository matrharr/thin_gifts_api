from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from shopping_cart.models import ShoppingCart
from shopping_cart.serializers import ShoppingCartSerializer


class ShoppingCartViewSet(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer
    
    @action(detail=False, methods=['post'])
    def update_cart(self, request, *args, **kwargs):
        if not request.session.get('cart_id'):
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            self.request.session['cart_id'] = str(serializer.data['id'])
        else:
            cart = ShoppingCart.objects.get(pk=request.session['cart_id'])
            serializer = ShoppingCartSerializer(cart, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
        
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    @action(detail=False, methods=['get'])
    def get_cart_quantity(self, request):
        if not request.session.get('cart_id'):
            return Response(data='No items in cart')
        cart = ShoppingCart.objects.get(pk=request.session['cart_id'])
        cart_quantity = cart.products.count()
        data = {
            'quantity': cart_quantity,
            'sess': request.session.session_key
        }
        return Response(data)
