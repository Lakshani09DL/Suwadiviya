import re
from uuid import uuid4
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings

client = chromadb.PersistentClient(path="F:\Suwadiviya\Suwadiviya\Backend\VectorDB")
collection = client.get_or_create_collection(name="hospital_clinics")

embedder = SentenceTransformer("all-MiniLM-L6-v2")

def parse_clinic_chunk(chunk, hospital_name):
    # Extract the title (first line as clinic name)
    lines = chunk.splitlines()
    title = lines[0].strip() if lines else "Unknown Clinic"
    schedule = "\n".join(lines[1:]).strip() if len(lines) > 1 else ""
    
    return schedule, {
        "hospital": hospital_name,
        "clinic_name": title,
        "content_type": "clinic_schedule"
    }

def process_file(file_path, hospital_name):
    with open(file_path, 'r') as f:
        raw = f.read()

    chunks = [c.strip() for c in raw.split('---') if c.strip()]

    for chunk in chunks:
        doc, meta = parse_clinic_chunk(chunk, hospital_name)
        embedding = embedder.encode(doc).tolist()
        doc_id = f"{hospital_name.lower().replace(' ', '_')}_{str(uuid4())[:8]}"
        collection.add(documents=[doc], metadatas=[meta], embeddings=[embedding], ids=[doc_id])
    print(f"✅ Loaded {len(chunks)} documents from {file_path}")
process_file("F:/Suwadiviya/Suwadiviya/Backend/suwadiviya_data/clinics/National Hospital of Sri Lanka (NHSL).md", "National Hospital of Sri Lanka (NHSL).md")
