import { Component, OnInit } from '@angular/core';
import { videoSection } from '../../data/home';
@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {

  data;
  constructor() {
    this.data = videoSection;
   }

  ngOnInit(): void {
  }

}
