import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivationkeyPage } from './activationkey.page';

const routes: Routes = [
  {
    path: '',
    component: ActivationkeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivationkeyPageRoutingModule {}
