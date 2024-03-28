import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroCarouselPageRoutingModule } from './intro-carousel-routing.module';

import { IntroCarouselPage } from './intro-carousel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroCarouselPageRoutingModule
  ],
  declarations: [IntroCarouselPage]
})
export class IntroCarouselPageModule {}
