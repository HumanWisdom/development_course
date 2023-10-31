import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogArticlePageRoutingModule } from './blog-article-routing.module';

import { BlogArticlePage } from './blog-article.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogArticlePageRoutingModule,
    SharedModule
  ],
  declarations: [BlogArticlePage]
})
export class BlogArticlePageModule {}
