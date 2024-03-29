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

from rest_framework         import routers, renderers, permissions
from products               import views as product_views
from tags                   import views as tag_views
from shopping_cart          import views as shopping_cart_views
from orders                 import views as order_views
from paypal_payments.views  import execute_payment
from paypal_payments.views  import subscribe_email

class CustomAPIRootView(routers.APIRootView):
    permission_classes = (permissions.IsAdminUser,)

class CustomDefaultRouter(routers.DefaultRouter):
    APIRootView = CustomAPIRootView

# router = routers.DefaultRouter()
router = CustomDefaultRouter()
router.register(r'products', product_views.ProductViewSet)
router.register(r'tags', tag_views.TagViewSet)
router.register(r'shopping_cart', shopping_cart_views.ShoppingCartViewSet)
router.register(r'shopping_cart_products', shopping_cart_views.ShoppingCartProductViewSet)
router.register(r'orders', order_views.OrderViewSet)
router.register(r'order_products', order_views.OrderProductViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'api/execute_payment/', execute_payment),
    url(r'api/subscribe_email/', subscribe_email),
    url(r'', product_views.HomePageView.as_view()),
]
