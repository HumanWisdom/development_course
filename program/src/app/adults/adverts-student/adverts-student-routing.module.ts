import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsStudentPage } from './adverts-student.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsStudentPageRoutingModule {}
