import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS15PageRoutingModule } from './wisdom-shorts-s15-routing.module';

import { WisdomShortsS15Page } from './wisdom-shorts-s15.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS15PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS15Page]
})
export class WisdomShortsS15PageModule {}
