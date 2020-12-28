from django.urls import path

from guitarAPI.views import GuitarList, GuitarDetail, UserList, UserDetail;

guitar_api_patterns = ((
   path('guitar/', GuitarList.as_view()),
   path('guitar/<int:pk>', GuitarDetail.as_view()),

   path('user/', UserList.as_view()),
   path('user/<int:pk>', UserDetail.as_view()),
), 'guitar_api')
