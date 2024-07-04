import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyCheckinNoteSavePage } from './daily-check-note-save.page';

const routes: Routes = [
  {
    path: '',
    component: DailyCheckinNoteSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyCheckinNoteSavePageRoutingModule {}
