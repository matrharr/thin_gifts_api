# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Tag(models.Model):
    objects = models.Manager()

    name         = models.CharField(max_length=35)
    created_at   = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name