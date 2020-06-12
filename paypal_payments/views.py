from django.core.mail import send_mail
from django.template import loader

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from paypal_payments.models import CaptureOrder

from shopping_cart.models import ShoppingCart, ShoppingCartProduct

from orders.serializers import OrderProductSerializer, OrderSerializer
from orders.tasks import create_and_send_pdf

@api_view(['POST'])
def execute_payment(request):
    result = CaptureOrder().capture_order(request.data['order_id'])
    # get shopping cart & scp
    shopping_cart = ShoppingCart.objects.get(pk=request.data['shopping_cart_id'])
    shopping_cart_products = shopping_cart.shopping_cart_products.all().values('product', 'message', 'return_address', 'recipient_address', 'color', 'font')
    scp = list(shopping_cart_products)
    email = request.data['email']
    if not email:
        return Response(data="A valid email address is required.", status=status.HTTP_400_BAD_REQUEST)
    # create order with sc data
    order = OrderSerializer(data={
        'email': email,
        'order_products_set': scp
    })
    order.is_valid(raise_exception=True)
    order.save()
    # TODO: delete shopping cart
    html_message = loader.render_to_string(
        'orders/order.html',
        {
            "order": order.data
        }
    )
    send_mail(
        'Your Thin Gifts Order',
        'Thank you for your recent order.',
        'thingiftorders@gmail.com',
        [email, 'matrharr@gmail.com'],
        html_message=html_message,
        fail_silently=False
    )
    create_and_send_pdf.delay(order.data)
    
    return Response(order.data)
