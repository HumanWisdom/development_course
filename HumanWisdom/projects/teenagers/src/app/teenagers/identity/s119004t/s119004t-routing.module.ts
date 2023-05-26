import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S119004tPage } from './s119004t.page';

const routes: Routes = [
  {
    path: '',
    component: S119004tPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S119004tPageRoutingModule {}
