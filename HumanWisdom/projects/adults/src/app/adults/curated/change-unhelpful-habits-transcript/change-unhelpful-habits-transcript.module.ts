import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeUnhelpfulHabitsTranscriptPageRoutingModule } from './change-unhelpful-habits-transcript-routing.module';

import { ChangeUnhelpfulHabitsTranscriptPage } from './change-unhelpful-habits-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeUnhelpfulHabitsTranscriptPageRoutingModule
  ],
  declarations: [ChangeUnhelpfulHabitsTranscriptPage]
})
export class ChangeUnhelpfulHabitsTranscriptPageModule {}
