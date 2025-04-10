from llm.gemini_client import client

# Handles emergency instructions for a given type (e.g., "CPR", "Burn")
async def handle_emergency(user_query: str):
    prompt = f"""
    You are an AI emergency assistant. Provide step-by-step or suitable emergency instructions for "{user_query}".
    If the condition is life-threatening, mention seeking immediate medical help.
    """
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text.strip()
    except Exception as e:
        return f"Error generating emergency response: {str(e)}"

# Handles general chat using Gemini
async def general_chat(user_query: str):
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=user_query
        )
        return response.text.strip()
    except Exception as e:
        return f"An error occurred: {str(e)}"
