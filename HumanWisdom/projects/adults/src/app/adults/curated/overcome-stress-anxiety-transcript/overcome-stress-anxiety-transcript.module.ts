import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvercomeStressAnxietyTranscriptPageRoutingModule } from './overcome-stress-anxiety-transcript-routing.module';

import { OvercomeStressAnxietyTranscriptPage } from './overcome-stress-anxiety-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvercomeStressAnxietyTranscriptPageRoutingModule
  ],
  declarations: [OvercomeStressAnxietyTranscriptPage]
})
export class OvercomeStressAnxietyTranscriptPageModule {}
