import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157004Page } from './s157004.page';

const routes: Routes = [
  {
    path: '',
    component: S157004Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157004PageRoutingModule {}
