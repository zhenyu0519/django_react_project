from rest_framework import serializers
from lead_app.models import Lead


#load serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'