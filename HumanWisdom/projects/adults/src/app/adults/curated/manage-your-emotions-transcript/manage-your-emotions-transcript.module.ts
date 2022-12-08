import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageYourEmotionsTranscriptPageRoutingModule } from './manage-your-emotions-transcript-routing.module';

import { ManageYourEmotionsTranscriptPage } from './manage-your-emotions-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageYourEmotionsTranscriptPageRoutingModule
  ],
  declarations: [ManageYourEmotionsTranscriptPage]
})
export class ManageYourEmotionsTranscriptPageModule {}
