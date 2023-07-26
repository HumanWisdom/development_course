import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA12Page } from './why-do-i-a12.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA12PageRoutingModule {}
