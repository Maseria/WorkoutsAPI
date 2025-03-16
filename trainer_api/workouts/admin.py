from django.contrib import admin
from .models import Workout

# Customize Django Admin branding
admin.site.site_header = "Personal Trainer Admin"
admin.site.site_title = "Personal Trainer Admin Panel"
admin.site.index_title = "Welcome to the Personal Trainer Dashboard"

# Register your models
admin.site.register(Workout)
