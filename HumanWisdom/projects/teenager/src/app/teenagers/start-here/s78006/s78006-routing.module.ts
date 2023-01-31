import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78006Page } from './s78006.page';

const routes: Routes = [
  {
    path: '',
    component: S78006Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78006PageRoutingModule {}
