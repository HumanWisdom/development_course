import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeFreePage } from './cafe-free.page';

const routes: Routes = [
  {
    path: '',
    component: CafeFreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeFreePageRoutingModule {}
