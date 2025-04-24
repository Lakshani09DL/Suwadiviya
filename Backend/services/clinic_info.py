from utils.retriever import retrieve_clinic_info
from llm.gemini_client import client
from utils.tavily import fetch_web_info

SIMILARITY_THRESHOLD = 0.01

async def answer_clinic_schedule(query: str) -> str:
    try:
        # Step 1: Try retrieving from vector DB
        results = retrieve_clinic_info(query)
        combined_text = ""
        hospitals = set()

        # Process vector DB results
        if results:
            top_results = results[:3]  # Take top 3 results
            
            for result in top_results:
                similarity = result.get("similarity", 0.0)
                
                if similarity >= SIMILARITY_THRESHOLD:
                    content = result.get("content", "")
                    hospital_name = result.get("metadata", {}).get("hospital", "the hospital")
                    combined_text += f"{content}\n\n"
                    hospitals.add(hospital_name)

        # Step 2: Fetch web data if no sufficient results are found in the DB
        web_data = fetch_web_info(query)
        
        if web_data:
            combined_text += f"\n\nAdditional information found online:\n{web_data}"

        # If we have combined results from the DB or web, proceed to generate a response
        if combined_text:
            hospitals_string = ", ".join(hospitals)
            prompt = f"""
            You are a helpful medical assistant for the Suwadiviya system.
            The user asked: "{query}"
            Here's information retrieved from {hospitals_string} and online sources:\n\n{combined_text}
            
            Please respond with a clear, concise, and helpful answer based on the above info.
            """
            
            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=prompt.strip()
            )
            return response.text.strip()

        # If no relevant results were found, return a fallback message
        return "I'm sorry, I couldn't find relevant information based on your query."

    except Exception as e:
        return f"Error while processing hospital info query: {str(e)}"
