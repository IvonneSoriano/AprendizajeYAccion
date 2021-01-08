import { Component, OnInit } from '@angular/core';
import { videoSection } from '../../../assets/home';
import $ from 'jquery';

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
    $(document).ready(function(){
      

    })
  }

}
