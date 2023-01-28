import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78002PageRoutingModule } from './s78002-routing.module';

import { S78002Page } from './s78002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78002PageRoutingModule
  ],
  declarations: [S78002Page]
})
export class S78002PageModule {}
