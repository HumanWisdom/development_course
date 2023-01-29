import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78021Page } from './s78021.page';

const routes: Routes = [
  {
    path: '',
    component: S78021Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78021PageRoutingModule {}
