import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalS01Page } from './journal-s01.page';

const routes: Routes = [
  {
    path: '',
    component: JournalS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalS01PageRoutingModule {}
