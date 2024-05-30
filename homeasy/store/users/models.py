from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=20, unique=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return self.phone_number
