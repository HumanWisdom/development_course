import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyCheckInLandingPage } from './daily-checkin-landing.page';

const routes: Routes = [
  {
    path: '',
    component: DailyCheckInLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyCheckInLandingPageRoutingModule {}
