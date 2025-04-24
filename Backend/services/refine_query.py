from llm.gemini_client import client


async def refine_emergency_query(user_query: str):
    prompt = f"""
    You are an emergency search assistant. Refine this emergency situation into a short, highly relevant YouTube search query.
    Only return the search query as text and nothing else.

    Emergency query: "{user_query}"
    """
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text.strip()
    except Exception as e:
        return f"Error generating emergency response: {str(e)}"