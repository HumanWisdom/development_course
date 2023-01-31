import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78009PageRoutingModule } from './s78009-routing.module';

import { S78009Page } from './s78009.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78009PageRoutingModule
  ],
  declarations: [S78009Page]
})
export class S78009PageModule {}
