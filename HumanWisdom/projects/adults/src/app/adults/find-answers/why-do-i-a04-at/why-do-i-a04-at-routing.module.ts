import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA04AtPage } from './why-do-i-a04-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA04AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA04AtPageRoutingModule {}
