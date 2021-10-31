from rest_framework import serializers
from .models import Articulo

class ArticulosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articulo
        fields =    ("Auto_increment_id", "Precio","Detalle","Marca","Nombre",
                    "Numero_articulo","Color","Gama_Color", "Talle", 
                    "Tipo_R_M", "Oferta", "Destacado","VistaPrevia")

