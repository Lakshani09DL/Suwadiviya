from typing import Optional, Dict
from pydantic import BaseModel, Field

class GampahaTest(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str
    type: str
    machine_name: str
    price: int
    location: str
    special_information: Optional[Dict[str, str]] = None
