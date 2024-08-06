import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyPracticePageRoutingModule } from './daily-inspiration-routing.module';

import { DailyInspiration } from './daily-inspiration.page';

import {SharedModule} from '../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyPracticePageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [DailyInspiration]
})
export class DailyInspirationPageModule {}
