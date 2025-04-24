from fastapi import APIRouter
from services.intent_classifier import detect_intent
from services.response_router import route_to_handler
from services.refine_query import refine_emergency_query
from utils.youtube_search import get_emergency_videos
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    query: str

@router.post("/chat")
async def chat(request: ChatRequest):
    intent = await detect_intent(request.query)

    if intent == "emergency_advice":
        refined_query = await refine_emergency_query(request.query)
        video_results =await  get_emergency_videos(refined_query)
        response = await route_to_handler(intent, request.query)
        
        # Return emergency response with video results
        return {
            "intent": intent,
            "response": response,
            "videos": video_results if video_results else None,
            "hasvideos":bool(video_results)
        }

    # For non-emergency cases, set videos to None
    response = await route_to_handler(intent, request.query)

    return {
        "intent": intent,
        "response": response,
        "videos": None,
        "hasvideos": False
    }
