import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachHistoryDatePage } from './coach-history-date.page';
import { GroupByPipe } from '../Pipe/group-by.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoachHistoryDatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachHistoryDatePage,GroupByPipe],
  exports:[RouterModule]
})
export class CoachHistoryDatePageModule {}
