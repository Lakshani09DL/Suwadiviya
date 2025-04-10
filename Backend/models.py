# models.py
from sqlalchemy import Column, Integer, String, Enum, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(30))
    contact_number = Column(Integer)
    email_address = Column(String(30))
    gender = Column(Enum('male', 'female', 'other'))
    blood_type = Column(Enum('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'))
    district = Column(String(50))
    province = Column(Enum('Western', 'Central', 'Southern', 'Uva', 'Sabaragamuwa',
                           'North Western', 'North Central', 'Northern', 'Eastern'))

    notifications = relationship("Notification", back_populates="user")


class Campaign(Base):
    __tablename__ = "campaigns"

    campaign_id = Column(Integer, primary_key=True, index=True)
    location_address = Column(String(50))
    district = Column(Enum('Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Kalutara', 'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'))
    province = Column(Enum('Western', 'Central', 'Southern', 'Uva', 'Sabaragamuwa',
                           'North Western', 'North Central', 'Northern', 'Eastern'))
    date_time = Column(DateTime)
    organizer = Column(String(30))

    notifications = relationship("Notification", back_populates="campaign")


class Notification(Base):
    __tablename__ = "notifications"

    notification_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    campaign_id = Column(Integer, ForeignKey("campaigns.campaign_id"))
    sent_date = Column(DateTime)
    message = Column(String(255))
    status = Column(Enum('Sent', 'Pending', 'Failed'))

    user = relationship("User", back_populates="notifications")
    campaign = relationship("Campaign", back_populates="notifications")
