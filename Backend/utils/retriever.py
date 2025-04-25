import chromadb
from chromadb.config import Settings
from sentence_transformers import SentenceTransformer

def retrieve_hospital_info(query, n_results=1):
    # Initialize Chroma client and embedding model
    client = chromadb.PersistentClient(path="E:\SuwaDiviya\Suwadiviya\Backend\VectorDB")
    collection = client.get_or_create_collection(name="hospital_info")
    
    embedder = SentenceTransformer("all-MiniLM-L6-v2")
    
    # Create query embedding
    query_embedding = embedder.encode(query).tolist()
    
    # Get embeddings and query
    results = collection.query(
        query_texts=query,  
        n_results=n_results,  
        include=["documents", "metadatas", "distances"]
    )
    
    # Format and return results
    formatted_results = []
    
    if results["documents"] and results["documents"][0]:
        for i, (doc, metadata, distance) in enumerate(zip(
            results["documents"][0],
            results["metadatas"][0] if "metadatas" in results and results["metadatas"][0] else [{}] * len(results["documents"][0]),
            results["distances"][0] if "distances" in results and results["distances"][0] else [0] * len(results["documents"][0])
        )):
            formatted_results.append({
                "content": doc,
                "metadata": metadata,
                "similarity":1- distance,  # Convert distance to similarity score
                "rank": i + 1
            })
    
    return formatted_results


def retrieve_clinic_info(query, n_results=3):
    # Initialize Chroma client and embedding model
    client = chromadb.PersistentClient(path="E:\SuwaDiviya\Suwadiviya\Backend\VectorDB")
    collection = client.get_or_create_collection(name="clinics")
    
    embedder = SentenceTransformer("all-MiniLM-L6-v2")
    
    # Create query embedding
    query_embedding = embedder.encode(query).tolist()
    
    # Get embeddings and query
    results = collection.query(
        query_embeddings=query_embedding,  
        n_results=n_results,  
        include=["documents", "metadatas", "distances"]
    )
    
    # Format and return results
    formatted_results = []
    
    if results["documents"] and results["documents"][0]:
        for i, (doc, metadata, distance) in enumerate(zip(
            results["documents"][0],
            results["metadatas"][0] if "metadatas" in results and results["metadatas"][0] else [{}] * len(results["documents"][0]),
            results["distances"][0] if "distances" in results and results["distances"][0] else [0] * len(results["documents"][0])
        )):
            formatted_results.append({
                "content": doc,
                "metadata": metadata,
                "similarity": 1- distance,  # Convert distance to similarity score
                "rank": i + 1
            })
    
    return formatted_results


def retrieve_test_info(query, n_results=8):
    # Initialize Chroma client and embedding model
    client = chromadb.PersistentClient(path="E:\SuwaDiviya\Suwadiviya\Backend\VectorDB")
    collection = client.get_or_create_collection(name="hospital_scans")
    
    embedder = SentenceTransformer("all-MiniLM-L6-v2")
    
    # Create query embedding
    query_embedding = embedder.encode(query).tolist()
    
    # Get embeddings and query
    results = collection.query(
        query_texts=query,  
        n_results=n_results,  
        include=["documents", "metadatas", "distances"]
    )
    
    # Format and return results
    formatted_results = []
    
    if results["documents"] and results["documents"][0]:
        for i, (doc, metadata, distance) in enumerate(zip(
            results["documents"][0],
            results["metadatas"][0] if "metadatas" in results and results["metadatas"][0] else [{}] * len(results["documents"][0]),
            results["distances"][0] if "distances" in results and results["distances"][0] else [0] * len(results["documents"][0])
        )):
            formatted_results.append({
                "content": doc,
                "metadata": metadata,
                "similarity": distance,  # Convert distance to similarity score
                "rank": i + 1
            })
    
    return formatted_results

# Example usage
if __name__ == "__main__":
    query = "does colombo national hospital sri lanka has neurology clinic?"
    results = retrieve_clinic_info(query)
    
    # Print results in a readable format
    for result in results:
        print(f"\nRank: {result['rank']} (Similarity: {result['similarity']:.4f})")
        print(f"Content: {result['content'][:150]}...")  # Show first 150 chars
        print(f"Metadata: {result['metadata']}")
        print("-" * 50)







