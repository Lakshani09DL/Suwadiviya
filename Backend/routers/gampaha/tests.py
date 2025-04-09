from fastapi import APIRouter
from typing import List
from schemas.gamaphatests import GampahaTest
from mongodb import gampaha_tests  
router = APIRouter()

@router.get("/gampahatests", response_model=List[GampahaTest])
def list_gampaha_tests():
    cursor = gampaha_tests.find()
    tests = []

    for test in cursor:
        test["_id"] = str(test["_id"])  # Convert ObjectId to str
        tests.append(GampahaTest(**test))

    return tests
