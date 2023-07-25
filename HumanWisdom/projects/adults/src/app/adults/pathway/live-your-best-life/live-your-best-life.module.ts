import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { LiveYourBestLifePageRoutingModule } from './live-your-best-life-routing.module';

import { LiveYourBestLifePage } from './live-your-best-life.page';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxCircularPlayerModule,
    LiveYourBestLifePageRoutingModule
  ],
  declarations: [LiveYourBestLifePage]
})
export class LiveYourBestLifePageModule {}
