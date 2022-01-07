import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToHomeScreenIosPage } from './add-to-home-screen-ios.page';

const routes: Routes = [
  {
    path: '',
    component: AddToHomeScreenIosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToHomeScreenIosPageRoutingModule {}
