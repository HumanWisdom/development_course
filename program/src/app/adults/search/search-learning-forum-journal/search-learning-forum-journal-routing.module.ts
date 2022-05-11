import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLearningForumJournalPage } from './search-learning-forum-journal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLearningForumJournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchLearningForumJournalPageRoutingModule {}
