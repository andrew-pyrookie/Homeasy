from django.urls import path
from .views import CreateUserView, UserDetailView

urlpatterns = [
    path('register/', CreateUserView.as_view(), name='user-register'),
    path('profile/', UserDetailView.as_view(), name='user-profile'),
]
