import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA08AtPage } from './why-do-i-a08-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA08AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA08AtPageRoutingModule {}
