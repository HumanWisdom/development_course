import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafePaidPage } from './cafe-paid.page';

const routes: Routes = [
  {
    path: '',
    component: CafePaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafePaidPageRoutingModule {}
