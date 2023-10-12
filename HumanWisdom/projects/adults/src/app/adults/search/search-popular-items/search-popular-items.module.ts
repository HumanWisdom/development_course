import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPopularItemsPageRoutingModule } from './search-popular-items-routing.module';

import { SearchPopularItemsPage } from './search-popular-items.page';

import {SharedModule} from '../../../../../../shared/shared.module';
import { ForumLandingPageModule } from '../../../../../../shared/forum/forum-landing/forum-landing.module';
import { IndexPageModule } from '../../guided-questions/index/index.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPopularItemsPageRoutingModule,
    SharedModule,
    ForumLandingPageModule,
    IndexPageModule 
  ],
  declarations: [SearchPopularItemsPage,]
})
export class SearchPopularItemsPageModule {}
