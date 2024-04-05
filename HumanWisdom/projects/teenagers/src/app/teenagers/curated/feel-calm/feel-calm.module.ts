import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeelCalmPageRoutingModule } from './feel-calm-routing.module';

import { FeelCalmPage } from './feel-calm.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeelCalmPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [FeelCalmPage]
})
export class FeelCalmPageModule {}
