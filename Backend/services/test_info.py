from utils.retriever import retrieve_test_info
from llm.gemini_client import client
from utils.tavily import fetch_web_info  

SIMILARITY_THRESHOLD = 0.5

async def answer_test_info(query: str) -> str:
    try:
        # Step 1: Try retrieving from vector DB
        results = retrieve_test_info(query)
        
        if results:
            top_result = results[0]
            similarity = top_result.get("similarity", 0.0)
            
            if similarity >= SIMILARITY_THRESHOLD:
                text = top_result.get("content", "")  
                hospital_name = top_result.get("metadata", {}).get("hospital", "the hospital")
                
                prompt = f"""
                You are a helpful medical assistant for the Suwadiviya system.
                The user asked: "{query}"
                Here's information retrieved from {hospital_name}:\n\n{text}
                
                Please respond with a clear, concise, and helpful answer based on the above info.
                """
                response = client.models.generate_content(
                    model="gemini-2.0-flash",
                    contents=prompt.strip()
                )
                return response.text.strip()
                
        # Step 2: Tavily fallback (uncommented)
        web_data = fetch_web_info(query)
        
        fallback_prompt = f"""
        The user asked: "{query}"
        No direct match was found in the local hospital database, but the following information was found online:
        
        {web_data}
        
        Please provide an accurate and helpful response based on the above.
        """
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=fallback_prompt.strip()
        )
        return response.text.strip()
        
    except Exception as e:
        return f"Error while processing hospital info query: {str(e)}"