import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomForWorkplacePageRoutingModule } from './wisdom-for-workplace-routing.module';

import { WisdomForWorkplacePage } from './wisdom-for-workplace.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from '../../../../../../ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomForWorkplacePageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [WisdomForWorkplacePage]
})
export class WisdomForWorkplacePageModule {}
