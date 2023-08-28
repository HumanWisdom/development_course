import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { ProgressPageRoutingModule } from './progress-routing.module';

import { ProgressPage } from './progress.page';
import { ChartsModule } from 'ng2-charts';


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
