import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157013PageRoutingModule } from './s157013-routing.module';

import { S157013Page } from './s157013.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157013PageRoutingModule,
    SharedModule
  ],
  declarations: [S157013Page]
})
export class S157013PageModule {}
