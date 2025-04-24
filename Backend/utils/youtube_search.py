from googleapiclient.discovery import build
import os
from dotenv import load_dotenv
load_dotenv()
YOUTUBE_API_KEY = os.getenv("YOUTUBE_KEY")  

async def get_emergency_videos(query: str, max_results=3):
    youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

    request = youtube.search().list(
        part="snippet",
        q=query,
        type="video",
        maxResults=max_results,
        safeSearch="strict"
    )

    response = request.execute()

    videos = [
        {
            "title": item["snippet"]["title"],
            "url": f"https://www.youtube.com/watch?v={item['id']['videoId']}",
            "thumbnail": item["snippet"]["thumbnails"].get("medium", item["snippet"]["thumbnails"].get("default"))["url"]
        }
        for item in response.get("items", [])
        if item["id"].get("videoId")
    ]

    return videos


if __name__ == "__main__":
    query = "how to perform CPR first aid tutorial"
    results = get_emergency_videos(query)
    for vid in results:
        print(f"{vid['title']}: {vid['url']}")
