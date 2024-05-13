import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeenagersDashboardPage } from './teenagers-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TeenagersDashboardPage
  },
  {
    path: 'teenager-dashboard',
    component: TeenagersDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeenagersDashboardPageRoutingModule {}
