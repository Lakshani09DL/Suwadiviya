
from fastapi import APIRouter, HTTPException
from mongo_models.telemedicineModels import TMGampahaClinic

router = APIRouter()

@router.get("/timeslots/{clinic_name}")
async def get_time_slots(clinic_name: str):
    clinic = await TMGampahaClinic.find_one(TMGampahaClinic.clinic_name == clinic_name)
    if not clinic:
        raise HTTPException(status_code=404, detail="Clinic not found")
    return clinic.time_slots
