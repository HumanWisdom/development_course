import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogIndexPageRoutingModule } from './blog-index-routing.module';

import { BlogIndexPage } from './blog-index.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [BlogIndexPage]
})
export class BlogIndexPageModule {}
