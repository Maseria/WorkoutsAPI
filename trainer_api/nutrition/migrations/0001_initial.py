# Generated by Django 5.1.5 on 2025-03-09 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Nutrition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breakfast', models.CharField(max_length=255)),
                ('lunch', models.CharField(max_length=255)),
                ('dinner', models.CharField(max_length=255)),
                ('snacks', models.CharField(max_length=255)),
                ('hydration', models.CharField(max_length=255)),
            ],
        ),
    ]
