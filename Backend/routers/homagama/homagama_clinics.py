from fastapi import APIRouter
from pydantic import BaseModel, Field
from typing import List, Dict
from beanie import Document, init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from mongo_models.homagama.homagama_clinics import HomagamaClinics
from dotenv import load_dotenv
import os
import asyncio

load_dotenv()
connection_str = os.getenv("CONNECTION_STR")

router = APIRouter()

class ClinicListResponse(BaseModel):
    id: int
    clinic_name: str
    location: str
    dates: Dict[str, List[str]]
    special_information: str
    assigned_doctors: List[str]

    class Config:
        from_attributes = True


@router.get("/homagama-clinic-list", response_model=List[ClinicListResponse])
async def get_clinic_list():
    items = await HomagamaClinics.find_all().to_list()
    serialized_items = [
        ClinicListResponse(
            id=index,
            clinic_name=item.clinic_name,
            location=item.location,
            dates=item.dates,
            special_information=item.special_information,
            assigned_doctors=item.assigned_doctors
        )
        for index, item in enumerate(items)
    ]
    return serialized_items