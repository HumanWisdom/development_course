import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../shared/shared.module';

import { AwarenessExercisesTranscriptPageRoutingModule } from './awareness-exercises-transcript-routing.module';

import { AwarenessExercisesTranscriptPage } from './awareness-exercises-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AwarenessExercisesTranscriptPageRoutingModule
  ],
  declarations: [AwarenessExercisesTranscriptPage]
})
export class AwarenessExercisesTranscriptPageModule {}
