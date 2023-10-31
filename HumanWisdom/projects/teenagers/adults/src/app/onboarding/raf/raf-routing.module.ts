import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RafPage } from './raf.page';

const routes: Routes = [
  {
    path: '',
    component: RafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RafPageRoutingModule {}
