import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { StressAtPageRoutingModule } from './stress-at-routing.module';

import { StressAtPage } from './stress-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StressAtPageRoutingModule
  ],
  declarations: [StressAtPage]
})
export class StressAtPageModule {}
