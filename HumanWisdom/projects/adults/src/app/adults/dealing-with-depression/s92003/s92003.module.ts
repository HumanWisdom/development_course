import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92003PageRoutingModule } from './s92003-routing.module';

import { S92003Page } from './s92003.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92003PageRoutingModule
  ],
  declarations: [S92003Page]
})
export class S92003PageModule {}
