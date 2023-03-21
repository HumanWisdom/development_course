import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92013PageRoutingModule } from './s92013-routing.module';

import { S92013Page } from './s92013.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92013PageRoutingModule
  ],
  declarations: [S92013Page]
})
export class S92013PageModule {}
