import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsPageRoutingModule } from './questions-routing.module';

import { QuestionsPage } from './questions.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule,
    SharedModule
  ],
  declarations: [QuestionsPage]
})
export class QuestionsPageModule {}
