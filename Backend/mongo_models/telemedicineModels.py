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

class AppointmentRequest(BaseModel):
    name: str
    dob: str
    clinic_name: str
    time_slot: str

class Appointment(Document):
    name: str
    dob: str
    clinic_name: str
    time_slot: str  # Format: "YYYY-MM-DD at HH:MM AM/PM"
    zoom_link: str

    class Settings:
        name = "GampahaTMappointments"  # This will be your MongoDB collection name


        