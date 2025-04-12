from typing import List, Dict
from beanie import Document
from pydantic import BaseModel, Field

class NawalokaScanTest(Document):
    name: str
    type: str
    machine_name: str
    price: int
    location: str
    special_information: Dict[str, str]

    class Settings:
        name = "NawalokaTests"  # collection name