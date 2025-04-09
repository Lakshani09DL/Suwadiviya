from fastapi import APIRouter
from typing import List
from schemas.hospital import Hospital
from mongodb import hospital_collection

router = APIRouter()
@router.get("/list", response_model=List[Hospital])
def list_hospitals():
    hospitals_cursor = hospital_collection.find()
    hospitals = []

    for hospital in hospitals_cursor:
        hospital["_id"] = str(hospital["_id"])  # Convert ObjectId to string
        hospitals.append(Hospital(**hospital))

    return hospitals