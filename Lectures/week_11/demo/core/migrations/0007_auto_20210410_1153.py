# Generated by Django 2.0 on 2021-04-10 05:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20210410_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='core.Category'),
        ),
    ]