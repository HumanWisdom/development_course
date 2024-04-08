import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvercomeUnhelpfulHabitsPage } from './overcome-unhelpful-habits.page';

const routes: Routes = [
  {
    path: '',
    component: OvercomeUnhelpfulHabitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvercomeUnhelpfulHabitsPageRoutingModule {}
