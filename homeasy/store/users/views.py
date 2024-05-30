from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import CustomUserSerializer

class CreateUserView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [AllowAny]
    serializer_class = CustomUserSerializer

class UserDetailView(generics.RetrieveUpdateAPIView):
    model = get_user_model()
    permission_classes = [IsAuthenticated]
    serializer_class = CustomUserSerializer

    def get_object(self):
        return self.request.user
