import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroCarouselPageRoutingModule } from './intro-carousel-routing.module';
import { IntroCarouselPage } from './intro-carousel.page';
import { SplashPageModule } from '../../../adults/src/app/adults/splash/splash.module';
import { SharedModule } from '../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroCarouselPageRoutingModule,
    SharedModule,
    SplashPageModule
  ],
  declarations: [IntroCarouselPage]
})
export class IntroCarouselPageModule { }
