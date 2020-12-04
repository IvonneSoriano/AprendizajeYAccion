import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {

      $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('.nav').addClass('sticky');
        }
        else {
            $('.nav').removeClass('sticky');
        }
    });
 });
  }

}
