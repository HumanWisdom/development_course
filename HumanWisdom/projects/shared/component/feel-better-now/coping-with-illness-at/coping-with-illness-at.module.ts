import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { CopingWithIllnessAtPageRoutingModule } from './coping-with-illness-at-routing.module';

import { CopingWithIllnessAtPage } from './coping-with-illness-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CopingWithIllnessAtPageRoutingModule
  ],
  declarations: [CopingWithIllnessAtPage]
})
export class CopingWithIllnessAtPageModule {}
