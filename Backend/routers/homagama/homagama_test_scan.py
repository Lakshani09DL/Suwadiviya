from fastapi import APIRouter
from pydantic import BaseModel, Field
from typing import List, Dict
from beanie import Document, init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from mongo_models.homagama.homagama_test_scan import HomagamaScanTest
import os
import asyncio

load_dotenv()
connection_str = os.getenv("CONNECTION_STR")

router = APIRouter()

class ScanTestListResponse(BaseModel):
    id: int
    name: str
    type: str
    machine_name: str
    price: int
    location: str
    special_information: Dict[str, str]

    class Config:
        from_attributes = True



@router.get("/homagama-scan-list", response_model=List[ScanTestListResponse])
async def get_scan_list():
    items = await HomagamaScanTest.find({"type":"Scan"}).to_list()
    serialized_items = [
        ScanTestListResponse(
            id=index,
            name=item.name,
            type=item.type,
            machine_name=item.machine_name,
            price=item.price,
            location=item.location,
            special_information=item.special_information
        )
        for index, item in enumerate(items)
    ]
    return serialized_items


@router.get("/homagama-test-list", response_model=List[ScanTestListResponse])
async def get_test_list():
    items = await HomagamaScanTest.find({"type":"Test"}).to_list()
    serialized_items = [
        ScanTestListResponse(
            id=index,
            name=item.name,
            type=item.type,
            machine_name=item.machine_name,
            price=item.price,
            location=item.location,
            special_information=item.special_information
        )
        for index, item in enumerate(items)
    ]
    return serialized_items