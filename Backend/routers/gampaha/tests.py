# routers/scan_service.py
from fastapi import APIRouter
from mongo_models.gampaha.gampaha_tests import Tests
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
    special_information: Optional[Dict[str,str]] 

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document



# Endpoint to list all scan services

@router.get("/debug/minimal")
async def minimal_test():
    # Try fetching WITHOUT any Pydantic response model
    docs = await Tests.find_all().to_list()
    return {"count": len(docs), "first_doc": docs[0] if docs else None}

@router.get("/testlist", response_model=List[ScanServiceResponse])
async def list_scan_services():
    scan_services = await Tests.find_all().to_list()  # Get all documents
    return scan_services



