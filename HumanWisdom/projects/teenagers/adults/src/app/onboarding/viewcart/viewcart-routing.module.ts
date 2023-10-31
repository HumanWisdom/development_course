import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcartPage } from './viewcart.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcartPageRoutingModule {}
