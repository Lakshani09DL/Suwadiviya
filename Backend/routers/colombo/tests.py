from fastapi import APIRouter, HTTPException
from mongo_models.colombo.colombo_tests import ColomboTests
from typing import List, Optional, Dict
from pydantic import BaseModel

router = APIRouter()

# Schema for response when listing tests and scans for Colombo
class ColomboTestScanResponse(BaseModel):
    name: str
    type: str
    machine_name: Optional[str]
    price: int
    location: str
    special_information: Optional[Dict[str, str]]

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document

# Endpoint to list all tests in Colombo
@router.get("/testlist", response_model=List[ColomboTestScanResponse])
async def list_colombo_tests():
    colombo_tests = await ColomboTests.find({"type": "Test"}).to_list(length=None)
    return colombo_tests

# Endpoint to list all scans in Colombo
@router.get("/scanlist", response_model=List[ColomboTestScanResponse])
async def list_colombo_scans():
    colombo_scans = await ColomboTests.find({"type": "Scan"}).to_list(length=None)
    return colombo_scans