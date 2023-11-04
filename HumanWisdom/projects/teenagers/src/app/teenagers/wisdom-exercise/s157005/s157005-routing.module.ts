import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157005Page } from './s157005.page';

const routes: Routes = [
  {
    path: '',
    component: S157005Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157005PageRoutingModule {}
