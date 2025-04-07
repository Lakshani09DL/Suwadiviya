from typing import List, Optional
from pydantic import BaseModel, Field

class Hospital(BaseModel):
    hospital_id: str
    name: str
    hospital_type: str
    hospital_category: str
    province: str
    address: str
    contact_number: str
    email_address: str
    available_sessions: Optional[List[str]] = None
    available_tests: Optional[List[str]] = None
    field: Optional[str] = None
    id: Optional[str] = Field(alias="_id")


