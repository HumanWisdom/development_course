import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA14Page } from './how-can-i-a14.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA14PageRoutingModule {}
