import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ServicesSummaryComponent } from './services-summary/services-summary.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [MainSliderComponent, ServicesSummaryComponent, VideoSectionComponent, FaqsComponent, ContactComponent],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [MainSliderComponent, ServicesSummaryComponent, VideoSectionComponent, FaqsComponent, ContactComponent],
})
export class HomeModule { }
