
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=60)
    author = models.CharField(max_length=60)
    quote = models.CharField(max_length=500)
    review = models.CharField(max_length=500)
    pub_date = models.DateTimeField('date published')
