import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class YoutubeService {
  apiKey = 'AIzaSyDaXS-DD7JcO0A5j7CUP4UIWTxcI8Gjaes';
 
  constructor(public http: Http) { }
 
  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,contentDetails,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }
 
  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }
}