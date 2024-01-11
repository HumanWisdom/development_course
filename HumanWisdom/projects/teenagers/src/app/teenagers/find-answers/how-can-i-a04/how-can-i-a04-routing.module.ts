import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA04Page } from './how-can-i-a04.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA04PageRoutingModule {}
