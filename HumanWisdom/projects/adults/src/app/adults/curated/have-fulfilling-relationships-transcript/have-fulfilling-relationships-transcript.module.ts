import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HaveFulfillingRelationshipsTranscriptPageRoutingModule } from './have-fulfilling-relationships-transcript-routing.module';

import { HaveFulfillingRelationshipsTranscriptPage } from './have-fulfilling-relationships-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HaveFulfillingRelationshipsTranscriptPageRoutingModule
  ],
  declarations: [HaveFulfillingRelationshipsTranscriptPage]
})
export class HaveFulfillingRelationshipsTranscriptPageModule {}
