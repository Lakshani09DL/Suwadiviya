import os
import requests
from dotenv import load_dotenv
from llm.gemini_client import client

load_dotenv()
GEOAPIFY_PLACES_API_KEY = os.getenv("PLACES_API")

async def find_nearest(query: str, latitude: float = 6.9271, longitude: float = 79.8612) -> str:
    """
    Finds the nearest hospitals using Geoapify API and returns a friendly LLM-generated response.
    :param query: User's original query (e.g., "Find nearest hospital")
    :param latitude: Latitude of the user's location
    :param longitude: Longitude of the user's location
    :return: LLM-generated hospital info
    """

    url = "https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=rect%3A79.7920%2C6.9606%2C79.9500%2C6.8200&limit=20&apiKey=3ff7157fbe77413fb5c3de17a5cc5668"

    headers = {
        "Accept": "application/json"
    }

    try:
        response = requests.get(url, headers=headers)
        print("Geoapify Status:", response.status_code)
        if response.status_code != 200:
            return "I'm having trouble accessing hospital data at the moment. Please try again later."
        
        data = response.json()
        hospitals = data.get("features", [])
        
        if not hospitals:
            return "I couldn't find any hospitals nearby. Please check your location or try again soon."

        hospital_list = "\n".join(
        f"- {h['properties'].get('name', 'Unnamed Hospital')} at {h['properties'].get('formatted', 'Unknown address')}"
        f" contact: {h['properties'].get('phone', 'No phone available')}"
        f" website: {h['properties'].get('website', 'No website available')}"
        f" opening_hours: {h['properties'].get('opening_hours', 'No hours available')}"
        for h in hospitals
        )
        
        prompt = (
            f"You are Suwadiviya, a helpful emergency assistant. A user asked: '{query}'. "
            f"Here are the nearby hospitals found via Geoapify:\n\n{hospital_list}\n\n"
            "Please provide a friendly and concise response for the user including hospital names, addresses and websites. It's better to give few hospitals' details. At the end of your response ask the user to verify the details using websites."
        )

        try:
            response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
            return response.text.strip()
        except Exception as e:
            return f"Error generating response: {str(e)}"
    
    except Exception as e:
        print("Error while requesting Geoapify:", e)
        return "Something went wrong while trying to locate hospitals. Please try again later."
