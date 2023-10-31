import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../shared/shared.module';

import { SelectATopicToExplorePageRoutingModule } from './select-a-topic-to-explore-routing.module';

import { SelectATopicToExplorePage } from './select-a-topic-to-explore.page';

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
