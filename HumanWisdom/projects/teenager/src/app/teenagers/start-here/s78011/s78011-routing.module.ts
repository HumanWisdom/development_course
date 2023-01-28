import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78011Page } from './s78011.page';

const routes: Routes = [
  {
    path: '',
    component: S78011Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78011PageRoutingModule {}
