from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, GetAllProducts, GetAllCard
from .models import Products, Card
import json
from django.contrib.contenttypes.models import ContentType
import pymongo

permissions_class=(permissions.IsAuthenticated,)
@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    


    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AllProducts(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        list_products = Products.objects.all()
        mydata = GetAllProducts(list_products,many=True)
        return Response(data=mydata.data,status=status.HTTP_200_OK)

class Product_Sort(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self,request):
        type_sort = json.loads(request.body)
        list_products = Products.objects.all().order_by(type_sort.get('price'))
        mydata = GetAllProducts(list_products,many=True)
        return Response(data=mydata.data,status=status.HTTP_200_OK)

class Product_Search(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self,request):
        list_products = Products.objects.all()
        search_products = []
        key_search = json.loads(request.body)
        for i in list_products:
            if(i.product_name.lower().find(key_search.get('search').lower()) != -1):
                search_products.append(i)
        mydata = GetAllProducts(search_products,many=True)
        return Response(data=mydata.data, status=status.HTTP_200_OK)
        # if(len(mydata.data) > 0):
        #     return Response(data=mydata.data, status=status.HTTP_200_OK)
        # else:
        #     return HttpResponse("No matching results were found")

# ContentType = 'application/json'
class Add_card(APIView):
    permission_classes = (permissions.AllowAny,)
    ContentType = 'application/json'

    def post(self, request):
        myclient = pymongo.MongoClient("mongodb+srv://veganimal:veganimal@greenfood.qjelj.mongodb.net/")
        mydb = myclient["Data"]
        mycol = mydb["core_card"]
        mydata = json.loads(request.body)

        
        result =  mycol.find({"username":mydata.get("username")})
        if(result.count() == 0):
            data = {
                    "username": mydata.get("username")
                }
            mycol.insert_one(data)
            mycol.update_one({'username':mydata.get("username")}, {'$push':{'list_cart':mydata.get("list_cart")}})
            return HttpResponse(data)
        else:
            mycol.update_one({'username':mydata.get("username")}, {'$push':{'list_cart':mydata.get("list_cart")}})
            return HttpResponse(mydata)
        # mycol.insert_one(data)
        
        
    def get(self, request):
        list_products = Card.objects.all()
        mydata = GetAllCard(list_products,many=True)
        return Response(data=mydata.data,status=status.HTTP_200_OK)



    
 

      

