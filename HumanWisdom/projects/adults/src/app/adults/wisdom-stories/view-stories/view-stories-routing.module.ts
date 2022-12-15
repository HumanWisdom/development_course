import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewStoriesPage } from './view-stories.page';

const routes: Routes = [
  {
    path: '',
    component: ViewStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewStoriesPageRoutingModule {}
