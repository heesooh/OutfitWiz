"""
URL configuration for outfitwiz_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView
from outfitwiz_app.views.old_views import HomePageView, LoginPageView, ProfilePageView, StylePageView, ProductPageView, LogoutView
from outfitwiz_app.views.api_views import MakePredictionAPIView, PingView, GetSourceImages, LoginAPIView, SignUpAPIView, GetUserDataAPIView, MakePredictionCompleteAPIView

urlpatterns = [
    path('', RedirectView.as_view(url='/home/', permanent=False)),
    path('admin/', admin.site.urls),
    path('ping/', PingView.as_view(), name='ping-page'),

    # API Views
    path('api/make-prediction', MakePredictionAPIView.as_view(), name='make_prediction'),
    path('api/make-prediction-complete', MakePredictionCompleteAPIView.as_view(), name='make_prediction'),
    path('api/get-source-images', GetSourceImages.as_view(), name='get_cookie'),
    path('api/login', LoginAPIView.as_view(), name='login'),
    path('api/signup', SignUpAPIView.as_view(), name='signup'),
    path('api/get-user-data', GetUserDataAPIView.as_view(), name='get_user_data'),

    #Old Views:
    path('home/', HomePageView.as_view(), name="home_page"),
    path('accounts/profile/', ProfilePageView.as_view(), name="profile_page"),
    path('accounts/login/', LoginPageView.as_view(), name='login_page'),
    path('product/', ProductPageView.as_view(), name='product_page'),
    path('style/', StylePageView.as_view(), name='style_page'),
    path('accounts/logout/', LogoutView.as_view(), name='logout_page'),
]