import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA06Page } from './why-do-i-a06.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA06PageRoutingModule {}
