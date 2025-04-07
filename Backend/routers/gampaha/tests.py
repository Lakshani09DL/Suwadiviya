# routers/scan_service.py
from fastapi import APIRouter
from mongo_models.gampaha.gampaha_tests import Tests
from typing import List, Optional
from pydantic import BaseModel

router = APIRouter()

# Schema for response when listing scan services
class ScanServiceResponse(BaseModel):
    id: str
    name: str
    type: str
    machine_name: str
    price: float
    location: str
    special_information: Optional[dict] 

    class Config:
        orm_mode = True  # This allows Pydantic to work seamlessly with Beanie's Document

# Endpoint to list all scan services
@router.get("/testlist", response_model=List[ScanServiceResponse])
async def list_scan_services():
    scan_services = await Tests.find_all().to_list()  # Get all documents
    return scan_services
