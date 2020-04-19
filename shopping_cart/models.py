from django.db import models
from django.contrib.auth.models import User

from products.models import Product

class ShoppingCart(models.Model):
    objects         = models.Manager()
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    user            = models.OneToOneField(
                        User, on_delete=models.CASCADE, null=True)
    products        = models.ManyToManyField(Product)
    message         = models.CharField(max_length=2500, null=True)
