import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopingWithIllnessPageRoutingModule } from './coping-with-illness-routing.module';

import { CopingWithIllnessPage } from './coping-with-illness.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CopingWithIllnessPageRoutingModule
  ],
  declarations: [CopingWithIllnessPage]
})
export class CopingWithIllnessPageModule {}
