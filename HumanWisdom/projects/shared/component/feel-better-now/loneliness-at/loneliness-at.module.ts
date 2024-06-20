import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { LonelinessAtPageRoutingModule } from './loneliness-at-routing.module';

import { LonelinessAtPage } from './loneliness-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LonelinessAtPageRoutingModule
  ],
  declarations: [LonelinessAtPage]
})
export class LonelinessAtPageModule {}
