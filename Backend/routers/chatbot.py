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

@router.post("/chat")
async def chat_with_gemini(request: ChatRequest):
    """
    POST endpoint to chat with Gemini AI.
    - Accepts JSON input with {"query": "your message"}
    - Returns AI-generated response
    """
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash", contents=request.query
        )
        return {"response": response.text}
    except Exception as e:
        return {"error": str(e)}
