import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA03Page } from './why-do-i-a03.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA03PageRoutingModule {}
