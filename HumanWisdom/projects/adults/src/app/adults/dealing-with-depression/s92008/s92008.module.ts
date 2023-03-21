import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92008PageRoutingModule } from './s92008-routing.module';

import { S92008Page } from './s92008.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92008PageRoutingModule
  ],
  declarations: [S92008Page]
})
export class S92008PageModule {}
