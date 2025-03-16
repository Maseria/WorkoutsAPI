from django import forms
from .models import Nutrition

class NutritionForm(forms.ModelForm):
    class Meta:
        model = Nutrition
        fields = ['meal_name', 'calories', 'protein', 'carbs', 'fats']
