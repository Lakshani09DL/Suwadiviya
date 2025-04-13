
from services import emergency, hospital_info,nearest_hospital,test_info,clinic_info

async def route_to_handler(intent: str, query: str):
    if intent == "emergency_advice":
        return await emergency.handle_emergency(query)
    elif intent == "hospital_info":
        return await hospital_info.answer_hospital_info(query)
    elif intent == "clinic_schedule":
        return await clinic_info.answer_clinic_schedule(query)
    elif intent == "nearest_hospital":
        return await nearest_hospital.find_nearest(query)
    elif intent =="test_info":
        return await test_info.answer_test_info(query)
    else:
        return await emergency.general_chat(query)