import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA09Page } from './why-do-i-a09.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA09PageRoutingModule {}
