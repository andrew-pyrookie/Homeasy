from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated  # Ensure this line is correct
from django.views.decorators.csrf import csrf_exempt
from .models import Payment
from .serializers import PaymentSerializer
from .mpesa_utils import lipa_na_mpesa_online

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        phone_number = request.data.get('phone_number')
        amount = request.data.get('amount')
        account_reference = request.data.get('account_reference')
        transaction_desc = request.data.get('transaction_desc')

        response = lipa_na_mpesa_online(phone_number, amount, account_reference, transaction_desc)

        if response.get('ResponseCode') == '0':
            payment = Payment.objects.create(
                user=request.user,
                amount=amount,
                mpesa_code=response.get('CheckoutRequestID'),
                status='pending'
            )
            serializer = PaymentSerializer(payment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"detail": "Payment initiation failed."}, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['POST'])
def mpesa_confirmation(request):
    data = request.data
    mpesa_code = data.get('CheckoutRequestID')
    payment = Payment.objects.filter(mpesa_code=mpesa_code).first()
    if payment:
        payment.status = 'completed'
        payment.save()
    return Response(status=status.HTTP_200_OK)
