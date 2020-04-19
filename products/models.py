from django.db import models
from django.utils.translation import gettext_lazy as _

from tags.models import Tag

class Product(models.Model):
    objects = models.Manager()

    class ProductTypes(models.TextChoices):
        CARD = 'CA', _('Card')
        GIFT = 'GI', _('Gift')
    
    name            = models.CharField(max_length=50)
    description     = models.CharField(max_length=100)
    price           = models.DecimalField(max_digits=6, decimal_places=2)
    p_type          = models.CharField(
                        max_length=2,
                        choices=ProductTypes.choices,
                        default=ProductTypes.CARD
                    )
    creator_name    = models.CharField(max_length=50)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    tags            = models.ManyToManyField(Tag)

    class Meta:
        ordering = ('name',)

