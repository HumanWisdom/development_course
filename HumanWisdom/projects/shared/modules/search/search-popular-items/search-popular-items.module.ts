import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPopularItemsPageRoutingModule } from './search-popular-items-routing.module';

import { SearchPopularItemsPage } from './search-popular-items.page';
import { PodcastTocPageModule } from '../../.././component/podcast/podcast-toc/podcast-toc.module';
import { ForumLandingPageModule } from '../../../forum/forum-landing/forum-landing.module';
import { SharedModule } from '../../../shared.module';
import { IndexPageModule } from '../../../subscription/index/index.module';
import { IndexPage } from '../../../../adults/src/app/adults/guided-questions/index/index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPopularItemsPageRoutingModule,
    SharedModule,
    ForumLandingPageModule,
    PodcastTocPageModule
  ],
  declarations: [SearchPopularItemsPage,IndexPage],
  exports:[IndexPage]
})
export class SearchPopularItemsPageModule {}
