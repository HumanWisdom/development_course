import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { OvercomeUnhelpfulHabitsTranscriptPageRoutingModule } from './overcome-unhelpful-habits-transcript-routing.module';

import { OvercomeUnhelpfulHabitsTranscriptPage } from './overcome-unhelpful-habits-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OvercomeUnhelpfulHabitsTranscriptPageRoutingModule
  ],
  declarations: [OvercomeUnhelpfulHabitsTranscriptPage]
})
export class OvercomeUnhelpfulHabitsTranscriptPageModule {}
