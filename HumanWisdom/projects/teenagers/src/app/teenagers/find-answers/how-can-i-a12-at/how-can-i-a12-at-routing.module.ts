import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA12AtPage } from './how-can-i-a12-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA12AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA12AtPageRoutingModule {}
