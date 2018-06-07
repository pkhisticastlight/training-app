import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//channel id - UCbn1OgGei-DV7aSRo_HaAiw
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input()  videoList: [any];
  selectedVideo: any;
  @Output() selectedItem = new EventEmitter<any>();
  constructor(
  ) { }

  ngOnInit() {
  }

  onVideoSelect(item) {
    console.log("I am clicked");
    console.log(item.snippet.title);
    this.selectedItem.emit(item);
  }
  //AIzaSyDaXS-DD7JcO0A5j7CUP4UIWTxcI8Gjaes
}
