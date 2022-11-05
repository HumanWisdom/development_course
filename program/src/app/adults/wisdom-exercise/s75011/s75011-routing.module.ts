import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75011Page } from './s75011.page';

const routes: Routes = [
  {
    path: '',
    component: S75011Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75011PageRoutingModule {}
