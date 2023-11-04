import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157016PageRoutingModule } from './s157016-routing.module';

import { S157016Page } from './s157016.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157016PageRoutingModule,
    SharedModule
  ],
  declarations: [S157016Page]
})
export class S157016PageModule {}
