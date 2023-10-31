import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA01Page } from './why-do-i-a01.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA01PageRoutingModule {}
