import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { FeelingUpsetAtPageRoutingModule } from './feeling-upset-at-routing.module';

import { FeelingUpsetAtPage } from './feeling-upset-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FeelingUpsetAtPageRoutingModule
  ],
  declarations: [FeelingUpsetAtPage]
})
export class FeelingUpsetAtPageModule {}
