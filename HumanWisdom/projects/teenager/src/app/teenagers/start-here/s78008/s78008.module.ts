import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78008PageRoutingModule } from './s78008-routing.module';

import { S78008Page } from './s78008.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78008PageRoutingModule
  ],
  declarations: [S78008Page]
})
export class S78008PageModule {}
