import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LonelinessPage } from './loneliness.page';

const routes: Routes = [
  {
    path: '',
    component: LonelinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LonelinessPageRoutingModule {}
