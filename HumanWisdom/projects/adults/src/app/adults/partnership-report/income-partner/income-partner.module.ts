import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomePartnerPageRoutingModule } from './income-partner-routing.module';

import { IncomePartnerPage } from './income-partner.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomePartnerPageRoutingModule,
    SharedModule
  ],
  declarations: [IncomePartnerPage]
})
export class IncomePartnerPageModule {}
