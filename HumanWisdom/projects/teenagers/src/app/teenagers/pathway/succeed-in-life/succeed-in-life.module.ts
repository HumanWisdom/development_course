import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { SucceedInLifePageRoutingModule } from './succeed-in-life-routing.module';

import { SucceedInLifePage } from './succeed-in-life.page';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxCircularPlayerModule,
    SucceedInLifePageRoutingModule
  ],
  declarations: [SucceedInLifePage]
})
export class SucceedInLifePageModule {}
