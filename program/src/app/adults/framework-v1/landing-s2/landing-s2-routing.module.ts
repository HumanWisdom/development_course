import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingS2Page } from './landing-s2.page';

const routes: Routes = [
  {
    path: '',
    component: LandingS2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingS2PageRoutingModule {}
