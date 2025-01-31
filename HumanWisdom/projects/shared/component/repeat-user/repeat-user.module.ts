import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepeatUserPageRoutingModule } from './repeat-user-routing.module';

import { RepeatUserPage } from './repeat-user.page';
import { SharedModule } from '../../shared.module';
import { MyDailyPracticePage } from'./my-daily-practice/my-daily-practice.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RepeatUserPageRoutingModule
  ],
  declarations: [RepeatUserPage, MyDailyPracticePage]
})
export class RepeatUserPageModule {}
