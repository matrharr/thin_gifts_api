# Generated by Django 3.0.5 on 2020-04-17 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20200412_2129'),
        ('shopping_cart', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoppingcart',
            name='products',
            field=models.ManyToManyField(to='products.Product'),
        ),
    ]