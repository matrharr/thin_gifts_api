import uuid
from django.core.mail import send_mail
from django.template import loader

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from paypal_payments.models import CaptureOrder

from shopping_cart.models import ShoppingCart, ShoppingCartProduct

from orders.serializers import OrderProductSerializer, OrderSerializer

@api_view(['POST'])
def execute_payment(request):
    result = CaptureOrder().capture_order(request.data['order_id'])
    # get shopping cart & scp
    import ipdb; ipdb.set_trace()
    shopping_cart = ShoppingCart.objects.get(pk=uuid.UUID(request.data['shopping_cart_id']))
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
    
    shopping_cart.delete()
    del request.session['cart_id']
    request.session['order_id'] = order.data['id']
    
    receipt_message = loader.render_to_string(
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
        html_message=receipt_message,
        fail_silently=False
    )

    print_message = loader.render_to_string(
        'orders/print-info.html',
        {
            "order": order.data
        }
    )
    
    send_mail(
        'Print Details for Order',
        'Print Details for Order',
        'thingiftorders@gmail.com',
        ['matrharr@gmail.com', 'jenniferfang12@gmail.com'],
        html_message=print_message,
        fail_silently=False
    )

    
    return Response(order.data)


@api_view(['POST'])
def subscribe_email(request):
    message = "New subscriber email is {}".format(request.data['email'])
    send_mail(
        'New Thin Gifts Newsletter subscriber!',
        message,
        'thingiftorders@gmail.com',
        ['matrharr@gmail.com', 'jenniferfang12@gmail.com'],
        fail_silently=False
    )

    return Response(status=status.HTTP_200_OK)