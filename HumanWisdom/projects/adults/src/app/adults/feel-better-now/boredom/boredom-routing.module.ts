import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoredomPage } from './boredom.page';

const routes: Routes = [
  {
    path: '',
    component: BoredomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoredomPageRoutingModule {}
