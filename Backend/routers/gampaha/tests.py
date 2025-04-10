from fastapi import APIRouter, HTTPException
from mongo_models.gampaha.gampaha_tests import GampahaTests
from typing import List, Optional, Dict
from pydantic import BaseModel

router = APIRouter()

# Schema for response when listing scan services
class ScanServiceResponse(BaseModel):
    name: str
    type: str
    machine_name: str
    price: int
    location: str
    special_information: Optional[Dict[str, str]] 

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document



# Endpoint to list all scan services

@router.get("/testlist", response_model=List[ScanServiceResponse])
async def list_scan_services():
    scan_services = await GampahaTests.find({"type": "Test"}).to_list(length=None)
    return scan_services

@router.get("/scanlist", response_model=List[ScanServiceResponse])
async def list_scan_services():
    scan_services = await GampahaTests.find({"type": "Scan"}).to_list(length=None)
    return scan_services