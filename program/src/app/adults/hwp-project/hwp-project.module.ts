import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HwpProjectPageRoutingModule } from './hwp-project-routing.module';

import { HwpProjectPage } from './hwp-project.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HwpProjectPageRoutingModule,
    SharedModule
  ],
  declarations: [HwpProjectPage]
})
export class HwpProjectPageModule {}
