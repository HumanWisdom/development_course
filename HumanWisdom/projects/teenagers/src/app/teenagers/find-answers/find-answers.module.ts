import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { FindAnswersRoutingModule } from './find-answers-routing.module';
import { NavigationService } from '../../../../../shared/services/navigation.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FindAnswersRoutingModule
  ],
  providers:[
  ]
})
export class FindAnswersModule { }
