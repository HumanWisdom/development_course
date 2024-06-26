import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressAtPage } from './stress-at.page';

const routes: Routes = [
  {
    path: '',
    component: StressAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressAtPageRoutingModule {}
