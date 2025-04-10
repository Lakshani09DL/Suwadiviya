from fastapi import APIRouter
from services.intent_classifier import detect_intent
from services.response_router import route_to_handler
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    query: str

@router.post("/chat")
async def chat(request: ChatRequest):
    intent = await detect_intent(request.query)
    response = await route_to_handler(intent, request.query)
    return {"intent": intent, "response": response}
    