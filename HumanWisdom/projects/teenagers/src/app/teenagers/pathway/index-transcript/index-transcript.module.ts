import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { IndexTranscriptPageRoutingModule } from './index-transcript-routing.module';

import { IndexTranscriptPage } from './index-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IndexTranscriptPageRoutingModule
  ],
  declarations: [IndexTranscriptPage]
})
export class IndexTranscriptPageModule {}
