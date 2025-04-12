# routers/scan_service.py
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import List
from pydantic import BaseModel
from datetime import datetime, timedelta

from mongo_models.user.user import User
from utils.security import hash_password, verify_password
from utils.jwt import create_access_token, verify_token

router = APIRouter() 

# OAuth2 scheme for token authentication
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# User response model
class UserResponse(BaseModel):
    name: str
    contact_number: str
    email_address: str
    verification_contact_number: str
    gender: str
    blood_type: str
    address: str
    district: str
    province: str
    dob: datetime
    password: str

    class Config:
        orm_mode = True

# Token response model
class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict  

# Login request model
class LoginRequest(BaseModel):
    email_address: str
    password: str

# Login endpoint
@router.post("/login", response_model=Token)
async def login_for_access_token(form_data: LoginRequest):
    # Find user by email
    user = await User.find_one(User.email_address == form_data.email_address)
    
    # Verify user exists and password is correct
    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Create access token (expires in 30 minutes)
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={"sub": user.email_address},
        expires_delta=access_token_expires
    )
    
    # Prepare user info for response
    user_info = {
        "email_address": user.email_address,
        "name": user.name,
        # Include any other relevant user info
    }
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user_info
    }

# Protected endpoint example
@router.get("/users/me")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    # Verify token and get current user
    email = verify_token(token)
    if not email:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    user = await User.find_one(User.email_address == email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user

# Debug endpoint
@router.get("/debug/minimal")
async def minimal_test():
    docs = await User.find_all().to_list()
    return {"count": len(docs), "first_doc": docs[0] if docs else None}

# List all users
@router.get("/users", response_model=List[UserResponse])
async def list_users():
    users = await User.find_all().to_list()
    return users

# Register new user
@router.post("/register")
async def register(user: UserResponse):
    existing = await User.find_one(User.email_address == user.email_address)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_pw = hash_password(user.password)
    user_dict = user.dict()
    user_dict["password"] = hashed_pw

    new_user = User(**user_dict)
    await new_user.insert()
    return {"message": "User registered successfully"}