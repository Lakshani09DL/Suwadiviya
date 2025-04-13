from fastapi import APIRouter, HTTPException
from mongo_models.colombo.colombo_clinics import ColomboClinics
from typing import List, Optional, Dict
from pydantic import BaseModel

router = APIRouter()

# Schema for response when listing clinics in Colombo
class ColomboClinicResponse(BaseModel):
    clinic_name: str
    location: str
    dates: Dict[str, str]
    special_information: str = ""
    assigned_doctors: List[str]

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document

@router.get("/cliniclist", response_model=List[ColomboClinicResponse])
async def list_colombo_clinics():
    colombo_clinics = await ColomboClinics.find_all().to_list()  # Get all documents
    return colombo_clinics