import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA04Page } from './why-do-i-a04.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA04PageRoutingModule {}
