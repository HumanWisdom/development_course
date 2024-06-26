import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoredomAtPage } from './boredom-at.page';

const routes: Routes = [
  {
    path: '',
    component: BoredomAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoredomAtPageRoutingModule {}
