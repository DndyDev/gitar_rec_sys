from rest_framework import serializers
from guitarAPI.models import User, Guitar


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'login', 'password')


class GuitarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guitar
        fields = ('id', 'name', 'url', 'description')
