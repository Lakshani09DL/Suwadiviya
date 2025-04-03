from fastapi import FastAPI
from routers import chatbot

app = FastAPI()
app.include_router(chatbot.router, prefix='/api',tags=['Chatbot'])


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)