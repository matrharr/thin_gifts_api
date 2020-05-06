from django.db.models import Sum

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from products.serializers import ProductSerializer
from products.models import Product

from shopping_cart.models import ShoppingCart, ShoppingCartProduct
from shopping_cart.cart_serializer import ShoppingCartSerializer
from shopping_cart.cart_product_serializer import ShoppingCartProductSerializer


class ShoppingCartProductViewSet(viewsets.ModelViewSet):
    queryset = ShoppingCartProduct.objects.all()
    serializer_class = ShoppingCartProductSerializer

    @action(detail=False, methods=['post'])
    def create_or_update_cart(self, request, *args, **kwargs):
        # update
        if request.session.get('cart_id') is not None:

            cp_data = {
                **request.data,
                'shopping_cart': request.session['cart_id']
            }
            cart_product_serializer = ShoppingCartProductSerializer(data=cp_data)
            cart_product_serializer.is_valid(raise_exception=True)
            self.perform_create(cart_product_serializer)
        # create
        else:
            # create cart
            cart_serializer = ShoppingCartSerializer(data={})
            cart_serializer.is_valid(raise_exception=True)
            self.perform_create(cart_serializer)
            # create cart product
            cp_data = {
                'product': request.data['product'],
                'shopping_cart': cart_serializer.data['id']
            }
            cart_product_serializer = ShoppingCartProductSerializer(data=cp_data)
            cart_product_serializer.is_valid(raise_exception=True)
            self.perform_create(cart_product_serializer)
            request.session['cart_id'] = str(cart_serializer.data['id'])
        
        return Response(cart_product_serializer.data)
        

class ShoppingCartViewSet(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer

    def get_queryset(self):
        return ShoppingCart.objects.annotate(
                total_price=Sum('cart_products__price')
               )

    @action(detail=False, methods=['get'])
    def get_cart_quantity(self, request):
        if not request.session.get('cart_id'):
            return Response(data='No items in cart')
        cart = ShoppingCart.objects.get(pk=request.session['cart_id'])
        cart_quantity = cart.cart_products.count()
        data = {
            'quantity': cart_quantity,
            'id': cart.id
        }
        return Response(data)

    @action(detail=False, methods=['get'])
    def get_cart_checkout(self, request):
        if not request.session.get('cart_id'):
            return Response(data='No items in cart', status=status.HTTP_400_BAD_REQUEST)
        cart = ShoppingCart.objects.get(pk=request.session['cart_id'])
        products = cart.products.all()
        serialized_cart = ShoppingCartSerializer(cart).data
        serialized_products = ProductSerializer(products, many=True).data
        res_data = {
            'cart': serialized_cart,
            'products': serialized_products
        }
        return Response(res_data)
