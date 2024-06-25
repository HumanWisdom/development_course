import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepressionAtPage } from './depression-at.page';

const routes: Routes = [
  {
    path: '',
    component: DepressionAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepressionAtPageRoutingModule {}
