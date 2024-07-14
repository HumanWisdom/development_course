import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA14AtPage } from './why-do-i-a14-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA14AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA14AtPageRoutingModule {}
