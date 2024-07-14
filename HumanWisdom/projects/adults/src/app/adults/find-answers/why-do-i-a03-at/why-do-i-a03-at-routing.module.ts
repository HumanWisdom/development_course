import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA03AtPage } from './why-do-i-a03-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA03AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA03AtPageRoutingModule {}
