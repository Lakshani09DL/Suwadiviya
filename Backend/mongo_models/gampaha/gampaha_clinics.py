from beanie import Document
from typing import List, Dict
from pydantic import BaseModel, Field

class GampahaClinics(Document):
    clinic_name: str
    location: str
    dates: Dict[str, str]
    special_information: str = ""
    assigned_doctors: List[str]

    class Settings:
        name = "GampahaClinics"