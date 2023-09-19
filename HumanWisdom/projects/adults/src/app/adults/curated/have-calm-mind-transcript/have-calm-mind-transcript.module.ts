import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HaveCalmMindTranscriptPageRoutingModule } from './have-calm-mind-transcript-routing.module';

import { HaveCalmMindTranscriptPage } from './have-calm-mind-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HaveCalmMindTranscriptPageRoutingModule
  ],
  declarations: [HaveCalmMindTranscriptPage]
})
export class HaveCalmMindTranscriptPageModule {}
