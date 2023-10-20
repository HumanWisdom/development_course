import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroHappiermePageRoutingModule } from './intro-happierme-routing.module';

import { IntroHappiermePage } from './intro-happierme.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IntroHappiermePageRoutingModule
  ],
  declarations: [IntroHappiermePage]
})
export class IntroHappiermePageModule {}
