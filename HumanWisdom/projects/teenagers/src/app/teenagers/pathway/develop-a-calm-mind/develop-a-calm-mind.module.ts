import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { DevelopACalmMindPageRoutingModule } from './develop-a-calm-mind-routing.module';

import { DevelopACalmMindPage } from './develop-a-calm-mind.page';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxCircularPlayerModule,
    DevelopACalmMindPageRoutingModule
  ],
  declarations: [DevelopACalmMindPage]
})
export class DevelopACalmMindPageModule {}
