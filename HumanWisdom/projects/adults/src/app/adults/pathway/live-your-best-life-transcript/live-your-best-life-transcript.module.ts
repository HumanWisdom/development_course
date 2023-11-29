import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { LiveYourBestLifeTranscriptPageRoutingModule } from './live-your-best-life-transcript-routing.module';

import { LiveYourBestLifeTranscriptPage } from './live-your-best-life-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LiveYourBestLifeTranscriptPageRoutingModule
  ],
  declarations: [LiveYourBestLifeTranscriptPage]
})
export class LiveYourBestLifeTranscriptPageModule {}
