import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157008PageRoutingModule } from './s157008-routing.module';

import { S157008Page } from './s157008.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157008PageRoutingModule,
    SharedModule
  ],
  declarations: [S157008Page]
})
export class S157008PageModule {}
