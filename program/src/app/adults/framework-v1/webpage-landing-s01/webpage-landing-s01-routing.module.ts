import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageLandingS01Page } from './webpage-landing-s01.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageLandingS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageLandingS01PageRoutingModule {}
