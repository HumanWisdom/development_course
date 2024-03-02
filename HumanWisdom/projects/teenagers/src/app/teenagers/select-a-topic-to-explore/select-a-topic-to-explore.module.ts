import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectATopicToExplorePageRoutingModule } from './select-a-topic-to-explore-routing.module';

import { SelectATopicToExplorePage } from './select-a-topic-to-explore.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectATopicToExplorePageRoutingModule
  ],
  declarations: [SelectATopicToExplorePage]
})
export class SelectATopicToExplorePageModule {}
