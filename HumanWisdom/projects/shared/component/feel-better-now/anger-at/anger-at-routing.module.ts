import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngerAtPage } from './anger-at.page';

const routes: Routes = [
  {
    path: '',
    component: AngerAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngerAtPageRoutingModule {}
