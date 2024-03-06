import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { LearnToQuestionYourselfTranscriptPageRoutingModule } from './learn-to-question-yourself-transcript-routing.module';

import { LearnToQuestionYourselfTranscriptPage } from './learn-to-question-yourself-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LearnToQuestionYourselfTranscriptPageRoutingModule
  ],
  declarations: [LearnToQuestionYourselfTranscriptPage]
})
export class LearnToQuestionYourselfTranscriptPageModule {}
