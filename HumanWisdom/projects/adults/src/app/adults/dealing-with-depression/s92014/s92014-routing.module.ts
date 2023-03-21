import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92014Page } from './s92014.page';

const routes: Routes = [
  {
    path: '',
    component: S92014Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92014PageRoutingModule {}
