import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AudioMeditationRoutingModule } from './audio-meditation-routing.module';
import { S51000Page } from './s51000/s51000.page';
import { SharedModule } from '../../../shared/shared.module';
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
  ]
})
export class AudioMeditationModule { }
