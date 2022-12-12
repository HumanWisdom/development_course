import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75005Page } from './s75005.page';

const routes: Routes = [
  {
    path: '',
    component: S75005Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75005PageRoutingModule {}
