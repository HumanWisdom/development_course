import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92002PageRoutingModule } from './s92002-routing.module';

import { S92002Page } from './s92002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92002PageRoutingModule
  ],
  declarations: [S92002Page]
})
export class S92002PageModule {}
