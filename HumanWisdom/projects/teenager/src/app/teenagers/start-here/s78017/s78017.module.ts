import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78017PageRoutingModule } from './s78017-routing.module';

import { S78017Page } from './s78017.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78017PageRoutingModule
  ],
  declarations: [S78017Page]
})
export class S78017PageModule {}
