import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewStoriesPageRoutingModule } from './view-stories-routing.module';

import { ViewStoriesPage } from './view-stories.page';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons'
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewStoriesPageRoutingModule,
    SharedModule,
    ShareButtonsModule.withConfig({
      debug:true
     }),
    ShareIconsModule,
  ],
  declarations: [ViewStoriesPage]
})
export class ViewStoriesPageModule {}
