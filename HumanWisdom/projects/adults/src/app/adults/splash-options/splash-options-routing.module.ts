import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashOptionsPage } from './splash-options.page';

const routes: Routes = [
  {
    path: '',
    component: SplashOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashOptionsPageRoutingModule {}
