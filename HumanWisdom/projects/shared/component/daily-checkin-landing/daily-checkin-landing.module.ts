import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DailyCheckInLandingPage } from './daily-checkin-landing.page';
import { DailyCheckInLandingPageRoutingModule } from './daily-checkin-landing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyCheckInLandingPageRoutingModule
  ],
  declarations: [DailyCheckInLandingPage]
})
export class DailyCheckInLandingPageModule {}
