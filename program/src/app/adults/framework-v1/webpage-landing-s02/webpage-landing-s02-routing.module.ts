import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageLandingS02Page } from './webpage-landing-s02.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageLandingS02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageLandingS02PageRoutingModule {}
