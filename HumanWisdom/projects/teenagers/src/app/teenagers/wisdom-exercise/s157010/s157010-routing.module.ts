import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157010Page } from './s157010.page';

const routes: Routes = [
  {
    path: '',
    component: S157010Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157010PageRoutingModule {}
