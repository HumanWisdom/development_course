import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157001PageRoutingModule } from './s157001-routing.module';

import { S157001Page } from './s157001.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157001PageRoutingModule,
    SharedModule
  ],
  declarations: [S157001Page]
})
export class S157001PageModule {}
