from beanie import Document
from typing import List
from pydantic import BaseModel


class TimeSlot(BaseModel):
    date: str   # Example: "2025-04-18"
    time: str   # Example: "09:00 AM"
    status: str # "available" or "booked"


class TMGampahaClinic(Document):
    clinic_name: str
    time_slots: List[TimeSlot]

    class Settings:
        name = "TMgampahaClinicSlots"  # MongoDB collection name
