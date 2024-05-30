from django.conf import settings
from django.db import models
from orders.models import Order

class Payment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    mpesa_code = models.CharField(max_length=20, unique=True)
    status = models.CharField(max_length=50, default='pending')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Payment {self.id} for Order {self.order.id}'
