"""thin_gifts_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls       import url
from django.urls            import include, path
from django.contrib         import admin

from rest_framework         import routers
from products               import views as product_views
from tags                   import views as tag_views
from shopping_cart          import views as shopping_cart_views
from orders                 import views as order_views
from paypal_payments.views  import execute_payment

router = routers.DefaultRouter()
router.register(r'products', product_views.ProductViewSet)
router.register(r'tags', tag_views.TagViewSet)
router.register(r'shopping_cart', shopping_cart_views.ShoppingCartViewSet)
router.register(r'shopping_cart_products', shopping_cart_views.ShoppingCartProductViewSet)
router.register(r'orders', order_views.OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'execute_payment/', execute_payment)
]
