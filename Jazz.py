import base64
import os

import requests
from dotenv import load_dotenv
from flask import jsonify

load_dotenv()

SPOTIFY_URL = "https://api.spotify.com/v1/"
SPOTIFY_CLIENT_SECRET = os.getenv('CLIENT_SECRET')
SPOTIFY_CLIENT_ID = os.getenv('CLIENT_ID')


def get_access_token():
    auth_url = "https://accounts.spotify.com/api/token"
    credentials = f'{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}'
    client_credentials = base64.b64encode(credentials.encode()).decode('utf-8')

    auth_data = {
        "grant_type": "client_credentials"
    }
    auth_header = {
        "Authorization": f"Basic {client_credentials}",
        "Content-Type": 'application/x-www-form-urlencoded'
    }

    response = requests.post(auth_url, data=auth_data, headers=auth_header)
    if response.status_code == 200:
        return response.json().get("access_token")
    else:
        print("Failed to get access token:", response.json())
        return None


def Jazz_music(query="Jazz", page=1):
    access_token = get_access_token()
    if access_token:
        headers = {
            "Authorization": f"Bearer {access_token}"
        }

        search_url = f"{SPOTIFY_URL}search"
        offset = (page - 1) * 15  # Calculate offset based on the page
        params = {
            "q": query,
            "type": "track",
            "limit": 15,
            "offset": offset
        }
        response = requests.get(search_url, headers=headers, params=params)
        if response.status_code == 200:
            tracks = response.json().get("tracks", {}).get("items", [])
            return tracks
        else:
            print("Failed to fetch tracks:", response.json())
            return None
    else:
        return None


def get_Jazz_songs(query="Jazz", page=1):
    tracks = Jazz_music(query, page)
    if tracks:
        songs = [
            {
                "name": track['name'],
                "artist": track["artists"][0]['name'],
                "url": track["external_urls"]["spotify"],
                "artist_image_url": track["artists"][0].get("images", [{}])[0].get("url")
            }
            for track in tracks
        ]
        return jsonify(songs), 200
    else:
        return jsonify({"error": "Unable to retrieve music tracks"}), 500
