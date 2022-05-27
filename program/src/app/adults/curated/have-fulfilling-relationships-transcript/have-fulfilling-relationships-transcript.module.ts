import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaveFulfillingRelationshipsTranscriptPageRoutingModule } from './have-fulfilling-relationships-transcript-routing.module';

import { HaveFulfillingRelationshipsTranscriptPage } from './have-fulfilling-relationships-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaveFulfillingRelationshipsTranscriptPageRoutingModule
  ],
  declarations: [HaveFulfillingRelationshipsTranscriptPage]
})
export class HaveFulfillingRelationshipsTranscriptPageModule {}
