import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburgerPage } from './hamburger.page';

const routes: Routes = [
  {
    path: '',
    component: HamburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburgerPageRoutingModule {}
