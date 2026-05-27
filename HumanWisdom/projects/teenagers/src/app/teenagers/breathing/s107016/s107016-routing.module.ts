import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S107016Page } from './s107016.page';

const routes: Routes = [
  {
    path: '',
    component: S107016Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S107016PageRoutingModule {}
