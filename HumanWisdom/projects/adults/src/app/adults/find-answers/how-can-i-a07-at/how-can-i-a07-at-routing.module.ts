import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA07AtPage } from './how-can-i-a07-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA07AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA07AtPageRoutingModule {}
