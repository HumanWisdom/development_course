import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomForWorkplaceTranscriptPageRoutingModule } from './wisdom-for-workplace-transcript-routing.module';

import { WisdomForWorkplaceTranscriptPage } from './wisdom-for-workplace-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomForWorkplaceTranscriptPageRoutingModule
  ],
  declarations: [WisdomForWorkplaceTranscriptPage]
})
export class WisdomForWorkplaceTranscriptPageModule {}
