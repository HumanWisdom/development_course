import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA05AtPage } from './why-do-i-a05-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA05AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA05AtPageRoutingModule {}
