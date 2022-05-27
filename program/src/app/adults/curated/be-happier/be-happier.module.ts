import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeHappierPageRoutingModule } from './be-happier-routing.module';

import { BeHappierPage } from './be-happier.page';

import { SharedModule } from '../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeHappierPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [BeHappierPage]
})
export class BeHappierPageModule {}
