import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyDoIA14Page } from './why-do-i-a14.page';

const routes: Routes = [
  {
    path: '',
    component: WhyDoIA14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyDoIA14PageRoutingModule {}
