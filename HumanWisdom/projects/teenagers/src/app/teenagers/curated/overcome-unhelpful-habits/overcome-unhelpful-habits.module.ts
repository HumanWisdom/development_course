import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvercomeUnhelpfulHabitsPageRoutingModule } from './overcome-unhelpful-habits-routing.module';

import { OvercomeUnhelpfulHabitsPage } from './overcome-unhelpful-habits.page';

import { SharedModule } from '../../../../../../shared/shared.module';
import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvercomeUnhelpfulHabitsPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [OvercomeUnhelpfulHabitsPage]
})
export class OvercomeUnhelpfulHabitsPageModule {}
