from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdminProductViewSet, AdminOrderViewSet, AdminUserViewSet

router = DefaultRouter()
router.register(r'products', AdminProductViewSet)
router.register(r'orders', AdminOrderViewSet)
router.register(r'users', AdminUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
