from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

from products.models import Product

from shopping_cart.models import Address, ShoppingCart

class Order(models.Model):
    objects         = models.Manager()

    class OrderStatuses(models.TextChoices):
        PAID        = 'PAID', _('PAID')
        FULFILLED   = 'FULFILLED', _('FULFILLED')
        CANCELED    = 'CANCELED', _('CANCELED')

    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    user            = models.ForeignKey(
                        User,
                        on_delete=models.SET_NULL, 
                        null=True
                    )
    email           = models.CharField(max_length=100)
    order_products  = models.ManyToManyField(
                        Product,
                        through="OrderProduct",
                        blank=True,
                    )
    status          = models.CharField(
                        max_length=10,
                        choices=OrderStatuses.choices,
                        default=OrderStatuses.PAID
                    )

    def get_order_products(self):
        return Product.objects.filter(order=self)

class OrderProduct(models.Model):
    objects           = models.Manager()

    class OrderProductStatuses(models.TextChoices):
        PAID          = 'PAID', _('PAID')
        SENT          = 'SENT', _('SENT')
        RECEIVED      = 'RECEIVED', _('RECEIVED')
        CANCELED      = 'CANCELED', _('CANCELED')

    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)
    product           = models.ForeignKey(
                            Product,
                            on_delete=models.SET_NULL, 
                            null=True,
                        )
    order             = models.ForeignKey(
                            Order,
                            on_delete=models.SET_NULL, 
                            null=True,
                            related_name='order_products_set'
                        )
    message           = models.CharField(max_length=2500)
    return_address    = models.ForeignKey(
                            Address,
                            related_name='order_return_address',
                            on_delete=models.SET_NULL, 
                            null=True
                        )
    recipient_address = models.ForeignKey(
                            Address,
                            related_name='order_recipient_address',
                            on_delete=models.SET_NULL, 
                            null=True
                        )
    status            = models.CharField(
                            max_length=10,
                            choices=OrderProductStatuses.choices,
                            default=OrderProductStatuses.PAID
                        )