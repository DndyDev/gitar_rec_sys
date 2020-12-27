from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Guitar
from .serializers import GuitarSerializer


class GuitarList(APIView):

    def get(self, request):
        guitars = Guitar.objects.all()
        guitar_serializer = GuitarSerializer(guitars, many=True)
        return Response(guitar_serializer.data)

    def post(self, request):
        guitar_serializer = GuitarSerializer(data=request.data)
        if guitar_serializer.is_valid():
            guitar_serializer.save()
        return Response(guitar_serializer.data)


class GuitarDetail(APIView):
    def get(self, request, pk):
        try:
            guitar = Guitar.objects.get(id=pk);
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        guitar_serializer = GuitarSerializer(instance=guitar)
        return Response(guitar_serializer.data)

    def put(self, request, pk):
        try:
            guitar = Guitar.objects.get(id=pk);
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        guitar_serializer = GuitarSerializer(instance=guitar, data=request.data, partial=True)
        if guitar_serializer.is_valid():
            guitar_serializer.save()
        return Response(guitar_serializer.data)

    def delete(self, request, pk):
        try:
            guitar = Guitar.objects.get(id=pk);
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        guitar_serializer = GuitarSerializer(instance=guitar)
        guitar.delete()
        return Response(guitar_serializer.data)
