import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { E01Page } from './e01/e01.page'; 

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./events-index/events-index.module').then( m => m.EventsIndexPageModule),
  },
  {
    path: 'events-index',
    loadChildren: () => import('./events-index/events-index.module').then( m => m.EventsIndexPageModule),
  },
  {
    path: 'e01',
    component: E01Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
