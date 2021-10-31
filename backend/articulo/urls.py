
from django.urls import path
from .views import QueryOfertasView, QueryDestacadosView, QueryRopaView, QueryMaquillajeView
urlpatterns = [
    path('ofertas/', QueryOfertasView.as_view(), name="ofertas-all"),
    path('destacados/', QueryDestacadosView.as_view(), name="destacados-all"),
    path('ropa/', QueryRopaView.as_view(), name="Ropa-all"),
    path('maquillaje/', QueryMaquillajeView.as_view(), name="maquillaje-all")
]
