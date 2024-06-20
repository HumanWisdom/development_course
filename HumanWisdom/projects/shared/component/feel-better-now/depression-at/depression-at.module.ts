import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { DepressionAtPageRoutingModule } from './depression-at-routing.module';

import { DepressionAtPage } from './depression-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DepressionAtPageRoutingModule
  ],
  declarations: [DepressionAtPage]
})
export class DepressionAtPageModule {}
