import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorrowAndLossPageRoutingModule } from './sorrow-and-loss-routing.module';

import { SorrowAndLossPage } from './sorrow-and-loss.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SorrowAndLossPageRoutingModule
  ],
  declarations: [SorrowAndLossPage]
})
export class SorrowAndLossPageModule {}
