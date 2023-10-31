import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157004PageRoutingModule } from './s157004-routing.module';

import { S157004Page } from './s157004.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157004PageRoutingModule,
    SharedModule
  ],
  declarations: [S157004Page]
})
export class S157004PageModule {}
