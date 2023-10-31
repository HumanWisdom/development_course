import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToCartPageRoutingModule } from './add-to-cart-routing.module';

import { AddToCartPage } from './add-to-cart.page';

import {SharedModule} from '../../../../../../../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToCartPageRoutingModule,
    SharedModule
  ],
  declarations: [AddToCartPage]
})
export class AddToCartPageModule {}
