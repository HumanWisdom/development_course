import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeTrialPage } from './free-trial.page';

const routes: Routes = [
  {
    path: '',
    component: FreeTrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeTrialPageRoutingModule {}
