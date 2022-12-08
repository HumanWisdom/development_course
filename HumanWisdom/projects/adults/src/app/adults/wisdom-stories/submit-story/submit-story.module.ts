import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitStoryPageRoutingModule } from './submit-story-routing.module';

import { SubmitStoryPage } from './submit-story.page';
import {SharedModule} from '../../../../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitStoryPageRoutingModule,
    SharedModule
  ],
  declarations: [SubmitStoryPage]
})
export class SubmitStoryPageModule {}
