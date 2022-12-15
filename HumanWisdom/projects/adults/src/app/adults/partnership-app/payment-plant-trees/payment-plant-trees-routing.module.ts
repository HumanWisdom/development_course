import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPlantTreesPage } from './payment-plant-trees.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPlantTreesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPlantTreesPageRoutingModule {}
