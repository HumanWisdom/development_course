import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPopularItemsPage } from './search-popular-items.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPopularItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPopularItemsPageRoutingModule {}
