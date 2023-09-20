import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { ChangeUnhelpfulHabitsTranscriptPageRoutingModule } from './change-unhelpful-habits-transcript-routing.module';

import { ChangeUnhelpfulHabitsTranscriptPage } from './change-unhelpful-habits-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ChangeUnhelpfulHabitsTranscriptPageRoutingModule
  ],
  declarations: [ChangeUnhelpfulHabitsTranscriptPage]
})
export class ChangeUnhelpfulHabitsTranscriptPageModule {}
