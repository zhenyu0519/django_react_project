from django.db import models


# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    group = models.PositiveIntegerField(default=1)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now=True)
