from flask import Blueprint, request

from HipHop import get_HipHop_songs
from Jazz import get_Jazz_songs
from Pop import get_Pop_songs
from Rock import get_Rock_songs
from classical import get_classical_songs
from gospel import get_gospel_songs

spotify = Blueprint('spotify_app', __name__)


@spotify.post('/gospel')
def gospel_music_route():
    data = request.get_json() or {}
    return get_gospel_songs(data)


#http://127.0.0.1:5000/gospel

@spotify.get('/classical')
def classical_route():
    search_query = request.args.get("query", "classical")
    page = int(request.args.get("page", 1))
    return get_classical_songs(search_query, page)


@spotify.post('/HipHop')
def HipHop_music_route():
    data = request.get_json() or {}
    return get_HipHop_songs(data)


@spotify.get('/Jazz')
def Jazz_route():
    search_query = request.args.get("query", "Jazz")
    page = int(request.args.get("page", 1))
    return get_Jazz_songs(search_query, page)


@spotify.get('/Pop')
def Pop_route():
    search_query = request.args.get("query", "Pop")
    page = int(request.args.get("page", 1))
    return get_Pop_songs(search_query, page)


@spotify.post('/Rock')
def Rock_music_route():
    data = request.get_json() or {}
    return get_Rock_songs(data)
