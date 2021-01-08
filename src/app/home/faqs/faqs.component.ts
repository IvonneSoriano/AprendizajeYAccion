import { Component, OnInit } from '@angular/core';
import {faqs} from '../../../assets/home';
declare var $: any;


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  data;

  constructor() {
    this.data = faqs;
   }

  ngOnInit(): void {
    $(document).ready(function() {

      $('.faq').on('click',function(){
        var t = $(this);
        t.toggleClass("active");
      });
 });
  }

  openClose(){
    $('.faq').toggleClass("active");
  }


}
