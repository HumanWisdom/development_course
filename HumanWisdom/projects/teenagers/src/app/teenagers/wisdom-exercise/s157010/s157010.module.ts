import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157010PageRoutingModule } from './s157010-routing.module';

import { S157010Page } from './s157010.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157010PageRoutingModule,
    SharedModule
  ],
  declarations: [S157010Page]
})
export class S157010PageModule {}
