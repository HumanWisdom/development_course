import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S107014Page } from './s107014.page';

const routes: Routes = [
  {
    path: '',
    component: S107014Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S107014PageRoutingModule {}
