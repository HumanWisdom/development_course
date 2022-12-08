import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionPageRoutingModule } from './introduction-routing.module';

import { IntroductionPage } from './introduction.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPageRoutingModule,
    SharedModule
  ],
  declarations: [IntroductionPage]
})
export class IntroductionPageModule {}
