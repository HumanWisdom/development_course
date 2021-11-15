import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageLandingS02PageRoutingModule } from './webpage-landing-s02-routing.module';

import { WebpageLandingS02Page } from './webpage-landing-s02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageLandingS02PageRoutingModule
  ],
  declarations: [WebpageLandingS02Page]
})
export class WebpageLandingS02PageModule {}
