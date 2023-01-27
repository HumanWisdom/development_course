import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78016Page } from './s78016.page';

const routes: Routes = [
  {
    path: '',
    component: S78016Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78016PageRoutingModule {}
