import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngerPage } from './anger.page';

const routes: Routes = [
  {
    path: '',
    component: AngerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngerPageRoutingModule {}
