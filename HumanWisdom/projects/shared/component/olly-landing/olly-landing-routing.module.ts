import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OllyLandingComponent } from './olly-landing.component';

const routes: Routes = [
  {
    path: '',
    component: OllyLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OllyLandingRoutingModule {}
