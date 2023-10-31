import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75001PageRoutingModule } from './s75001-routing.module';

import { S75001Page } from './s75001.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75001PageRoutingModule,
    SharedModule
  ],
  declarations: [S75001Page]
})
export class S75001PageModule {}
