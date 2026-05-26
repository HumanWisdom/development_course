import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S107013Page } from './s107013.page';

const routes: Routes = [
  {
    path: '',
    component: S107013Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S107013PageRoutingModule {}
