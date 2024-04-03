import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WisdomStoriesRoutingModule } from './wisdom-stories-routing.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WisdomStoriesRoutingModule,
    ShareButtonsModule.withConfig({
      debug:true
     }),
    ShareIconsModule,
  ]
})
export class WisdomStoriesModule { }
