# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Get your Aiven database connection details
DB_HOST = os.getenv("DB_HOST")  # e.g., your Aiven host
DB_PORT = os.getenv("DB_PORT")  # default is usually 3306
DB_NAME = os.getenv("DB_NAME")  # Your database name
DB_USER = os.getenv("DB_USER")  # Your username
DB_PASSWORD = os.getenv("DB_PASSWORD")  # Your password

DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for ORM models
Base = declarative_base()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
