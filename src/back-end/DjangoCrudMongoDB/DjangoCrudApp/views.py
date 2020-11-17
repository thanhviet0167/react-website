from django.shortcuts import render
from DjangoCrudApp.models import Posts
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from bson.objectid import ObjectId

# Create your views here.

@csrf_exempt

def add_post(request):
    comment = request.POST.get("comment").split(",")
    tags = request.POST.get("tags").split(",")
    user_details = {"first_name":request.POST.get("first_name"),"last_name":request.POST.get("last_name")}
    post = Posts(post_title=request.POST.get("post_title"), post_description=request.POST.get("post_description"),
    comment = comment, tags = tags, user_details = user_details)
    post.save()
    return HttpResponse("Inserted")

@csrf_exempt

def update_post(request,id):
    post = Posts.objects.get(_id=ObjectId(id))
    post.user_details['first_name'] = request.POST.get('first_name')
    post.save()
    return HttpResponse("Post Updated")

@csrf_exempt

def delete_post(request,id):
    post = Posts.objects.get(_id=ObjectId(id))
    post.delete()
    return HttpResponse("Delete successfully")

def read_post(request,id):
    post = Posts.objects.get(_id = ObjectId(id))
    stringval = "First name: " + post.user_details['first_name'] + "Last name" + post.user_details['last_name']
    return HttpResponse(stringval)

def read_post_all(request):
    posts = Posts.objects.all()
    stringval = ""
    for post in posts:
        stringval = "First name: " + post.user_details['first_name'] + "Last name" + post.user_details['last_name']
    return HttpResponse(stringval)