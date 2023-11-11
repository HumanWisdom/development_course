import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157013Page } from './s157013.page';

const routes: Routes = [
  {
    path: '',
    component: S157013Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157013PageRoutingModule {}
