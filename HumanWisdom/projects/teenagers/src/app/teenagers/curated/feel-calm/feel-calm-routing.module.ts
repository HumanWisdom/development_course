import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelCalmPage } from './feel-calm.page';

const routes: Routes = [
  {
    path: '',
    component: FeelCalmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeelCalmPageRoutingModule {}
