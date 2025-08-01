# 🏥 Suwadiviya – AI-Powered Emergency Healthcare Assistant

**Suwadiviya** is a multi-agent AI healthcare assistant designed to provide emergency care guidance, hospital service information, and clinic schedules to users across Sri Lanka. The system integrates advanced LLMs with real-time geolocation, hospital databases, and modular agent workflows to deliver accurate and timely medical support via a web and mobile interface.

---

## 🚀 Features

- 🧠 **Intent Detection Agent**: Uses LLaMA to classify user queries (e.g., emergencies, clinic info, telemedicine).
- 📍 **Nearby Hospital Search**: Uses Gemini + Geoapify API to recommend hospitals based on user location and emergency type.
- 🔎 **Retrieval-Based Question Answering**: Powered by ChromaDB for fast, contextual answers about hospital services, scan/test availability, and clinic schedules.
- 📆 **Clinic Schedules**: Search and view schedules for clinics in hospitals like NHSL and Homagama Base Hospital using the website.


---

## 🛠️ Tech Stack

| Component           | Technology                        |
|---------------------|------------------------------------|
| **Frontend**        | React.js                           |
| **Backend**         | FastAPI                            |
| **Database**        | MongoDB + ChromaDB (vector database) |
| **Models**          | LLaMA, Gemini   |
| **Location API**    | Geoapify                           |
| **Web Search API**    | Tavily                          |

---

---

## 💡 Use Cases

- A user types: _“Where can I do an MRI in Colombo?”_ → The system retrieves MRI services with prices and locations.
- A rural patient says: _“I have chest pain”_ → The emergency agent triggers a video consult and shows nearby cardiac hospitals.
- A caregiver asks: _“What clinics are open today at NHSL?”_ → The chatbot returns clinic times and availability.

---

## 📦 Installation

> ⚠️ This is a development version. Use responsibly.

### 1. Clone the repo

```bash
git clone https://github.com/Lakshani09DL/Suwadiviya.git
cd suwadiviya
```
### 2. Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```
### 3. Environment Variables
Create a .env file in both frontend and backend directories for:
MongoDB URI
Geoapify API key
Gemini and Groq credentials
Tavily API key

## 📚 Data Sources
NHSL clinic schedules
Homagama Base Hospital services
Manually curated test/scan database (name, type, location, machine, cost)
Google Maps & Geoapify API for hospital coordinates



