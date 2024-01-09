import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA19Page } from './how-can-i-a19.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA19PageRoutingModule {}
