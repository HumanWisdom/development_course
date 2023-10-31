import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { BeHappierTranscriptPageRoutingModule } from './be-happier-transcript-routing.module';

import { BeHappierTranscriptPage } from './be-happier-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BeHappierTranscriptPageRoutingModule
  ],
  declarations: [BeHappierTranscriptPage]
})
export class BeHappierTranscriptPageModule {}
