
from fastapi import APIRouter, HTTPException
from mongo_models.telemedicineModels import TMGampahaClinic
from mongo_models.telemedicineModels import AppointmentRequest

from mongo_models.telemedicineModels import Appointment  # Import the new model

router = APIRouter()

@router.get("/timeslots/{clinic_name}")
async def get_time_slots(clinic_name: str):
    clinic = await TMGampahaClinic.find_one(TMGampahaClinic.clinic_name == clinic_name)
    if not clinic:
        raise HTTPException(status_code=404, detail="Clinic not found")
    return clinic.time_slots


@router.post("/appointments/book")
async def book_appointment(data: AppointmentRequest):
    clinic = await TMGampahaClinic.find_one(TMGampahaClinic.clinic_name == data.clinic_name)
    print(clinic)
    if not clinic:
        raise HTTPException(status_code=404, detail="Clinic not found")

    # Update slot status
    for slot in clinic.time_slots:
        label = f"{slot.date} at {slot.time}"
        print(f"Checking slot: {slot.date} at {slot.time} - Status: {slot.status}")
        print(f"Incoming time_slot: {data.time_slot}")

        if label == data.time_slot and slot.status == 'available':
            slot.status = 'booked'
            await clinic.save()

            # Generate mock Zoom link
            zoom_link = f"https://zoom.us/j/1234567890?pwd=mockpass"

            # ✅ Save to the new collection
            appointment = Appointment(
                name=data.name,
                dob=data.dob,
                clinic_name=data.clinic_name,
                time_slot=data.time_slot,
                zoom_link=zoom_link
            )
            print(appointment)
            await appointment.insert()

            return {"zoom_link": zoom_link}

    raise HTTPException(status_code=400, detail="Slot not available")
