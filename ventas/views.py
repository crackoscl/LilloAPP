from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from .models import ventas
from datetime import datetime, timedelta

# Create your views here.

class visitaventas(View):
   template_name = 'ventas/index.html'
   
   def get(self,request,*args, **kwargs):
       return render(request, self.template_name)


class VentasTotales(View):
   model = ventas
   def get(self, request):

      completo = self.model.objects.all()
      data = {'ventas': list(completo.values('nombre','precio','fecha','cantidad','promo'))}

      
      return JsonResponse(data) 

class VentasDeldia(View):
   model = ventas
   def get(self, request):
       
      # hoy = timezone.now()
      hoy = datetime.now()
      completo = self.model.objects.filter(fecha=hoy)
      data = {'ventas': list(completo.values('nombre','precio','fecha','cantidad','promo'))}

    
      return JsonResponse(data) 


class Ventasietedias(View):
   model = ventas
   def get(self, request):
       
      hoy = datetime.now()
      dias = timedelta(days=7)
      completo = self.model.objects.filter(fecha__gte=hoy - dias)
      data = {'ventas': list(completo.values('nombre','precio','fecha','cantidad','promo'))}
      return JsonResponse(data)


class VentasDelMes(View):
   model = ventas
   def get(self, request):
       
      hoy = datetime.now()
      completo = self.model.objects.filter(fecha__month=hoy.month)
      data = {'ventas': list(completo.values('nombre','precio','fecha','cantidad','promo'))}
      return JsonResponse(data) 
