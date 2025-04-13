import re
from uuid import uuid4
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings

# Initialize ChromaDB client with persistence
# Use new ChromaDB client API
client = chromadb.PersistentClient(path="C:/Users/migar/Suwadiviya/Backend/VectorDB")
collection = client.get_or_create_collection(name="hospital_scans")


# Create or load the scans/tests collection
collection = client.get_or_create_collection(name="hospital_scans")

# Load sentence transformer model
embedder = SentenceTransformer("all-MiniLM-L6-v2")

# Parse each chunk
def parse_scan_chunk(chunk, hospital_name):
    lines = [line.strip() for line in chunk.strip().splitlines() if line.strip()]
    first_line = lines[0] if lines else "Untitled"
    
    # Clean title: remove bold markers if present
    title = re.sub(r'^\*\*(.*?)\*\*$', r'\1', first_line)

    return chunk.strip(), {
        "hospital": hospital_name,
        "title": title
    }

# Process a file of scan/test chunks
def process_file(file_path, hospital_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        raw = f.read()

    chunks = [c.strip() for c in raw.split('---') if c.strip()]

    for chunk in chunks:
        doc, meta = parse_scan_chunk(chunk, hospital_name)
        embedding = embedder.encode(doc).tolist()
        doc_id = f"{hospital_name.lower().replace(' ', '_')}_{str(uuid4())[:8]}"
        collection.add(
            documents=[doc],
            metadatas=[meta],
            embeddings=[embedding],
            ids=[doc_id]
        )

    # Save to disk
    
    print(f"✅ Loaded {len(chunks)} documents from {file_path}")

# Example usage
process_file("C:/Users/migar/Suwadiviya/Backend/suwadiviya_data/scans_tests/District General Hospital Gampaha .md", "District General Hospital Gampaha")

