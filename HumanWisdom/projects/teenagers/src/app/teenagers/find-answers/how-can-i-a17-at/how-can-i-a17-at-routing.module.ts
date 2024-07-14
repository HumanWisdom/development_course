import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA17AtPage } from './how-can-i-a17-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA17AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA17AtPageRoutingModule {}
