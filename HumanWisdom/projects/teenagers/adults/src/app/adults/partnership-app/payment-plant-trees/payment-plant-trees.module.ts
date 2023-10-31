import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPlantTreesPageRoutingModule } from './payment-plant-trees-routing.module';

import { PaymentPlantTreesPage } from './payment-plant-trees.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPlantTreesPageRoutingModule,
    SharedModule
  ],
  declarations: [PaymentPlantTreesPage]
})
export class PaymentPlantTreesPageModule {}
