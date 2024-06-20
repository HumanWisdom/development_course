import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { SorrowAndLossAtPageRoutingModule } from './sorrow-and-loss-at-routing.module';

import { SorrowAndLossAtPage } from './sorrow-and-loss-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SorrowAndLossAtPageRoutingModule
  ],
  declarations: [SorrowAndLossAtPage]
})
export class SorrowAndLossAtPageModule {}
