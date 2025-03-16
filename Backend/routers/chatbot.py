from fastapi import APIRouter, Query
from pymongo import MongoClient
import google.generativeai as genai
import googlemaps


router = APIRouter()

GEMINI_API_KEY = "your_gemini_api_key"
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-pro")

# Google Maps API Key
GOOGLE_MAPS_API_KEY = "your_google_maps_api_key"
gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)

# MongoDB Connection 
MONGO_URI = "mongodb://your_mongodb_url"
client = MongoClient(MONGO_URI)
db = client["suwadiviya"]
hospitals_collection = db["hospitals"]