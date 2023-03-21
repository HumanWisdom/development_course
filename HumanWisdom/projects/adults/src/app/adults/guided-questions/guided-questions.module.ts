import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JournalGuard } from 'src/app/journal.guard';
import { GuidedQuestionsRoutingModule } from './guided-questions-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GuidedQuestionsRoutingModule
  ],
  providers: [
    JournalGuard
  ]
})
export class GuidedQuestionsModule { }
