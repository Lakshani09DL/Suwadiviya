# routers/scan_service.py
from fastapi import APIRouter
from mongo_models.user.user import User
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

# Schema for response when listing scan services
class UserResponse(BaseModel):
    name: str
    contact_number: str
    email_address: str
    verification_contact_number: str
    gender: str
    blood_type: str
    address: str
    district: str
    province: str
    dob: datetime

    class Config:
        orm_mode = True  # This allows Pydantic to work seamlessly with Beanie's Document

# Endpoint for users

@router.get("/debug/minimal")
async def minimal_test():
    # Try fetching WITHOUT any Pydantic response model
    docs = await User.find_all().to_list()
    return {"count": len(docs), "first_doc": docs[0] if docs else None}
