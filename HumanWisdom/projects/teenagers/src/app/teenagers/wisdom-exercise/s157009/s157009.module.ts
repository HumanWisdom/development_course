import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157009PageRoutingModule } from './s157009-routing.module';

import { S157009Page } from './s157009.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157009PageRoutingModule,
    SharedModule
  ],
  declarations: [S157009Page]
})
export class S157009PageModule {}
