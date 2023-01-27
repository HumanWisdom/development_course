import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78019Page } from './s78019.page';

const routes: Routes = [
  {
    path: '',
    component: S78019Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78019PageRoutingModule {}
