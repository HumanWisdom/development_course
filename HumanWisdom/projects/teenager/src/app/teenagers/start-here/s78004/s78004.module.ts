import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78004PageRoutingModule } from './s78004-routing.module';

import { S78004Page } from './s78004.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78004PageRoutingModule
  ],
  declarations: [S78004Page]
})
export class S78004PageModule {}
