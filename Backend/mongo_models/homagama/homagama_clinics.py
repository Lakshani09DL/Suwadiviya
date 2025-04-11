from pydantic import BaseModel, Field
from typing import List, Dict
from beanie import Document

class HomagamaClinics(Document):
    clinic_name: str
    location: str
    dates: Dict[str, List[str]]
    special_information: str
    assigned_doctors: List[str]

    class Settings:
        name = "homagama_base_hospital_clinic_collection"  # collection name
