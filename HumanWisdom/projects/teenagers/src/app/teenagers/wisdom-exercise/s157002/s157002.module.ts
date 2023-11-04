import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157002PageRoutingModule } from './s157002-routing.module';

import { S157002Page } from './s157002.page';

import { SharedModule } from '../../../../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157002PageRoutingModule,
    SharedModule
  ],
  declarations: [S157002Page]
})
export class S157002PageModule {}
