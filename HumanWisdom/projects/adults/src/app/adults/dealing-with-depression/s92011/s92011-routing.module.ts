import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92011Page } from './s92011.page';

const routes: Routes = [
  {
    path: '',
    component: S92011Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92011PageRoutingModule {}
