import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { DevelopACalmMindTranscriptPageRoutingModule } from './develop-a-calm-mind-transcript-routing.module';

import { DevelopACalmMindTranscriptPage } from './develop-a-calm-mind-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DevelopACalmMindTranscriptPageRoutingModule
  ],
  declarations: [DevelopACalmMindTranscriptPage]
})
export class DevelopACalmMindTranscriptPageModule {}
