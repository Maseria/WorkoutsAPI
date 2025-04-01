from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Workout
from .serializers import WorkoutSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class GeneratePlanView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            data = request.data  # ✅ No need for json.loads()

            required_fields = ['goal', 'experience', 'duration']
            if not all(field in data for field in required_fields):
                return Response({"error": "Missing required fields"}, status=status.HTTP_400_BAD_REQUEST)

            workout_plan = {
                "days": [
                    {"name": "Day 1", "workout": "Push-ups, Squats, Plank", "duration": "45 minutes", "intensity": "Medium"},
                    {"name": "Day 2", "workout": "Running, Lunges, Sit-ups", "duration": "60 minutes", "intensity": "High"},
                    {"name": "Day 3", "workout": "Rest or Light Yoga", "duration": "30 minutes", "intensity": "Low"},
                    {"name": "Day 4", "workout": "Pull-ups, Deadlifts, Bicycle Crunches", "duration": "50 minutes", "intensity": "High"},
                    {"name": "Day 5", "workout": "Swimming, Leg Press, Russian Twists", "duration": "55 minutes", "intensity": "Medium"},
                    {"name": "Day 6", "workout": "Cycling, Bench Press, Plank", "duration": "60 minutes", "intensity": "High"},
                    {"name": "Day 7", "workout": "Rest or Light Stretching", "duration": "30 minutes", "intensity": "Low"},
                ],
                "nutrition": {
                    "breakfast": "Oatmeal with fruits and nuts",
                    "lunch": "Grilled chicken salad with quinoa",
                    "dinner": "Baked salmon with steamed vegetables",
                    "snacks": "Greek yogurt, mixed nuts, protein shake",
                    "hydration": "Drink at least 8 cups of water daily"
                },
                "tips": [
                    "Stay hydrated and get enough sleep",
                    "Warm up before workouts and cool down afterward",
                    "Maintain a balanced diet",
                    "Listen to your body and rest when needed",
                    "Track your progress regularly"
                ]
            }

            return Response(workout_plan, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
