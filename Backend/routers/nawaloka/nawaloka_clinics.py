from fastapi import APIRouter, HTTPException
from mongo_models.nawaloka.nawaloka_clinics import NawalokaClinics
from typing import List, Optional, Dict
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()
connection_str = os.getenv("CONNECTION_STR")

router = APIRouter()

# Schema for response when listing scan services
class ClinicServiceResponse(BaseModel):
    id:int
    clinic_name: str
    location: str
    dates: Dict[str, List[str]]
    special_information: str 
    assigned_doctors: List[str]

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document

@router.get("/cliniclist", response_model=List[ClinicServiceResponse])
async def list_clinic_services():
    clinic_services = await NawalokaClinics.find_all().to_list()

    serialized_items= [
        ClinicServiceResponse(
            id=index,
            clinic_name=item.clinic_name,
            location=item.location,
            dates=item.dates,
            special_information=item.special_information,
            assigned_doctors=item.assigned_doctors
        )
        for index, item in enumerate(clinic_services)
    ]
    return serialized_items