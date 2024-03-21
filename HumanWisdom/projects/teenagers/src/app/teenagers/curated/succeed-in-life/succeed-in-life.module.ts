import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucceedInLifePageRoutingModule } from './succeed-in-life-routing.module';

import { SucceedInLifePage } from './succeed-in-life.page';

import { SharedModule } from '../../../../../../shared/shared.module';
import { NgxCircularPlayerModule } from 'ngx-circular-player';
import { NgxCaptureComponent } from 'ngx-capture';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucceedInLifePageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule,
  ],
  declarations: [SucceedInLifePage]
})
export class SucceedInLifePageModule {}
