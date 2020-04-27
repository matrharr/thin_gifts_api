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
    shopping_cart_products = shopping_cart.shoppingcartproduct_set.all()
    email = request.data['email']
    # create order with sc data
    order = OrderSerializer(data={
        'email': email,
    })
    # create order products with scp data
    order_products = []
    for scp in shopping_cart_products:
        import ipdb; ipdb.set_trace()
        order_product = OrderProductSerializer(data={
            'product': scp.product,
            # 'order': order.data.id,
            'message': scp.message,
            'return_address': scp.return_address,
            'recipient_address': scp.recipient_address,
        })
        order_product.is_valid()
        order_product.save()
        order_products.append(order_product)
    order.order_products = order_products
    # save order
    order.is_valid()
    order.save()
    import ipdb; ipdb.set_trace()
    # delete shopping cart
    # return order
    return Response(order)

