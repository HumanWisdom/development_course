import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA07AtPage } from './why-do-i-a07-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA07AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA07AtPageRoutingModule {}
