# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db import models

class Tag(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    objects = models.Manager()

    name         = models.CharField(max_length=35)
    created_at   = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name