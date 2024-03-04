import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { UnderstandHowYourMindWorksTranscriptPageRoutingModule } from './understand-how-your-mind-works-transcript-routing.module';

import { UnderstandHowYourMindWorksTranscriptPage } from './understand-how-your-mind-works-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UnderstandHowYourMindWorksTranscriptPageRoutingModule
  ],
  declarations: [UnderstandHowYourMindWorksTranscriptPage]
})
export class UnderstandHowYourMindWorksTranscriptPageModule {}
