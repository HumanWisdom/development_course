import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursenotePage } from './coursenote.page';

const routes: Routes = [
  {
    path: '',
    component: CoursenotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursenotePageRoutingModule {}
