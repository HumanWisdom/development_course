import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectATopicToExplorePage } from './select-a-topic-to-explore.page';

const routes: Routes = [
  {
    path: '',
    component: SelectATopicToExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectATopicToExplorePageRoutingModule {}
