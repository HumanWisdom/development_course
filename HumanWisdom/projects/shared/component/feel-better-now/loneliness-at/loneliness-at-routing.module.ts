import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LonelinessAtPage } from './loneliness-at.page';

const routes: Routes = [
  {
    path: '',
    component: LonelinessAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LonelinessAtPageRoutingModule {}
