import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { DealWithSorrowLossTranscriptPageRoutingModule } from './deal-with-sorrow-loss-transcript-routing.module';

import { DealWithSorrowLossTranscriptPage } from './deal-with-sorrow-loss-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DealWithSorrowLossTranscriptPageRoutingModule
  ],
  declarations: [DealWithSorrowLossTranscriptPage]
})
export class DealWithSorrowLossTranscriptPageModule {}
