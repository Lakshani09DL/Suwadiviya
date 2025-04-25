from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.homagama import homagama_clinics
from routers.homagama import homagama_test_scan


from routers.gampaha import tests
from routers.gampaha import clinics
from routers.user import users


from routers.nawaloka import nawaloka_clinics
from routers.nawaloka import nawaloka_testnscan

from routers.colombo import tests as colombo_tests  # Add this import
from routers.colombo import clinics as colombo_clinics # Add this impor

from mongodb import init_db



from routers import chatbot, blood_bank,map
from tasks.notifications import router as notifications_router  # Import the router
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from tasks.notifications import send_upcoming_campaign_notifications
from routers import telemedicineRoutes


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await init_db()
    print("Database connected")

# Include routers



app.include_router(chatbot.router, prefix='/chatbot', tags=['Chatbot'])
app.include_router(blood_bank.router, prefix='/blood_bank', tags=['Blood Bank'])
app.include_router(notifications_router, prefix="/notifications", tags=["Notifications"])
app.include_router(map.router, prefix='/map', tags=["Map"])

app.include_router(homagama_test_scan.router, prefix='/homagama/tests', tags=['Homagama tests'])
app.include_router(homagama_test_scan.router, prefix='/homagama/scans', tags=['Homagama scans'])
app.include_router(homagama_clinics.router, prefix='/homagama/clinics', tags=['Homagama clinics'])

app.include_router(tests.router, prefix='/gampaha/tests', tags=['Gampaha tests'])
app.include_router(clinics.router, prefix='/gampaha/clinics', tags=['Gampaha clinics'])


app.include_router(nawaloka_testnscan.router, prefix='/nawaloka/tests', tags=['Nawaloka tests'])
app.include_router(nawaloka_testnscan.router, prefix='/nawaloka/scans', tags=['Nawaloka scans'])
app.include_router(nawaloka_clinics.router, prefix='/nawaloka/clinics', tags=['Nawaloka clinics'])

app.include_router(colombo_tests.router, prefix='/colombo/tests', tags=['Colombo tests']) # Add this line
app.include_router(colombo_clinics.router, prefix='/colombo/clinics', tags=['Colombo clinics']) # Add this line


app.include_router(users.router, prefix='/users', tags=['Users'])

app.include_router(telemedicineRoutes.router, prefix='/tm-gampaha/clinics', tags=['TM Gampaha Clinics'])
app.include_router(telemedicineRoutes.router, tags=["Appointments"])

# Set up the scheduler
#scheduler = BackgroundScheduler()

# ✅ Add job to run every day at midnight
"""scheduler.add_job(
    send_upcoming_campaign_notifications,
    CronTrigger(hour=0, minute=0),
    id="campaign_notification_job",
    replace_existing=True
)

#scheduler.start()

# Graceful shutdown
@app.on_event("shutdown")
def shutdown_event():
    scheduler.shutdown()"""

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)


