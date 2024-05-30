from django.conf import settings
from django.db import models
from products.models import Product

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_location = models.CharField(max_length=255)
    mpesa_code = models.CharField(max_length=20, unique=True)
    order_time = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, default='pending')

    def __str__(self):
        return f'Order {self.id} by {self.user.username}'
