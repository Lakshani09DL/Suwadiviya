from beanie import Document #document is used as the base class for models that interact with a MongoDB collection
from pydantic import Field, BaseModel
from typing import Optional
from datetime import datetime

class User(Document):
    name: str
    contact_number: str
    email_address: str
    verification_contact_number: str
    gender: str
    blood_type: str
    address: str
    district: str
    province: str
    dob: datetime

    
    class Settings:
        collection = "User"