import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA13AtPage } from './why-do-i-a13-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA13AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA13AtPageRoutingModule {}
