from beanie import Document #document is used as the base class for models that interact with a MongoDB collection
from pydantic import Field, BaseModel
from typing import Optional

class SpecialInformation(BaseModel):
    why_its_used: Optional[str] = Field(alias="Why it's used")
    before_the_scan: Optional[str] = Field(alias="Before the scan")
    after_the_scan: Optional[str] = Field(alias="After the scan")

    class Config:
        allow_population_by_field_name = True

class Tests(Document):
    name: str
    type: str
    machine_name: Optional[str]
    price: float
    location: str
    special_information: Optional[SpecialInformation]

    
    class Settings:
        collection = "gampahatests"