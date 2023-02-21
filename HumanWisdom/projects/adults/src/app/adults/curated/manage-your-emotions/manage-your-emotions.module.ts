import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageYourEmotionsPageRoutingModule } from './manage-your-emotions-routing.module';

import { ManageYourEmotionsPage } from './manage-your-emotions.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageYourEmotionsPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [ManageYourEmotionsPage]
})
export class ManageYourEmotionsPageModule {}
