import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaveCalmMindPageRoutingModule } from './have-calm-mind-routing.module';

import { HaveCalmMindPage } from './have-calm-mind.page';

import { SharedModule } from '../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaveCalmMindPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [HaveCalmMindPage]
})
export class HaveCalmMindPageModule {}
