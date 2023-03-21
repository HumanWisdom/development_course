import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92001Page } from './s92001.page';

const routes: Routes = [
  {
    path: '',
    component: S92001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92001PageRoutingModule {}
