import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78010Page } from './s78010.page';

const routes: Routes = [
  {
    path: '',
    component: S78010Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78010PageRoutingModule {}
