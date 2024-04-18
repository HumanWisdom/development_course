import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsIndexPage } from './events-index.page';

const routes: Routes = [
  {
    path: '',
    component: EventsIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsIndexPageRoutingModule {}
