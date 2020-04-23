# Generated by Django 3.0.5 on 2020-04-22 03:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shopping_cart', '0003_auto_20200422_0104'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='steet2',
            new_name='street2',
        ),
        migrations.AlterField(
            model_name='shoppingcartproduct',
            name='recipient_address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='recipient_address', to='shopping_cart.Address'),
        ),
        migrations.AlterField(
            model_name='shoppingcartproduct',
            name='return_address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='return_address', to='shopping_cart.Address'),
        ),
    ]
