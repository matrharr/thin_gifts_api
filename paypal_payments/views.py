from django.core.mail import send_mail

from rest_framework.decorators import api_view
from rest_framework.response import Response

from paypal_payments.models import CaptureOrder

from shopping_cart.models import ShoppingCart, ShoppingCartProduct

from orders.serializers import OrderProductSerializer, OrderSerializer

@api_view(['POST'])
def execute_payment(request):
    result = CaptureOrder().capture_order(request.data['order_id'])
    # get shopping cart & scp
    shopping_cart = ShoppingCart.objects.get(pk=request.data['shopping_cart_id'])
    shopping_cart_products = shopping_cart.shopping_cart_products.all().values('product', 'message', 'return_address', 'recipient_address')
    scp = list(shopping_cart_products)
    email = request.data['email']
    # create order with sc data
    order = OrderSerializer(data={
        'email': email,
        'order_products_set': scp
    })
    order.is_valid(raise_exception=True)
    order.save()
    # TODO: delete shopping cart
    send_mail(
        'Your Thin Gifts Order',
        'Thank you for your recent order.',
        'matrharr@gmail.com',
        [email, 'matrharr@gmail.com'],
        fail_silently=False
    )
    # return order
    return Response(order.data)
