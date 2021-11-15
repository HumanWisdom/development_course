import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastStartPageRoutingModule } from './podcast-start-routing.module';

import { PodcastStartPage } from './podcast-start.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastStartPageRoutingModule,
    SharedModule
  ],
  declarations: [PodcastStartPage]
})
export class PodcastStartPageModule {}
