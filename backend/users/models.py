from django.db import models

class User(models.Model):
    username = models.CharField(max_length=32)
    email = models.EmailField(max_length=320)
    password = models.CharField(max_length=128)
    pub_date = models.DateTimeField('date published')