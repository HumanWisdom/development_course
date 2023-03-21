import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92004Page } from './s92004.page';

const routes: Routes = [
  {
    path: '',
    component: S92004Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92004PageRoutingModule {}
