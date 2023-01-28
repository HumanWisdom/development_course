import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78023Page } from './s78023.page';

const routes: Routes = [
  {
    path: '',
    component: S78023Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78023PageRoutingModule {}
