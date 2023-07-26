import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA03Page } from './how-can-i-a03.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA03PageRoutingModule {}
