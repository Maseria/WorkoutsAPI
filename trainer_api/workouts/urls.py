from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkoutViewSet, GeneratePlanView

router = DefaultRouter()
router.register(r'workouts', WorkoutViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('generate-plan/', GeneratePlanView.as_view(), name='generate-plan'),
]