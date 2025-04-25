import re
from uuid import uuid4
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings

client = chromadb.PersistentClient(path="E:\SuwaDiviya\Suwadiviya\Backend\VectorDB")
collection = client.get_or_create_collection(name="hospital_info")

embedder = SentenceTransformer("all-MiniLM-L6-v2")

def parse_hospital_chunk(chunk):
    # Extract the hospital name from the first bold line
    match = re.search(r'\*\*(.*?)\*\*', chunk)
    if match:
        hospital_name = match.group(1)
    else:
        hospital_name = "Unknown Hospital"

    # The rest of the chunk is the general information
    general_info = chunk.replace(match.group(0), "").strip() if match else chunk.strip()

    return general_info, {
        "hospital_name": hospital_name,
        "content_type": "general_info"
    }

def process_file(file_path):
    with open(file_path, 'r') as f:
        raw = f.read()

    chunks = [c.strip() for c in raw.split('---') if c.strip()]

    for chunk in chunks:
        doc, meta = parse_hospital_chunk(chunk)
        embedding = embedder.encode(doc).tolist()
        doc_id = f"{meta['hospital_name'].lower().replace(' ', '_')}_{str(uuid4())[:8]}"
        collection.add(documents=[doc], metadatas=[meta], embeddings=[embedding], ids=[doc_id])
    print(f"✅ Loaded {len(chunks)} documents from {file_path}")

process_file("E:/SuwaDiviya/Suwadiviya/Backend/suwadiviya_data/info/General Information of Hospitals.md")
