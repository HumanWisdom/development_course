import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA12Page } from './how-can-i-a12.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA12PageRoutingModule {}
