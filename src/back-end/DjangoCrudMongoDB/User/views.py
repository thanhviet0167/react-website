from django.shortcuts import render
from User.models import Create_User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from bson.objectid import ObjectId
import json
from django.contrib.contenttypes.models import ContentType


# Create your views here.

ContentType = 'application/json'

@csrf_exempt

def add_user(request):
    
    mydata = json.loads(request.body)
    username = mydata.get('username')
    password = mydata.get("password")
    email = mydata.get("email")
    gender = mydata.get("gender")
    adress = mydata.get("adress")
    # username = request.POST.get('username')
    # password = request.POST.get("password")
    # email = request.POST.get("email")
    # gender = request.POST.get("gender")
    # adress = request.POST.get("adress")
    post = Create_User(username=username, password=password, email=email, gender=gender, adress=adress)
    post.save()
    return HttpResponse("Finally")

@csrf_exempt

def update_user(request,id):
    post = Create_User.objects.get(_id=ObjectId(id))
    post.user_details['adress'] = request.POST.get('adress')
    post.save()
    return HttpResponse("Post Updated")

@csrf_exempt

def delete_user(request,id):
    post = Create_User.objects.get(_id=ObjectId(id))
    post.delete()
    return HttpResponse("Delete successfully")

@csrf_exempt

def read_user(request,id):
    post = Create_User.objects.get(_id = ObjectId(id))
    stringval = "Username: " + post.username + " Password" + post.password

    return HttpResponse(stringval)

@csrf_exempt

def read_user_all(request):
    posts = Create_User.objects.all()
    stringval = []
    for post in posts:
        stringval.append(post.username)
    return HttpResponse(stringval)


def check_exist_user(request,username):
    posts = Create_User.objects.all()

    for post in posts:
        if(post.username == username):
            return HttpResponse('true')
    return HttpResponse('false')
    # if(post != NULL):
    #     stringval = post.username

    