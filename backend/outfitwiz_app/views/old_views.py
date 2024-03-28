from django.views import View
from django.contrib.auth.views import LoginView
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import logout
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LogoutView
from django.urls import reverse_lazy
from django.http import JsonResponse
from django.http import HttpResponseRedirect
import numpy as np
from outfitwiz_app.vton.cloth_mask import process_cloth_image
from outfitwiz_app.managers.ml_manager import MLManager
import asyncio
import cv2
import os

class HomePageView(View):
    template_name = './outfitwiz_app/home_page.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
    
class LoginPageView(LoginView):
    template_name = './outfitwiz_app/login_page.html'

    def form_valid(self, form):
        messages.success(self.request, 'Login successful!')
        return super().form_valid(form)

class ProfilePageView(LoginRequiredMixin, View):
    template_name = './outfitwiz_app/profile_page.html'

    def get(self, request, *args, **kwargs):
        username = self.request.user.username
        return render(request, self.template_name, {'username': username})

    def post(self, request, *args, **kwargs):
        # Logout logic
        logout(request)
        messages.success(request, 'Logout successful!')
        return redirect(reverse_lazy('home'))  # Replace with the desired redirect URL

class ProductPageView(View):
    template_name = './outfitwiz_app/product_page.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        return context
    
    def post(self, request, *args, **kwargs):
        if 'photo1' in request.FILES and 'photo2' in request.FILES:
            # Access the uploaded files
            photo1 = request.FILES['photo1']
            photo2 = request.FILES['photo2']
            
            # You can do whatever you want with the files here.
            # For now, we'll just print their names.
            print("Uploaded photo 1:", photo1.name)
            print("Uploaded photo 2:", photo2.name)

            # Resize photo2 -- cloth
            photo2_image = cv2.imdecode(np.fromstring(photo2.read(), np.uint8), cv2.IMREAD_UNCHANGED)
            resized_photo2 = cv2.resize(photo2_image, (768, 1024))

            # Save resized photo2 -- cloth
            photo2_save_path = os.path.join('./outfitwiz_app/vton/datasets/test/cloth/', photo2.name)
            cv2.imwrite(photo2_save_path, resized_photo2)
            
            process_cloth_image(photo2_save_path)

            # predict
            photo3_dir = asyncio.run(MLManager.perform_prediction(photo1.name, photo2.name))
##
            # Redirect to the same page to avoid form resubmission on page refreshv /static/outfitwiz_app/images/man1.jpg'
            
            return render(request, self.template_name, {'photo1_dir': '../static/' + photo1.name, 'photo2_dir': '../static/' + photo2.name,  'photo3_dir': '../static/' + photo3_dir})
        else:
            # If photos were not uploaded, re-render the page
            return HttpResponseRedirect(request.path_info)
    

class StylePageView(View):
    template_name = './outfitwiz_app/style_page.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
    

class CustomLogoutView(LogoutView):
    next_page = '/'  # Redirect to home page after logout (you can change this as needed)