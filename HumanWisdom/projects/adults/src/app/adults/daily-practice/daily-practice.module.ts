import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyPracticePageRoutingModule } from './daily-practice-routing.module';

import { DailyPracticePage } from './daily-practice.page';

import {SharedModule} from '../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from '../../../../../ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyPracticePageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [DailyPracticePage]
})
export class DailyPracticePageModule {}
