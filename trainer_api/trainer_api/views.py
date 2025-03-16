from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CustomAPIRoot(APIView):
    def get(self, request):
        return Response({
            "message": "Welcome to the Personal Trainer API!",
            "workouts": request.build_absolute_uri('/api/workouts/'),
            "documentation": request.build_absolute_uri('/api/docs/'),
            "contact": "support@trainerapp.com"
        }, status=status.HTTP_200_OK)
