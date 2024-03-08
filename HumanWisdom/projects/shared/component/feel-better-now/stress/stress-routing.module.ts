import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressPage } from './stress.page';

const routes: Routes = [
  {
    path: '',
    component: StressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressPageRoutingModule {}
