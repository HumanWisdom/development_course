import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllStoriesPage } from './all-stories.page';

const routes: Routes = [
  {
    path: '',
    component: AllStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllStoriesPageRoutingModule {}
