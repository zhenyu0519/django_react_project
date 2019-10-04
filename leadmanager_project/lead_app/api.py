from lead_app.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


#lead viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer