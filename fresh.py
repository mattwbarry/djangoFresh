from django.http import HttpResponse
import json

def freshness(request):

	fresh = # add your own code here

	return HttpResponse(json.dumps({ 'fresh': fresh }))