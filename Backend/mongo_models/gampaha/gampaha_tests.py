from beanie import Document #document is used as the base class for models that interact with a MongoDB collection
from typing import Optional, Dict


class GampahaTests(Document):
    name: str
    type: str
    machine_name: Optional[str]
    price: int
    location: str
    special_information: Optional[Dict[str,str]]

    
    class Settings:
        collection = "GampahaTests"