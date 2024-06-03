from rest_framework import serializers
from django.contrib.auth import get_user_model

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ('id', 'phone_number', 'username', 'email', 'location', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            phone_number=validated_data['phone_number'],
            username=validated_data['username'],
            email=validated_data['email'],
            location=validated_data.get('location', ''),
            password=validated_data['password']
        )
        return user
