import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeActivityPageRoutingModule } from './income-activity-routing.module';

import { IncomeActivityPage } from './income-activity.page';

import { SharedModule } from '../../shared/shared.module';
import { MaskPipe } from '../mask.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeActivityPageRoutingModule,
    SharedModule
  ],
  declarations: [IncomeActivityPage,MaskPipe],
  providers:[MaskPipe]
})
export class IncomeActivityPageModule {}
