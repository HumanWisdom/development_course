import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78014Page } from './s78014.page';

const routes: Routes = [
  {
    path: '',
    component: S78014Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78014PageRoutingModule {}
