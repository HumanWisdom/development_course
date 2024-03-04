import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { LearnToQuestionYourselfPageRoutingModule } from './learn-to-question-yourself-routing.module';

import { LearnToQuestionYourselfPage } from './learn-to-question-yourself.page';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxCircularPlayerModule,
    LearnToQuestionYourselfPageRoutingModule
  ],
  declarations: [LearnToQuestionYourselfPage]
})
export class LearnToQuestionYourselfPageModule {}
