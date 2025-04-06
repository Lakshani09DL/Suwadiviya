# routers/blood_bank.py
from pydantic import BaseModel
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db  # Assuming get_db is defined in database.py
from models import Campaign as DB_Campaign  # SQLAlchemy model
from datetime import datetime

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



@router.get("/campaigns", response_model=List[CampaignResponse])
def get_campaigns(db: Session = Depends(get_db)):
    try:
        campaigns = db.query(DB_Campaign).all()
        return campaigns
    except Exception as e:
        print("❌ Error fetching campaigns:", e)
        raise HTTPException(status_code=500, detail="Internal Server Error")
