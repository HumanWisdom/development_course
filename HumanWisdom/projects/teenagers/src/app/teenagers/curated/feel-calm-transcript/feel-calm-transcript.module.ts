import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { FeelCalmTranscriptPageRoutingModule } from './feel-calm-transcript-routing.module';

import { FeelCalmTranscriptPage } from './feel-calm-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FeelCalmTranscriptPageRoutingModule
  ],
  declarations: [FeelCalmTranscriptPage]
})
export class FeelCalmTranscriptPageModule {}
