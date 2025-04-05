from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from routers import chatbot
from typing import List
import models

from database import engine, get_db

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(chatbot.router, prefix='/api',tags=['Chatbot'])


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
@app.get("/")
def root():
    return {"message": "Welcome to Blood Bank API"}


@app.get("/campaigns")
def get_campaigns(db: Session = Depends(get_db)):
    return db.query(models.Campaign).all()
