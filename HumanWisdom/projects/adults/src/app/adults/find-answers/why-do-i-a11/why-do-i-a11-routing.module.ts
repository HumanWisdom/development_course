import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA11Page } from './why-do-i-a11.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA11PageRoutingModule {}
