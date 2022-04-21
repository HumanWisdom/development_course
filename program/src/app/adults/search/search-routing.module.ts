import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./search-popular-items/search-popular-items.module").then( m => m.SearchPopularItemsPageModule)
  },
  {
    path: "search-popular-items",
    loadChildren: () => import("./search-popular-items/search-popular-items.module").then( m => m.SearchPopularItemsPageModule)
  },
  {
    path: 'search-learning-forum-journal',
    loadChildren: () => import('./search-learning-forum-journal/search-learning-forum-journal.module').then( m => m.SearchLearningForumJournalPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
