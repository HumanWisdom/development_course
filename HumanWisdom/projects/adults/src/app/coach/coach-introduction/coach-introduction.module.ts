import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachIntroductionPageRoutingModule } from './coach-introduction-routing.module';

import { CoachIntroductionPage } from './coach-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachIntroductionPageRoutingModule
  ],
  declarations: [CoachIntroductionPage]
})
export class CoachIntroductionPageModule {}
