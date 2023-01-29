import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GpayPage } from './gpay.page';

const routes: Routes = [
    {
        path: '',
        component: GpayPage
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpayRoutingModule {}
