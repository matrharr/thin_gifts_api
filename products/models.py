import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _

from tags.models import Tag

class Product(models.Model):
    objects = models.Manager()

    class ProductTypes(models.TextChoices):
        CARD = 'CA', _('Card')
        GIFT = 'GI', _('Gift')
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name            = models.CharField(max_length=50)
    description     = models.CharField(max_length=100)
    price           = models.DecimalField(max_digits=6, decimal_places=2)
    p_type          = models.CharField(
                        max_length=2,
                        choices=ProductTypes.choices,
                        default=ProductTypes.CARD
                    )
    creator_name    = models.CharField(max_length=50)
    image_url       = models.URLField(null=True, blank=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    tags            = models.ManyToManyField(Tag)

    class Meta:
        ordering = ('name',)


