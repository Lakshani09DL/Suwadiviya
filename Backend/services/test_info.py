from utils.retriever import retrieve_test_info
from llm.gemini_client import client
from utils.tavily import fetch_web_info  

SIMILARITY_THRESHOLD = 0.5

async def answer_test_info(query: str) -> str:
    try:
        # Step 1: Try retrieving from vector DB
        results = retrieve_test_info(query)
        combined_text = ""
        hospitals = set()

        if results:
            top_results = results[:3]  # Get top 3 results
            for result in top_results:
                similarity = result.get("similarity", 0.0)
                if similarity >= SIMILARITY_THRESHOLD:
                    content = result.get("content", "")
                    hospital_name = result.get("metadata", {}).get("hospital", "the hospital")
                    combined_text += f"{content}\n\n"
                    hospitals.add(hospital_name)

        # Step 2: Fetch web data
        web_data = fetch_web_info(query)
        if web_data:
            combined_text += f"\n\nAdditional information found online:\n{web_data}"

        # Step 3: Generate answer if we have any relevant data
        if combined_text:
            hospitals_string = ", ".join(hospitals) if hospitals else "online sources"
            prompt = f"""
            You are a helpful medical assistant for the Suwadiviya system.
            The user asked: "{query}"
            Here's information retrieved from {hospitals_string}:\n\n{combined_text}

            Please respond with a clear, concise, and helpful answer based on the above info.
            """
            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=prompt.strip()
            )
            return response.text.strip()

        # Step 4: No data found anywhere
        return "I'm sorry, I couldn't find relevant information based on your query."

    except Exception as e:
        return f"Error while processing test info query: {str(e)}"
