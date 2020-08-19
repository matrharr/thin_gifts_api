# Generated by Django 3.0.5 on 2020-08-19 20:46

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tags', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('p_type', models.CharField(choices=[('CA', 'Card'), ('GI', 'Gift')], default='CA', max_length=2)),
                ('creator_name', models.CharField(max_length=50)),
                ('image_url', models.URLField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('tags', models.ManyToManyField(to='tags.Tag')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
