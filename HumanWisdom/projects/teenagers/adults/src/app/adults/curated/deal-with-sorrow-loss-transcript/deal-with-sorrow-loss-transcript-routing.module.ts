import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealWithSorrowLossTranscriptPage } from './deal-with-sorrow-loss-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: DealWithSorrowLossTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealWithSorrowLossTranscriptPageRoutingModule {}
