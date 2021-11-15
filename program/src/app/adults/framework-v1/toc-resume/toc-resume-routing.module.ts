import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocResumePage } from './toc-resume.page';

const routes: Routes = [
  {
    path: '',
    component: TocResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TocResumePageRoutingModule {}
