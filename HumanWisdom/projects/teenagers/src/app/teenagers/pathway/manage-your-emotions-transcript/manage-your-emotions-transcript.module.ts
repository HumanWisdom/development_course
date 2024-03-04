import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { ManageYourEmotionsTranscriptPageRoutingModule } from './manage-your-emotions-transcript-routing.module';

import { ManageYourEmotionsTranscriptPage } from './manage-your-emotions-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ManageYourEmotionsTranscriptPageRoutingModule
  ],
  declarations: [ManageYourEmotionsTranscriptPage]
})
export class ManageYourEmotionsTranscriptPageModule {}
