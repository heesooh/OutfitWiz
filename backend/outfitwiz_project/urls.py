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
from outfitwiz_app.views import HomePageView, LoginPageView, ProfilePageView, PingView, StylePageView, ProductPageView, LogoutView

urlpatterns = [
    path('', RedirectView.as_view(url='/home/', permanent=False)),
    path('admin/', admin.site.urls),
    path('ping/', PingView.as_view(), name='ping-page'),
    # re_path(r'^.*/$', RedirectView.as_view(url='home/', permanent=False)), !!! Not working 
    path('home/', HomePageView.as_view(), name="home-page"),
    path('accounts/profile/', ProfilePageView.as_view(), name="profile-page"),
    path('accounts/login/', LoginPageView.as_view(), name='login-page'),
    path('product/', ProductPageView.as_view(), name='product-page'),
    path('style/', StylePageView.as_view(), name='style-page'),
    path('accounts/logout/', LogoutView.as_view(), name='logout-page'),
]