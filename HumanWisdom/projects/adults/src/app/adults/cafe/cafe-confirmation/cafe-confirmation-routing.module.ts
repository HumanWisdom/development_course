import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeConfirmationPage } from './cafe-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: CafeConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeConfirmationPageRoutingModule {}
