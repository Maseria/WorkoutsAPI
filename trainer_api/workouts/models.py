from django.db import models

class Workout(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.IntegerField()

    def __str__(self):
        return self.name