from django.db import models

class Guitar(models.Model):

    name = models.TextField()
    url = models.TextField()
    description = models.TextField()

    class Meta:
        managed = False
        db_table = 'guitar'


class User(models.Model):
    login = models.TextField()
    password = models.TextField()

    class Meta:
        managed = False
        db_table = 'user'


