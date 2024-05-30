from django.core.mail import send_mail
import requests

def send_email_notification(user_email, subject, message):
    send_mail(
        subject,
        message,
        'from@example.com',  # Replace with your sender email
        [user_email],
        fail_silently=False,
    )

def send_sms_notification(phone_number, message):
    # Replace with your SMS gateway API endpoint and credentials
    url = 'https://sms-gateway.example.com/send'
    payload = {
        'phone_number': phone_number,
        'message': message,
        'api_key': 'your_api_key'
    }
    response = requests.post(url, data=payload)
    return response.status_code == 200
