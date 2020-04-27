from rest_framework import viewsets, status
from rest_framework.response import Response

from orders.models import Order, OrderProduct
from orders.serializers import OrderSerializer, OrderProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderProductViewSet(viewsets.ModelViewSet):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer