import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75004Page } from './s75004.page';

const routes: Routes = [
  {
    path: '',
    component: S75004Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75004PageRoutingModule {}
