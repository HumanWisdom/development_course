import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157014Page } from './s157014.page';

const routes: Routes = [
  {
    path: '',
    component: S157014Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157014PageRoutingModule {}
