import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA09Page } from './how-can-i-a09.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA09PageRoutingModule {}
