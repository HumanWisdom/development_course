import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA18Page } from './how-can-i-a18.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA18PageRoutingModule {}
