from beanie import Document
from typing import Optional, Dict

class ColomboTests(Document):
    name: str
    type: str
    machine_name: Optional[str]
    price: int
    location: str
    special_information: Optional[Dict[str, str]]

    class Settings:
        collection = "ColomboTests"