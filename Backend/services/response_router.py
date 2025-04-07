
from services import emergency, hospital_info,nearest_hospital

async def route_to_handler(intent: str, query: str):
    if intent == "emergency_advice":
        return await emergency.handle_emergency(query)
    elif intent == "hospital_info":
        return await hospital_info.answer_hospital_info(query)
    elif intent == "clinic_schedule":
        return await hospital_info.answer_clinic_schedule(query)
    elif intent == "nearest_hospital":
        return await nearest_hospital.find_nearest(query)
    
    else:
        return "I'm not sure how to help with that yet."