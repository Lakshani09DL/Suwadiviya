from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
# from mongo_models.gampaha.gampaha_tests import GampahaTests
# from mongo_models.gampaha.gampaha_clinics import GampahaClinics
# from mongo_models.user.user import User

from mongo_models.homagama.homagama_clinics import HomagamaClinics
from mongo_models.homagama.homagama_test_scan import HomagamaScanTest

import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("CONNECTION_STR")  # Your Atlas connection string

async def init_db():
    client = AsyncIOMotorClient(MONGO_URL)

    await init_beanie(
        database=client.SuwaDiviya, 
        document_models=[HomagamaClinics, HomagamaScanTest]
        )
    
    print("DB Initialized")