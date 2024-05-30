from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    in_stock = models.BooleanField(default=True)
    delivery_fee  = models.DecimalField(max_digits=10, decimal_places=2)
    pickup_station = models.CharField(max_length=255)
    jumia_link = models.URLField(max_length=255)
    image = models.ImageField(upload_to='products_images/', null=True, blank=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']