from fastapi import APIRouter, HTTPException
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
    special_information: Optional[Dict[str, str]] 

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document


# Schema for request body when creating a new scan service
class ScanServiceCreateRequest(BaseModel):
    name: str
    type: str
    machine_name: Optional[str]
    price: int
    location: str
    special_information: Optional[Dict[str, str]] 

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

# Endpoint to create a new scan service
@router.post("/create", response_model=ScanServiceResponse)
async def create_scan_service(scan_service: ScanServiceCreateRequest):
    scan_service_dict = scan_service.dict()  # Convert to dictionary
    created_service = Tests(**scan_service_dict)
    await created_service.insert()  # Insert the document
    print(f"Inserted Document: {created_service}")  # Add this log
    return created_service
