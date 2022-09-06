import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75001Page } from './s75001.page';

const routes: Routes = [
  {
    path: '',
    component: S75001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75001PageRoutingModule {}
