import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeUnhelpfulHabitsPageRoutingModule } from './change-unhelpful-habits-routing.module';

import { ChangeUnhelpfulHabitsPage } from './change-unhelpful-habits.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeUnhelpfulHabitsPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [ChangeUnhelpfulHabitsPage]
})
export class ChangeUnhelpfulHabitsPageModule {}
