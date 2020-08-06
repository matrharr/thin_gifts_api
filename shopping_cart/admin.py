from django.contrib import admin
from shopping_cart.models import ShoppingCart, ShoppingCartProduct

# Register your models here.
admin.site.register(ShoppingCart)
admin.site.register(ShoppingCartProduct)
