import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { AnxietyAtPageRoutingModule } from './anxiety-at-routing.module';

import { AnxietyAtPage } from './anxiety-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AnxietyAtPageRoutingModule
  ],
  declarations: [AnxietyAtPage]
})
export class AnxietyAtPageModule {}
