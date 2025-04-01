# trainer_api/models.py
from django.db import models

class Workout(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField(help_text="Duration in minutes")

    def __str__(self):
        return self.title
