from django.db import models

# Create your models here.

class ventas(models.Model):

    # Country Choices


        # Completo
        # As
        # Fajita
        # Empanada
        # Vegetariano
        # Sándwich 
        # Jugo natural
        # Paila de huevo

    CHOICES = (
        ('Completo','Completo'),
        ('As','As'),
        ('Fajita','Fajita'),
        ('Empanada','Empanada'),
        ('Vegetariano','Vegetariano'),
        ('Sandwich','Sandwich'),
        ('Jugo natural','Jugo natural'),
        ('Paila de huevo','Paila de huevo'),

    )

    nombre = models.CharField(max_length=100, choices=CHOICES)
    precio = models.IntegerField()
    fecha = models.DateField()
    cantidad = models.IntegerField(null=True)
    promo = models.BooleanField(null=True)


    class Meta:
        verbose_name = "venta"
        verbose_name_plural = "ventas"

    def __str__(self):
        return self.nombre