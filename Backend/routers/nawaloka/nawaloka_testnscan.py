from fastapi import APIRouter, HTTPException
from mongo_models.nawaloka.nawaloka_testnscan import NawalokaScanTest
from typing import List, Optional, Dict
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()
connection_str = os.getenv("CONNECTION_STR")
router = APIRouter()

# Schema for response when listing scan services
class ScannTestServiceResponse(BaseModel):
    id: int
    name: str
    type: str
    machine_name: str
    price: int
    location: str
    special_information: Optional[Dict[str, str]] 

    class Config:
        from_attributes = True  # This allows Pydantic to work seamlessly with Beanie's Document



# Endpoint to list all scan services

@router.get("/nawaloka-test-list", response_model=List[ScannTestServiceResponse])
async def list_scan_services():
    test_services = await NawalokaScanTest.find({"type": "Test"}).to_list()
    serialized_items = [
        ScannTestServiceResponse(
            id=index,
            name=item.name,
            type=item.type,
            machine_name=item.machine_name,
            price=item.price,
            location=item.location,
            special_information=item.special_information
        )
        for index, item in enumerate(test_services)
    ]
    return serialized_items
    

@router.get("/nawaloka-scan-list", response_model=List[ScannTestServiceResponse])
async def list_scan_services():
    scan_services = await NawalokaScanTest.find({"type": "Scan"}).to_list()
    serialized_items = [
        ScannTestServiceResponse(
            id=index,
            name=item.name,
            type=item.type,
            machine_name=item.machine_name,
            price=item.price,
            location=item.location,
            special_information=item.special_information
        )
        for index, item in enumerate(scan_services)
    ]
    return serialized_items
