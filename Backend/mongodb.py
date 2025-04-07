from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from mongo_models.gampaha.gampaha_tests import Tests
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")  # Your Atlas connection string

async def init_db():
    client = AsyncIOMotorClient(MONGO_URL)

    await init_beanie(
        database=client.SuwaDiviya, 
        document_models=[Tests]
        )
    
    print("DB Initialized")