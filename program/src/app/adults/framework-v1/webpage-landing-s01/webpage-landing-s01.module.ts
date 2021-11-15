import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageLandingS01PageRoutingModule } from './webpage-landing-s01-routing.module';

import { WebpageLandingS01Page } from './webpage-landing-s01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageLandingS01PageRoutingModule
  ],
  declarations: [WebpageLandingS01Page]
})
export class WebpageLandingS01PageModule {}
