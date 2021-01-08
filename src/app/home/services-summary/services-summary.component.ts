import { Component, OnInit } from '@angular/core';
import { servicesSummary } from '../../../assets/home';

@Component({
  selector: 'app-services-summary',
  templateUrl: './services-summary.component.html',
  styleUrls: ['./services-summary.component.scss']
})
export class ServicesSummaryComponent implements OnInit {

  data;

  constructor() { 
    this.data = servicesSummary.info;
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
