# Generated by Django 2.2.6 on 2019-10-07 20:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('lead_app', '0002_auto_20191004_2236'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='leads', to=settings.AUTH_USER_MODEL),
        ),
    ]