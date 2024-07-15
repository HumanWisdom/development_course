import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA10AtPage } from './why-do-i-a10-at.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA10AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA10AtPageRoutingModule {}
