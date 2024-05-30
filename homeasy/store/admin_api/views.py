from rest_framework import viewsets, permissions
from products.models import Product
from orders.models import Order
from users.models import CustomUser
from products.serializers import ProductSerializer
from orders.serializers import OrderSerializer
from users.serializers import CustomUserSerializer

class AdminProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAdminUser]

class AdminOrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAdminUser]

class AdminUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAdminUser]
