from fastapi import APIRouter
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

router = APIRouter()

# Configure Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=GEMINI_API_KEY)

class ChatRequest(BaseModel):
    query: str

# Function to detect intent using Gemini
def detect_intent(user_query: str):
    prompt = f"""
    You are an AI intent classifier. A user asked: "{user_query}"
    
    If this is an emergency question, respond with only the emergency topic 
    (e.g., "CPR", "Burn", "Heart Attack", "Choking", "Stroke"). 

    If it's NOT an emergency, respond with "General Chat".
    """
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash", contents=prompt
        )
        return response.text.strip()
    except Exception as e:
        return "General Chat"

# Function to handle emergency queries
def handle_emergency(emergency_type: str):
    emergency_prompt = f"""
    You are an AI emergency assistant. Provide step-by-step emergency instructions for "{emergency_type}".
    If the condition is life-threatening, mention seeking immediate medical help.
    """
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash", contents=emergency_prompt
        )
        return response.text.strip()
    except Exception as e:
        return f"Error generating emergency response: {str(e)}"

@router.post("/chat")
async def chat_with_gemini(request: ChatRequest):
    """
    POST endpoint to chat with Gemini AI.
    - Detects intent first.
    - If it's an emergency, provides step-by-step instructions.
    - Otherwise, continues normal chat.
    """
    try:
        intent = detect_intent(request.query)

        if intent != "General Chat":
            # Emergency detected, return emergency instructions
            emergency_response = handle_emergency(intent)
            return {"response": emergency_response}

        # Otherwise, continue with general chat
        response = client.models.generate_content(
            model="gemini-2.0-flash", contents=request.query
        )
        return {"response": response.text.strip()}

    except Exception as e:
        return {"error": str(e)}
