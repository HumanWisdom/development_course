import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./events-index/events-index.module').then( m => m.EventsIndexPageModule),
  },
  {
    path: 'events-index',
    loadChildren: () => import('./events-index/events-index.module').then( m => m.EventsIndexPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
