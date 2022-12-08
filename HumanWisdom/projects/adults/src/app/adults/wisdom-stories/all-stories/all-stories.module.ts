import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllStoriesPageRoutingModule } from './all-stories-routing.module';

import { AllStoriesPage } from './all-stories.page';
import {SharedModule} from '../../../../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllStoriesPageRoutingModule,
    SharedModule
  ],
  declarations: [AllStoriesPage]
})
export class AllStoriesPageModule {}
