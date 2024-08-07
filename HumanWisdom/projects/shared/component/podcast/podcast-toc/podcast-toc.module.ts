import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastTocPageRoutingModule } from './podcast-toc-routing.module';

import { PodcastTocPage } from './podcast-toc.page';

import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastTocPageRoutingModule,
    SharedModule
  ],
  declarations: [PodcastTocPage],
  exports:[PodcastTocPage]
})
export class PodcastTocPageModule {}
