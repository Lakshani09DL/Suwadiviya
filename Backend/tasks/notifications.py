from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from models import Campaign, User, Notification
from database import SessionLocal

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
                # Check if a notification already exists for the user and campaign
                existing = db.query(Notification).filter_by(
                    user_id=user.id, campaign_id=campaign.campaign_id
                ).first()

                if not existing:
                    # Create a new notification with status "Pending"
                    notification = Notification(
                        user_id=user.id,
                        campaign_id=campaign.campaign_id,
                        status="Pending"  # Status set to 'Pending' initially
                    )
                    db.add(notification)
                    print(f"✅ Notification added for user {user.id}")

            # Commit the changes to the DB after adding all notifications
            db.commit()
            print("🔔 All notifications committed to DB")

        # If notifications have been successfully sent, update the status to 'Sent'
        for notification in db.query(Notification).filter(Notification.status == 'Pending').all():
            # Simulate notification being sent
            try:
                # Here you would have the logic to send the notification (e.g., via email/SMS)
                # For this example, let's assume it's sent successfully
                notification.status = 'Sent'
                notification.sent_date = datetime.now()  # Store the sent date/time
                db.commit()
                print(f"✅ Notification sent to user {notification.user_id} for campaign {notification.campaign_id}")
            except Exception as e:
                # In case of error, update the status to 'Failed'
                notification.status = 'Failed'
                db.commit()
                print(f"❌ Failed to send notification to user {notification.user_id} for campaign {notification.campaign_id}: {e}")

    except Exception as e:
        print(f"❌ Error in notification job: {e}")

    finally:
        db.close()
