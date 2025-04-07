from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#from routers import chatbot
#from routers import blood_bank
from routers.gampaha import tests
from routers.user import users
from mongodb import init_db

app = FastAPI()

# 👇 Add CORS middleware before including routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend origin (Vite)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await init_db()
    print("Database connected")

# Include routers
#app.include_router(chatbot.router, prefix='/chatbot', tags=['Chatbot'])
#app.include_router(blood_bank.router, prefix='/blood_bank', tags=['Blood Bank'])
app.include_router(tests.router, prefix='/gampaha/tests', tags=['Gampaha tests'])
app.include_router(users.router, prefix='/users', tags=['Users'])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

