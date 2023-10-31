import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeUnhelpfulHabitsPage } from './change-unhelpful-habits.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeUnhelpfulHabitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeUnhelpfulHabitsPageRoutingModule {}
