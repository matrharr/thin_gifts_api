# Generated by Django 3.0.5 on 2020-04-26 22:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
        ('shopping_cart', '0005_auto_20200422_0317'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('email', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('PAID', 'PAID'), ('FULFILLED', 'FULFILLED'), ('CANCELED', 'CANCELED')], default='PAID', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='OrderProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('message', models.CharField(max_length=2500)),
                ('status', models.CharField(choices=[('PAID', 'PAID'), ('SENT', 'SENT'), ('RECEIVED', 'RECEIVED'), ('CANCELED', 'CANCELED')], default='PAID', max_length=10)),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='orders.Order')),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.Product')),
                ('recipient_address', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_recipient_address', to='shopping_cart.Address')),
                ('return_address', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_return_address', to='shopping_cart.Address')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='order_products',
            field=models.ManyToManyField(through='orders.OrderProduct', to='products.Product'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
