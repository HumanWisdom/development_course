import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProgressPageRoutingModule } from './progress-routing.module';

import { ProgressPage } from './progress.page';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProgressPageRoutingModule,
    ChartsModule
  ],
  declarations: [ProgressPage]
})
export class ProgressPageModule {}
