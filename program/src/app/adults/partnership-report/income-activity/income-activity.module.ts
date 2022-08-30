import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeActivityPageRoutingModule } from './income-activity-routing.module';

import { IncomeActivityPage } from './income-activity.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeActivityPageRoutingModule,
    SharedModule
  ],
  declarations: [IncomeActivityPage]
})
export class IncomeActivityPageModule {}
