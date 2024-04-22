import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { E01Page } from './e01/e01.page'; 

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
    path: 'event',
    //component: E01Page,
    loadChildren: () => import('./e01/e01.module').then( m => m.E01PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
