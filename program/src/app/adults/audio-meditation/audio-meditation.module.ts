import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdultsService } from '../adults.service';
import { SharedModule } from '../shared/shared.module';

import { AudioMeditationRoutingModule } from './audio-meditation-routing.module';
import { S51000Page } from './s51000/s51000.page';

@NgModule({
  declarations: [
    S51000Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AudioMeditationRoutingModule
  ],
  providers: [
    AdultsService
  ]
})
export class AudioMeditationModule { }
