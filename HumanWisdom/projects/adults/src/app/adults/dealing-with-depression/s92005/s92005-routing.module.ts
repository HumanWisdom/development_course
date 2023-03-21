import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92005Page } from './s92005.page';

const routes: Routes = [
  {
    path: '',
    component: S92005Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92005PageRoutingModule {}
