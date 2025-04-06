from fastapi import FastAPI
from routers import chatbot
from routers import blood_bank



app = FastAPI()
app.include_router(chatbot.router, prefix='/chatbot', tags=['Chatbot'])
app.include_router(blood_bank.router, prefix='/blood_bank', tags=['Blood Bank'])



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)