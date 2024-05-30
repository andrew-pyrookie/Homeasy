from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Notification
from .serializers import NotificationSerializer
from .utils import send_email_notification, send_sms_notification

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        notification = serializer.save()

        # Send notification based on type
        if notification.notification_type == 'email':
            send_email_notification(
                user_email=notification.user.email,
                subject='New Notification',
                message=notification.message
            )
        elif notification.notification_type == 'sms':
            send_sms_notification(
                phone_number=notification.user.phone_number,
                message=notification.message
            )

        return Response(serializer.data, status=status.HTTP_201_CREATED)
