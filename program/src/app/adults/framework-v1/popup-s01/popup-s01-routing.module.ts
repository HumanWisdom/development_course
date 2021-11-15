import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupS01Page } from './popup-s01.page';

const routes: Routes = [
  {
    path: '',
    component: PopupS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupS01PageRoutingModule {}
