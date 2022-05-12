import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachLoginPage } from './coach-login.page';

const routes: Routes = [
  {
    path: 'caoch-login',
    component: CoachLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachLoginPageRoutingModule {}
