import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "trainer_api.settings")
app = Celery("trainer_api")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()
