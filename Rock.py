
import base64
import os
from dotenv import load_dotenv
import requests
from flask import Flask, jsonify, Blueprint, request
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
spotify = Blueprint('spotify_app', __name__)
CORS(app, resources={r"/Rock": {"origins": "*"}})

# Constants
SPOTIFY_URL = "https://api.spotify.com/v1/"
SPOTIFY_CLIENT_SECRET = os.getenv('CLIENT_SECRET')
SPOTIFY_CLIENT_ID = os.getenv('CLIENT_ID')


# Function to get access token from Spotify API
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
        return None


# Function to fetch gospel music tracks from Spotify
def Rock_music(offset=0, limit=15):
    access_token = get_access_token()
    if access_token:
        headers = {
            "Authorization": f"Bearer {access_token}"
        }

        search_url = f"{SPOTIFY_URL}search"
        params = {
            "q": "Rock",
            "type": "track",
            "limit": limit,
            "offset": offset
        }
        response = requests.get(search_url, headers=headers, params=params)
        if response.status_code == 200:
            tracks = response.json().get("tracks", {}).get("items", [])
            return tracks
        else:
            return None
    else:
        return None


# Function to handle song data
def get_Rock_songs(data):
    offset = data.get('offset', 0)
    limit = data.get('limit', 15)

    tracks = Rock_music(offset, limit)
    if tracks:
        songs = []
        for track in tracks:
            artist_image_url = (
                track["album"]["images"][0]["url"]
                if track["album"].get("images")
                else None
            )
            song_data = {
                "id": track["id"],
                "name": track['name'],
                "artist": track["artists"][0]["name"],
                "url": track.get("preview_url"),
                "artist_image_url": artist_image_url,
            }
            songs.append(song_data)
        return jsonify(songs), 200
    else:
        return jsonify({"error": "No Rock songs found"}), 404
