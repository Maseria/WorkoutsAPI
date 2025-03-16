from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/workouts/', include('workouts.urls')),  # Include the workouts API
    path('api/nutrition/', include('nutrition.urls')),  # Include the nutrition API
]