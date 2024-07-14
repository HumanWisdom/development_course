import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA06AtPage } from './why-do-i-a06-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA06AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA06AtPageRoutingModule {}
