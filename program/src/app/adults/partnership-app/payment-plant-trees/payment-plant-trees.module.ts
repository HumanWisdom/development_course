import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPlantTreesPageRoutingModule } from './payment-plant-trees-routing.module';

import { PaymentPlantTreesPage } from './payment-plant-trees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPlantTreesPageRoutingModule
  ],
  declarations: [PaymentPlantTreesPage]
})
export class PaymentPlantTreesPageModule {}
