from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from models import Campaign, User, Notification
from database import SessionLocal
from fastapi import APIRouter, Depends,HTTPException
from database import get_db
from typing import List, Optional
from pydantic import BaseModel
from sqlalchemy import text

router = APIRouter()

class NotificationOut(BaseModel):
    notification_id: int
    campaign_id: int
    message: Optional[str]
    status: str
    sent_date: Optional[str]

@router.get("/notifications/{user_id}", response_model=List[NotificationOut])
def get_user_notifications(user_id: int, db: Session = Depends(get_db)):
    try:
        result = db.execute(
            text("CALL get_user_notifications(:user_id)"),
            {"user_id": user_id}
        ).fetchall()

        notifications = [
            {
                "notification_id": row[0],
                "campaign_id": row[1],
                "message": row[2],
                "status": row[3],
                "sent_date": row[4].isoformat() if row[4] else None,
            }
            for row in result
        ]

        return notifications

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling procedure: {str(e)}")    


def send_upcoming_campaign_notifications():
    db = SessionLocal()
    try:
        today = datetime.now().date()
        target_date = today + timedelta(days=7)

        campaigns = db.query(Campaign).filter(
            Campaign.date_time.between(
                datetime.combine(target_date, datetime.min.time()),
                datetime.combine(target_date, datetime.max.time())
            )
        ).all()

        print(f"📢 Found {len(campaigns)} campaigns 7 days from now")

        for campaign in campaigns:
            print(f"🎯 Campaign in {campaign.district} on {campaign.date_time}")

            users = db.query(User).filter(User.district == campaign.district).all()
            print(f"👥 Found {len(users)} users in district {campaign.district}")

            for user in users:
                # ✅ Always create a new notification — no check
                notification = Notification(
                    user_id=user.id,
                    campaign_id=campaign.campaign_id,
                    message=f"Blood donation campaign in your area ({campaign.district}) on {campaign.date_time.strftime('%Y-%m-%d %H:%M')}",
                    status="Pending",
                    sent_date=None
                )
                db.add(notification)
                print(f"✅ New notification added for user {user.id} for campaign {campaign.campaign_id}")

            db.flush()
            db.commit()
            print("🔔 All notifications committed to DB")

        # Now send all pending notifications
        pending_notifications = db.query(Notification).filter(Notification.status == 'Pending').all()
        for notification in pending_notifications:
            try:
                # Simulated send
                notification.status = 'Sent'
                notification.sent_date = datetime.now()
                db.commit()
                print(f"📨 Notification sent to user {notification.user_id} for campaign {notification.campaign_id}")
            except Exception as e:
                notification.status = 'Failed'
                db.commit()
                print(f"❌ Failed to send notification to user {notification.user_id}: {e}")

    except Exception as e:
        print(f"❌ Error in notification job: {e}")
    finally:
        db.close()
