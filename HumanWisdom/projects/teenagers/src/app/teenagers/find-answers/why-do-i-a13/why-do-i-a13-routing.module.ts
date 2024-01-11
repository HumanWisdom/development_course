import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA13Page } from './why-do-i-a13.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA13PageRoutingModule {}
