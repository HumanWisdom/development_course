import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA16AtPage } from './how-can-i-a16-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA16AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA16AtPageRoutingModule {}
