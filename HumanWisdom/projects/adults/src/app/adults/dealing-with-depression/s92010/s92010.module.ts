import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92010PageRoutingModule } from './s92010-routing.module';

import { S92010Page } from './s92010.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92010PageRoutingModule
  ],
  declarations: [S92010Page]
})
export class S92010PageModule {}
