import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78015Page } from './s78015.page';

const routes: Routes = [
  {
    path: '',
    component: S78015Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78015PageRoutingModule {}
