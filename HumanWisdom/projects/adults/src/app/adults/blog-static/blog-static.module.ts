import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogStaticPageRoutingModule } from './blog-static-routing.module';

import { BlogStaticPage } from './blog-static.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BlogStaticPageRoutingModule
  ],
  declarations: [BlogStaticPage]
})
export class BlogStaticPageModule {}
