import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78003PageRoutingModule } from './s78003-routing.module';

import { S78003Page } from './s78003.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78003PageRoutingModule
  ],
  declarations: [S78003Page]
})
export class S78003PageModule {}
