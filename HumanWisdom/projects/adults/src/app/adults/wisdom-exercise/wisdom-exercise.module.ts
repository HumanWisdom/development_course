import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { WisdomExerciseRoutingModule } from './wisdom-exercise-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WisdomExerciseRoutingModule,
    SharedModule,
  ]
})
export class WisdomExerciseModule { }
