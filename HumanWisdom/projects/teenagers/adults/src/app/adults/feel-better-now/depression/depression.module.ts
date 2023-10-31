import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepressionPageRoutingModule } from './depression-routing.module';

import { DepressionPage } from './depression.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DepressionPageRoutingModule
  ],
  declarations: [DepressionPage]
})
export class DepressionPageModule {}
