import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78010PageRoutingModule } from './s78010-routing.module';

import { S78010Page } from './s78010.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78010PageRoutingModule
  ],
  declarations: [S78010Page]
})
export class S78010PageModule {}
