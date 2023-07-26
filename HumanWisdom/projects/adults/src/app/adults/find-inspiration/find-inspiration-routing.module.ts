import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindInspirationPage } from './find-inspiration.page';

const routes: Routes = [
  {
    path: '',
    component: FindInspirationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindInspirationPageRoutingModule {}
