import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA05Page } from './why-do-i-a05.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA05PageRoutingModule {}
