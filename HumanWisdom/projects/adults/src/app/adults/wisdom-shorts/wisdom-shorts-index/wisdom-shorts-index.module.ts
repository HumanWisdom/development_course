import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsIndexPageRoutingModule } from './wisdom-shorts-index-routing.module';

import { WisdomShortsIndexPage } from './wisdom-shorts-index.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsIndexPage]
})
export class WisdomShortsIndexPageModule {}
