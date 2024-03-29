import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitStoryPage } from './submit-story.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitStoryPageRoutingModule {}
