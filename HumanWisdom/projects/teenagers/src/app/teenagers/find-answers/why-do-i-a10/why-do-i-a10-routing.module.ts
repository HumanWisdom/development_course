import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA10Page } from './why-do-i-a10.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA10PageRoutingModule {}
