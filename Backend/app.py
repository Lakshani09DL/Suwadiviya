from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import chatbot, blood_bank

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger  # Optional: explicit trigger type
from tasks.notifications import send_upcoming_campaign_notifications

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chatbot.router, prefix='/chatbot', tags=['Chatbot'])
app.include_router(blood_bank.router, prefix='/blood_bank', tags=['Blood Bank'])

# Set up the scheduler
scheduler = BackgroundScheduler()

# ✅ Add job to run every day at midnight
scheduler.add_job(
    send_upcoming_campaign_notifications,
    CronTrigger(hour=0, minute=0),  # For production, runs daily at midnight
    #CronTrigger(minute='*'),  # For testing, runs every minute
    id="campaign_notification_job",
    replace_existing=True
)

scheduler.start()

# Graceful shutdown
@app.on_event("shutdown")
def shutdown_event():
    scheduler.shutdown()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
