import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { UnderstandHowYourMindWorksPageRoutingModule } from './understand-how-your-mind-works-routing.module';

import { UnderstandHowYourMindWorksPage } from './understand-how-your-mind-works.page';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxCircularPlayerModule,
    UnderstandHowYourMindWorksPageRoutingModule
  ],
  declarations: [UnderstandHowYourMindWorksPage]
})
export class UnderstandHowYourMindWorksPageModule {}
