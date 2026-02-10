import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared.module';
import { MicroLearningRoutingModule } from './micro-learning-routing.module';
import { MicroLearningListingPage } from './micro-learning-listing/micro-learning-listing.page';
import { MicroLearningInnerPage } from './micro-learning-inner/micro-learning-inner.page';
import { MicroLearningEndPage } from './micro-learning-end/micro-learning-end.page';

@NgModule({
  declarations: [
    MicroLearningListingPage,
    MicroLearningInnerPage,
    MicroLearningEndPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MicroLearningRoutingModule,
    HammerModule
  ],
  exports: [
    MicroLearningListingPage,
    MicroLearningInnerPage,
    MicroLearningEndPage
  ]
})
export class MicroLearningModule { }
