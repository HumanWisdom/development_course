import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA11Page } from './how-can-i-a11.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA11PageRoutingModule {}
