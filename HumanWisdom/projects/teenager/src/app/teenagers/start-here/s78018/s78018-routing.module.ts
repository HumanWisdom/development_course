import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78018Page } from './s78018.page';

const routes: Routes = [
  {
    path: '',
    component: S78018Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78018PageRoutingModule {}
