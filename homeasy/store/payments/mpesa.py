import requests

def validate_mpesa_code(code):
    # Placeholder validation logic - replace with actual Mpesa API call
    response = requests.get(f'https://mpesa-api.com/validate?code={code}')
    return response.status_code == 200 and response.json().get('valid', False)
