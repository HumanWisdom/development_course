import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA09AtPage } from './why-do-i-a09-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA09AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA09AtPageRoutingModule {}
