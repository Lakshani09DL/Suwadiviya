
from llm.groq_client import query_llama3



def detect_intent(user_query: str) -> str:
    prompt = f"""
You are an intent classifier for a medical chatbot called Suwadiviya.

Classify the following user query into one of these intents:
[emergency_advice, hospital_info, clinic_schedule, test_info, nearest_hospital, general_help]

Examples:
1. Query: "What should I do if someone is having a heart attack?"
   Intent: emergency_advice

2. Query: "Can you tell me about the nearest hospital?"
   Intent: nearest_hospital

3. Query: "What are the available clinics near me?"
   Intent: clinic_schedule

4. Query: "I need information about a blood test."
   Intent: test_info

5. Query: "Where is the general hospital located?"
   Intent: hospital_info

6. Query: "How can I get more help with my health?"
   Intent: general_help

7. Query: "Where is the diabetes clinic?"
   Intent: clinic_schedule
Please return only the intent type out of [emergency_advice, hospital_info, clinic_schedule, test_info, nearest_hospital, general_help]. No explanations needed.
Locations, Time and Date related to clinics come under clinic_schedule.
Now classify the following query:
Query: \"{user_query}\"
Intent:
"""


    response = query_llama3(prompt)
    return response.strip().lower()
