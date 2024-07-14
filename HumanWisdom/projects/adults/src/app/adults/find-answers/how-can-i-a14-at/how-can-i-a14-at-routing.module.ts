import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA14AtPage } from './how-can-i-a14-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA14AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA14AtPageRoutingModule {}
