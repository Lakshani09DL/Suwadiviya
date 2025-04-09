import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()

mongo_url = os.getenv("MONGO_URL")
client = MongoClient(mongo_url)
db = client["SuwaDiviya"]
hospital_collection = db["hospital"]
gampaha_tests=db["gampahatests"]