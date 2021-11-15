import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastResumePageRoutingModule } from './podcast-resume-routing.module';

import { PodcastResumePage } from './podcast-resume.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastResumePageRoutingModule,
    SharedModule
  ],
  declarations: [PodcastResumePage]
})
export class PodcastResumePageModule {}
