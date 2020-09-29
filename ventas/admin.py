from django.contrib import admin

from ventas.models import ventas
# Register your models here.

class ventasAdmin(admin.ModelAdmin):
    list_display = ('nombre','precio','fecha','cantidad','promo')
    list_filter = ('fecha',)
    date_hierarchy = "fecha"


admin.site.register(ventas, ventasAdmin)
