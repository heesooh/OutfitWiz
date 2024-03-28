from django.views import View
from django.contrib import messages
from django.contrib.auth import logout
from django.http import JsonResponse
import base64
import cv2
import os
from outfitwiz_app.vton.cloth_mask import process_cloth_image
import asyncio
from outfitwiz_app.managers.ml_manager import MLManager
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token


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

            photo_prediciton_bytes = photo_prediciton.tobytes()
            photo_prediction_base64 = base64.b64encode(photo_prediciton_bytes).decode('utf-8')
            photo_prediction_dict = {'photo_prediction' : photo_prediction_base64}

            return JsonResponse(photo_prediction_dict)
        else:
            # If photos were not uploaded, re-render the page
            return HttpResponseRedirect(request.path_info)
