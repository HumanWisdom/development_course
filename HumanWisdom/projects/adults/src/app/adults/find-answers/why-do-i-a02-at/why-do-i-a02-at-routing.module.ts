import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA02AtPage } from './why-do-i-a02-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA02AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA02AtPageRoutingModule {}
