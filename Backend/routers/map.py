
from fastapi import APIRouter, Response, HTTPException
from dotenv import load_dotenv
import os
import httpx

load_dotenv()

router = APIRouter()

@router.get("/static-map")
async def static_map():
    geoapify_key = os.getenv("MAP_KEY")
    if not geoapify_key:
        raise HTTPException(status_code=500, detail="Geoapify API key not found")

    geoapify_url = (
        "https://maps.geoapify.com/v1/staticmap"
        "?style=osm-bright"
        "&width=600&height=400"
        "&center=lonlat:79.870856,6.920368"
        "&zoom=13.5663"
        "&marker=lonlat:79.8612,6.9271;type:awesome;color:%2319b8fc;size:46"
        "|lonlat:79.86598053559362,6.924362932463055;type:awesome;color:%2319b8fc;size:46"
        f"&apiKey={geoapify_key}"
    )

    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(geoapify_url)
            response.raise_for_status()
            return Response(content=response.content, media_type="image/png")
        except httpx.HTTPError as e:
            raise HTTPException(status_code=500, detail=f"Geoapify map fetch failed: {str(e)}")
