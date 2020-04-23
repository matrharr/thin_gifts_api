from django.db import models
from django.contrib.auth.models import User

from products.models import Product

class ShoppingCart(models.Model):
    objects         = models.Manager()
    
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    user            = models.OneToOneField(
                        User,
                        on_delete=models.CASCADE,
                        null=True
                    )
    cart_products   = models.ManyToManyField(
                        Product, 
                        through='ShoppingCartProduct',
                    )

    def get_cart_products(self):
        return Product.objects.filter(shoppingcart=self)
 

class Address(models.Model):
    objects    = models.Manager()
    
    name       = models.CharField(max_length=50, null=True)
    street     = models.CharField(max_length=50, null=True)
    street2    = models.CharField(max_length=50, null=True)
    city       = models.CharField(max_length=50, null=True)
    state      = models.CharField(max_length=2,  null=True)
    code       = models.CharField(max_length=20, null=True)

class ShoppingCartProduct(models.Model):
    objects           = models.Manager()
    
    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)
    product           = models.ForeignKey(Product, on_delete=models.CASCADE)
    shopping_cart     = models.ForeignKey(ShoppingCart, on_delete=models.CASCADE)
    message           = models.CharField(max_length=2500, null=True)
    return_address    = models.ForeignKey(
                            Address,
                            on_delete=models.CASCADE,
                            related_name='return_address',
                            null=True,
                            blank=True,
                            default=None
                        )
    recipient_address = models.ForeignKey(
                            Address,
                            on_delete=models.CASCADE,
                            related_name='recipient_address',
                            null=True,
                            blank=True,
                            default=None
                        )



