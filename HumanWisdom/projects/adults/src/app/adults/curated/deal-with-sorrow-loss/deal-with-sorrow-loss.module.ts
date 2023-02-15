import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealWithSorrowLossPageRoutingModule } from './deal-with-sorrow-loss-routing.module';

import { DealWithSorrowLossPage } from './deal-with-sorrow-loss.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from '../../../../../../ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealWithSorrowLossPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [DealWithSorrowLossPage]
})
export class DealWithSorrowLossPageModule {}
