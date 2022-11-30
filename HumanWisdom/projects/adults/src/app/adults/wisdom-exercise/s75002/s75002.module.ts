import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75002PageRoutingModule } from './s75002-routing.module';

import { S75002Page } from './s75002.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75002PageRoutingModule,
    SharedModule
  ],
  declarations: [S75002Page]
})
export class S75002PageModule {}
