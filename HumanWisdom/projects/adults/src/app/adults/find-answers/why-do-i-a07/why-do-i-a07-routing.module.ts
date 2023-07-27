import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA07Page } from './why-do-i-a07.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA07PageRoutingModule {}
