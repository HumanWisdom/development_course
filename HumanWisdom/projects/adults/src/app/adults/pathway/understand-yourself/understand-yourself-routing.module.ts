import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderstandYourselfPage } from './understand-yourself.page';

const routes: Routes = [
  {
    path: '',
    component: UnderstandYourselfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderstandYourselfPageRoutingModule {}
