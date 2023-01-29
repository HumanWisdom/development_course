import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78012Page } from './s78012.page';

const routes: Routes = [
  {
    path: '',
    component: S78012Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78012PageRoutingModule {}
