import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75008Page } from './s75008.page';

const routes: Routes = [
  {
    path: '',
    component: S75008Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75008PageRoutingModule {}
