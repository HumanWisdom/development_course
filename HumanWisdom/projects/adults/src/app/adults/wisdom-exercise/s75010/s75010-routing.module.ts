import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75010Page } from './s75010.page';

const routes: Routes = [
  {
    path: '',
    component: S75010Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75010PageRoutingModule {}
