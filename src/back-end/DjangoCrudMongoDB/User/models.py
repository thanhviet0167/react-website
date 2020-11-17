from djongo import models

# Create your models here.

class Create_User(models.Model):
    
    _id = models.ObjectIdField()
    username = models.TextField(max_length = 25)
    password = models.CharField(max_length = 50)
    email = models.EmailField(max_length = 50)
    gender = models.CharField(max_length = 10)
    adress = models.CharField(max_length = 100)
    objects = models.DjongoManager()

