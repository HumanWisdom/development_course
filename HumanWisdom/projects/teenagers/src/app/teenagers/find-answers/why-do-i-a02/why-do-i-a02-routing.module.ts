import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA02Page } from './why-do-i-a02.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA02PageRoutingModule {}
