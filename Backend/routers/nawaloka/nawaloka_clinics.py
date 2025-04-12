from fastapi import APIRouter, HTTPException
from mongo_models.nawaloka.nawaloka_clinics import NawalokaClinics
from typing import List, Optional, Dict
from pydantic import BaseModel

router = APIRouter()

# Schema for response when listing scan services
class ClinicServiceResponse(BaseModel):
    clinic_name: str
    location: str
    dates: Dict[str, str]
    special_information: str = ""
    assigned_doctors: List[str]

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document

@router.get("/cliniclist", response_model=List[ClinicServiceResponse])
async def list_scan_services():
    clinic_services = await NawalokaClinics.find_all().to_list()  # Get all documents
    return clinic_services