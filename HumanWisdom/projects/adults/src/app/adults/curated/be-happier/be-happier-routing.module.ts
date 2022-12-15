import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeHappierPage } from './be-happier.page';

const routes: Routes = [
  {
    path: '',
    component: BeHappierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeHappierPageRoutingModule {}
