import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA12AtPage } from './why-do-i-a12-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA12AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA12AtPageRoutingModule {}
