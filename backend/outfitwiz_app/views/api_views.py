from django.views import View
from django.contrib import messages
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib.auth.models import User
import base64
import cv2
import os
import jwt
from outfitwiz_app.vton.cloth_mask import process_cloth_image
import asyncio
from outfitwiz_app.managers.ml_manager import MLManager
from outfitwiz_app.managers.web_manager import WebManager
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from outfitwiz_app.models import OutfitWizCustomer
import numpy as np


# Import any other necessary modules

class PingView(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({'status': 'Server running'})
    
class GetCSRFCookieView(View):
    def get(self, request, *args, **kwargs):
        # Get CSRF token
        csrf_token = get_token(request)

        # Create a JSON response with a success message and the CSRF token as a cookie
        response = JsonResponse({'message': 'CSRF token generated'})
        response.set_cookie('csrftoken', csrf_token, httponly=True)

        return response
    
@method_decorator(csrf_exempt, name='dispatch')
class MakePredictionAPIView(View):
    def post(self, request, *args, **kwargs):

        data = request.POST
        photo_person_name = data['photo_person_name']
        photo_clothing_name = data['photo_clothing_name']
        photo_person_data = data['photo_person']
        photo_clothing_data = data['photo_clothing']

        try:
            photo_person = base64.b64decode(photo_person_data)
            photo_clothing = base64.b64decode(photo_clothing_data)
        except Exception as e:
            return JsonResponse({'error': 'Invalid Base64 data'})
        
        if photo_person and photo_clothing:
            photo_prediciton = asyncio.run(MLManager.perform_prediction_new(photo_person_name, photo_clothing_name, photo_person, photo_clothing))

            photo_prediciton_bytes = photo_prediciton.astype(np.uint8).tobytes()
            photo_prediction_base64 = base64.b64encode(photo_prediciton_bytes).decode('utf-8')
            photo_prediction_dict = {'photo_prediction' : photo_prediction_base64}
            response = JsonResponse({'result': photo_prediction_dict})
            response['Access-Control-Allow-Origin'] = 'http://localhost:5173'
            response['Access-Control-Allow-Credentials'] = 'true'
            return response
        else:
            # If photos were not uploaded, re-render the page
            return HttpResponseRedirect(request.path_info)



@method_decorator(csrf_exempt, name='dispatch')
class LoginAPIView(View):
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token = jwt.encode({'user_id': user.id}, 'secret_key', algorithm='HS256')
            return JsonResponse({'token': token})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

@method_decorator(csrf_exempt, name='dispatch')
class SignUpAPIView(View):
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        # Additional fields
        credit_card_number = request.POST.get('credit_card_number', None)
        svn = request.POST.get('svn', None)
        # Create user
        if OutfitWizCustomer.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)
        if OutfitWizCustomer.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email is already used'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
        token = jwt.encode({'user_id': user.id}, 'secret_key', algorithm='HS256')
        return JsonResponse({'token': token})

class GetSourceImages(View):
    def get(self, request):
        data = request.GET
        origin_url = data.get('source_url', None)
        if origin_url:
            result = WebManager.perform_webscrape(origin_url, True)
            return JsonResponse({'result': result})
        else:
            return JsonResponse({'error': 'Missing source_url parameter'}, status=400)