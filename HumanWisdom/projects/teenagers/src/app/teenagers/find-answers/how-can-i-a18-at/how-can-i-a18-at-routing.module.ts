import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA18AtPage } from './how-can-i-a18-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA18AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA18AtPageRoutingModule {}
