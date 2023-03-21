import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92007Page } from './s92007.page';

const routes: Routes = [
  {
    path: '',
    component: S92007Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92007PageRoutingModule {}
