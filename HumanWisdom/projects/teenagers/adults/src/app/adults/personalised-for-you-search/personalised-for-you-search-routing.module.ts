import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalisedForYouSearchPage } from './personalised-for-you-search.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalisedForYouSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalisedForYouSearchPageRoutingModule {}
