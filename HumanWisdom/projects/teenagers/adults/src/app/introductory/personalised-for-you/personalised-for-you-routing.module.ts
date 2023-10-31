import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalisedForYouPage } from './personalised-for-you.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalisedForYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalisedForYouPageRoutingModule {}
