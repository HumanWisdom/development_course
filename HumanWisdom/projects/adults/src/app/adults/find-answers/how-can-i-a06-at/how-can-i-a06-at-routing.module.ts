import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA06AtPage } from './how-can-i-a06-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA06AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA06AtPageRoutingModule {}
