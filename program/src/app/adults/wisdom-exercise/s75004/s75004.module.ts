import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75004PageRoutingModule } from './s75004-routing.module';

import { S75004Page } from './s75004.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75004PageRoutingModule,
    SharedModule
  ],
  declarations: [S75004Page]
})
export class S75004PageModule {}
