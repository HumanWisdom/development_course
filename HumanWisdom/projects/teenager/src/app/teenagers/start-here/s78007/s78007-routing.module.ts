import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78007Page } from './s78007.page';

const routes: Routes = [
  {
    path: '',
    component: S78007Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78007PageRoutingModule {}
