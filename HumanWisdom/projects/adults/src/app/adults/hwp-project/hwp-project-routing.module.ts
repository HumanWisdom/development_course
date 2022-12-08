import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HwpProjectPage } from './hwp-project.page';

const routes: Routes = [
  {
    path: '',
    component: HwpProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HwpProjectPageRoutingModule {}
