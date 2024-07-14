import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA09AtPage } from './how-can-i-a09-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA09AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA09AtPageRoutingModule {}
