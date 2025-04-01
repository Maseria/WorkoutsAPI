from django.db import models

class Nutrition(models.Model):
    breakfast = models.CharField(max_length=255)
    lunch = models.CharField(max_length=255)
    dinner = models.CharField(max_length=255)
    snacks = models.CharField(max_length=255)
    hydration = models.CharField(max_length=255)

    def __str__(self):
        return f"Nutrition Plan: {self.breakfast}, {self.lunch}, {self.dinner}, {self.snacks}, {self.hydration}"