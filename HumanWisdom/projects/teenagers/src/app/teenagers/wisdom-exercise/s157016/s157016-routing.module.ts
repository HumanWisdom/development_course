import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157016Page } from './s157016.page';

const routes: Routes = [
  {
    path: '',
    component: S157016Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157016PageRoutingModule {}
