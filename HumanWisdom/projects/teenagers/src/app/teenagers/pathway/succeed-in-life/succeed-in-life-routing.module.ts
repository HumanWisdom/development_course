import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucceedInLifePage } from './succeed-in-life.page';

const routes: Routes = [
  {
    path: '',
    component: SucceedInLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucceedInLifePageRoutingModule {}
