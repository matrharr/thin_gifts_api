from rest_framework import viewsets, status
from rest_framework.response import Response

from orders.models import Order, OrderProduct
from orders.serializers import OrderSerializer, OrderProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if str(serializer.data['id']) == request.session['order_id']:
            return Response(serializer.data)
        return Response(data='Unauthorized data requested.', status=status.HTTP_401_UNAUTHORIZED)

class OrderProductViewSet(viewsets.ModelViewSet):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer
