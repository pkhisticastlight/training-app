import { Component, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../services/youtube.data.service';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
   providers: [YoutubeService]
})
export class VideoDashboardComponent implements OnInit {
 videoList: [any];
 selectedVideo: any;
 @ViewChild("videoDetails") videoDetails: VideoPlayerComponent
  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit() {
     this.youtubeService.getPlaylistsForChannel("UC_x5XG1OV2P6uZZ5FSM9Ttw").subscribe((result)=>{
      this.videoList = result;
      this.selectedVideo = this.videoList[0];
      this.videoDetails.setSelectedVideo(this.videoList[0]);
    });
  }
  selectedItem(item) {
    console.log('emitted');
    console.log(item);
    this.selectedVideo = item;
    this.videoDetails.setSelectedVideo(item);
  }
}
