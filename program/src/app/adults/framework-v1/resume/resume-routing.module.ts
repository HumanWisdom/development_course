import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumePage } from './resume.page';

const routes: Routes = [
  {
    path: '',
    component: ResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumePageRoutingModule {}
