import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA08Page } from './why-do-i-a08.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA08PageRoutingModule {}
