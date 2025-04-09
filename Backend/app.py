from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import chatbot
from routers import blood_bank

from apscheduler.schedulers.background import BackgroundScheduler
from tasks.notifications import send_upcoming_campaign_notifications  # 👈 Import your task

app = FastAPI()

# 👇 Add CORS middleware before including routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend origin (Vite)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chatbot.router, prefix='/chatbot', tags=['Chatbot'])
app.include_router(blood_bank.router, prefix='/blood_bank', tags=['Blood Bank'])

# 👇 Set up and start the scheduler
scheduler = BackgroundScheduler()
scheduler.add_job(send_upcoming_campaign_notifications, 'interval', seconds=30)
scheduler.start()

# 👇 Optional: Graceful shutdown
@app.on_event("shutdown")
def shutdown_event():
    scheduler.shutdown()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
