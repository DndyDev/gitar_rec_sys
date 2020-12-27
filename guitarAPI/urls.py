from django.urls import path

from guitarAPI.views import GuitarList, GuitarDetail;

guitar_api_patterns = ((
   path('guitar/', GuitarList.as_view()),
   path('guitar/<int:pk>', GuitarDetail.as_view()),
), 'guitar_api')
