# routers/blood_bank.py
from pydantic import BaseModel
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List
from database import get_db  # Assuming get_db is defined in database.py
from models import Campaign as DB_Campaign  # SQLAlchemy model
from datetime import datetime, date
from sqlalchemy import text

router = APIRouter()

# Define Pydantic models
class CampaignResponse(BaseModel):
    campaign_id: int
    location_address: str
    district: str
    province: str
    date_time: datetime
    organizer: str

    class Config:
        from_attributes = True  # Updated to reflect changes in Pydantic V2

class districtResponse(BaseModel):
    district: str
    class Config:
        from_attributes = True  # Enable ORM mode for Pydantic model


@router.get("/campaigns", response_model=List[CampaignResponse])
def get_campaigns(db: Session = Depends(get_db)):
    try:
        campaigns = db.query(DB_Campaign).all()
        return campaigns
    except Exception as e:
        print("Error fetching campaigns:", e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

@router.get("/get-campaigns-by-date")
def get_campaigns_by_date(input_date: str, db: Session = Depends(get_db)):
    try:
        result = db.execute(
            text("CALL FilterCampaignsByDate(:input_date)"),
            {"input_date": input_date}
        )
        campaigns = result.fetchall()

        return [
            {
                "campaign_id": row[0],
                "location_address": row[1],
                "district": row[2],
                "province": row[3],
                "date_time": row[4],
                "organizer": row[5]
            }
            for row in campaigns
        ]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
#http://127.0.0.1:8000/blood_bank/get-campaigns-by-date?input_date=2025-05-03

@router.get("/get-campaigns-by-district")
def get_campaigns_by_district(input_district: str, db: Session = Depends(get_db)):
    try:
        result = db.execute(
            text("CALL FilterCampaignsByDistrict(:input_district)"),
            {"input_district": input_district}
        )
        campaigns = result.fetchall()

        return [
            {
                "campaign_id": row[0],
                "location_address": row[1],
                "district": row[2],
                "province": row[3],
                "date_time": row[4],
                "organizer": row[5]
            }
            for row in campaigns
        ]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
#http://127.0.0.1:8000/blood_bank/get-campaigns-by-district?input_district=Galle

@router.get("/get-campaigns-by-district-and-date")
def get_campaigns_by_district_and_date(input_district: str, input_date: str, db: Session = Depends(get_db)):
    try:
        result = db.execute(
            text("CALL FilterCampaignsByDistrictAndDate(:input_district, :input_date)"),
            {"input_district": input_district, "input_date": input_date}
        )
        campaigns = result.fetchall()

        return [
            {
                "campaign_id": row[0],
                "location_address": row[1],
                "district": row[2],
                "province": row[3],
                "date_time": row[4],
                "organizer": row[5]
            }
            for row in campaigns
        ]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
#http://127.0.0.1:8000/blood_bank/get-campaigns-by-district-and-date?input_district=Galle&input_date=2025-05-03
@router.get("/districts", response_model=List[districtResponse])
async def get_districts(db: Session = Depends(get_db)):
    try:
        # Access the enum values from SQLAlchemy Enum type
        districts_enum = DB_Campaign.__table__.columns['district'].type.enums
        
        if not districts_enum:
            raise HTTPException(status_code=404, detail="No districts found")

        # Return as a list of dicts for Pydantic response model
        return [{"district": district} for district in districts_enum]

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
