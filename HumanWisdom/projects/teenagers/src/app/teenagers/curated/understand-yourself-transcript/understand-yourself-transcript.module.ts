import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { UnderstandYourselfTranscriptPageRoutingModule } from './understand-yourself-transcript-routing.module';

import { UnderstandYourselfTranscriptPage } from './understand-yourself-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UnderstandYourselfTranscriptPageRoutingModule
  ],
  declarations: [UnderstandYourselfTranscriptPage]
})
export class UnderstandYourselfTranscriptPageModule {}
