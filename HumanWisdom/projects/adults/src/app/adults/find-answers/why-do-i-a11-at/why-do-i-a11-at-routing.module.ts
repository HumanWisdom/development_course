import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA11AtPage } from './why-do-i-a11-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA11AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA11AtPageRoutingModule {}
