from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
import re
from mongodb import db
from schemas.hospital import Hospital

router = APIRouter(prefix="/hospitals", tags=["Hospitals"])

# Utilities
def sanitize_collection_name(name: str) -> str:
    return re.sub(r"[^\w\s]", "", name).replace(" ", "_")

def clean_doc(doc):
    doc["_id"] = str(doc["_id"])
    return doc

def get_hospital_by_id(hospital_id: str):
    hospital = db.Hospital.find_one({"hospital_id": hospital_id})
    if not hospital:
        raise HTTPException(status_code=404, detail=f"Hospital with ID {hospital_id} not found")
    return hospital

# Routes
@router.get("/list", response_model=List[Hospital])
async def get_hospitals(
    province: Optional[str] = None,
    hospital_type: Optional[str] = None,
    hospital_category: Optional[str] = None,
    skip: int = 0,
    limit: int = 10
):
    query = {}
    if province: query["province"] = province
    if hospital_type: query["hospital_type"] = hospital_type
    if hospital_category: query["hospital_category"] = hospital_category

    hospitals = list(db.Hospital.find(query).skip(skip).limit(limit))
    if not hospitals:
        raise HTTPException(status_code=404, detail="No hospitals found with the specified criteria")
    return [clean_doc(h) for h in hospitals]

@router.get("/{hospital_id}", response_model=Hospital)
async def get_hospital(hospital_id: str):
    hospital = get_hospital_by_id(hospital_id)
    return clean_doc(hospital)


@router.get("/search/", response_model=List[Hospital])
async def search_hospitals(q: str = Query(..., min_length=3), skip: int = 0, limit: int = 10):
    query = {"name": {"$regex": q, "$options": "i"}}
    hospitals = list(db.Hospital.find(query).skip(skip).limit(limit))
    if not hospitals:
        raise HTTPException(status_code=404, detail=f"No hospitals found matching '{q}'")
    return [clean_doc(h) for h in hospitals]
