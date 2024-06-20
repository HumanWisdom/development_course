import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { AngerAtPageRoutingModule } from './anger-at-routing.module';

import { AngerAtPage } from './anger-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AngerAtPageRoutingModule
  ],
  declarations: [AngerAtPage]
})
export class AngerAtPageModule {}
