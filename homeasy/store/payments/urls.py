from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaymentViewSet, mpesa_confirmation

router = DefaultRouter()
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('confirmation/', mpesa_confirmation, name='mpesa_confirmation'),
]
