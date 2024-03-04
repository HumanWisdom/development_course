import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { SucceedInLifeTranscriptPageRoutingModule } from './succeed-in-life-transcript-routing.module';

import { SucceedInLifeTranscriptPage } from './succeed-in-life-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SucceedInLifeTranscriptPageRoutingModule
  ],
  declarations: [SucceedInLifeTranscriptPage]
})
export class SucceedInLifeTranscriptPageModule {}
