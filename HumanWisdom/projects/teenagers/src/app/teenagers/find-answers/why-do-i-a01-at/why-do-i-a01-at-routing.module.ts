import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA01AtPage } from './why-do-i-a01-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA01AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA01AtPageRoutingModule {}
