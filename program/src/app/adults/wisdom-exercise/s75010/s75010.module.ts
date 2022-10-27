import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75010PageRoutingModule } from './s75010-routing.module';

import { S75010Page } from './s75010.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75010PageRoutingModule,
    SharedModule
  ],
  declarations: [S75010Page]
})
export class S75010PageModule {}
