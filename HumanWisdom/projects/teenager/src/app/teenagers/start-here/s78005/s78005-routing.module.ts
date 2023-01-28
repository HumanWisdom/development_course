import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78005Page } from './s78005.page';

const routes: Routes = [
  {
    path: '',
    component: S78005Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78005PageRoutingModule {}
