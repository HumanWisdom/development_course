import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157003Page } from './s157003.page';

const routes: Routes = [
  {
    path: '',
    component: S157003Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157003PageRoutingModule {}
