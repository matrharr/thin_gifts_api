# Generated by Django 3.0.5 on 2020-06-12 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping_cart', '0006_auto_20200519_0042'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoppingcartproduct',
            name='color',
            field=models.CharField(choices=[('BLACK', 'Black'), ('LIGHT_BLUE', 'LightBlue')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='shoppingcartproduct',
            name='font',
            field=models.CharField(choices=[('REGULAR', 'Regular'), ('CURSIVE', 'Cursive')], max_length=50, null=True),
        ),
    ]
