
from django.urls import path
from .views import visitaventas , VentasTotales , VentasDeldia, Ventasietedias, VentasDelMes

urlpatterns = [
    path('', visitaventas.as_view(),name='home'),
    path('jsonapi',VentasTotales.as_view(),name='apijson'),
    path('jsonapi/ventasdeldia',VentasDeldia.as_view(),name='apijson-ventas del dia'),
    path('jsonapi/ventassietedias',Ventasietedias.as_view(),name='apijson-ventas ultimos7 dias'),
    path('jsonapi/ventasdelmes',VentasDelMes.as_view(),name='apijson-ventas del mes'),

]
