from django.db import models

class Articulo(models.Model):
    Auto_increment_id =  models.AutoField (primary_key = True)
    Precio = models.FloatField()
    Detalle = models.CharField(max_length=100)
    Marca = models.CharField(max_length=30)
    Nombre = models.CharField(max_length=30)
    Numero_articulo = models.PositiveIntegerField()
    Color = models.CharField(max_length=30)
    Gama_Color = models.CharField(max_length=20)
    Talle = models.CharField(max_length=6)
    Tipo_R_M = models.CharField(max_length=1)
    Oferta = models.CharField(max_length=2)
    Destacado = models.CharField(max_length=2)
    VistaPrevia = models.CharField(max_length=2)