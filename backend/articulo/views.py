from rest_framework import generics
from .models import Articulo
from .serializers import ArticulosSerializer

class QueryOfertasView(generics.ListAPIView):
    queryset = Articulo.objects.filter(Oferta="Si")
    serializer_class = ArticulosSerializer

class QueryDestacadosView(generics.ListAPIView):
    queryset = Articulo.objects.filter(Destacado="Si")
    serializer_class = ArticulosSerializer

class QueryRopaView(generics.ListAPIView):
    queryset = Articulo.objects.filter(Tipo_R_M="R")
    serializer_class = ArticulosSerializer

class QueryMaquillajeView(generics.ListAPIView):
    queryset = Articulo.objects.filter(Tipo_R_M="M")
    serializer_class = ArticulosSerializer