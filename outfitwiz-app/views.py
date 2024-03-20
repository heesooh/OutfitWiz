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

class ProductPageView(LoginRequiredMixin, View):
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

            # Redirect to the same page to avoid form resubmission on page refresh
            return render(request, self.template_name, {'photo1': photo1.name, 'photo2': photo2.name})
        else:
            # If photos were not uploaded, re-render the page
            return HttpResponseRedirect(request.path_info)
    
class PingView(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({'status': 'Server running'})

class StylePageView(View):
    template_name = './outfitwiz_app/style_page.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
    

class CustomLogoutView(LogoutView):
    next_page = '/'  # Redirect to home page after logout (you can change this as needed)