from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient

from mongo_models.homagama.homagama_clinics import HomagamaClinics
from mongo_models.homagama.homagama_test_scan import HomagamaScanTest

from mongo_models.gampaha.gampaha_tests import GampahaTests
from mongo_models.gampaha.gampaha_clinics import GampahaClinics


from mongo_models.nawaloka.nawaloka_clinics import NawalokaClinics
from mongo_models.nawaloka.nawaloka_testnscan import NawalokaScanTes
from mongo_models.colombo.colombo_clinics import ColomboClinics # Add this import
from mongo_models.colombo.colombo_tests import ColomboTests # Add this import

from mongo_models.user.user import User

import os
from dotenv import load_dotenv

load_dotenv()


MONGO_URL = os.getenv("MONGO_URL")  

async def init_db():
    client = AsyncIOMotorClient(MONGO_URL)

    await init_beanie(
        database=client.SuwaDiviya, 


        document_models=[User, GampahaTests, GampahaClinics, HomagamaClinics, HomagamaScanTest,NawalokaClinics,NawalokaScanTest
    

        )
    
    print("DB Initialized")