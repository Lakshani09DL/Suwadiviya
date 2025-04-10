from typing import List, Dict
from beanie import Document

class HomagamaScanTest(Document):
    name: str
    type: str
    machine_name: str
    price: int
    location: str
    special_information: Dict[str, str]

    class Settings:
        name = "homagama_base_hospital_test&scan_collection"  # collection name