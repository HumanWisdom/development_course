import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { FindAnswersRoutingModule } from './find-answers-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FindAnswersRoutingModule
  ]
})
export class FindAnswersModule { }
