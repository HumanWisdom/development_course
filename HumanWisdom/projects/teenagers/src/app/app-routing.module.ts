import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./teenagers/start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'start-here',
    loadChildren: () => import('./teenagers/start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'what-is-wisdom',
    loadChildren: () => import('./teenagers/what-is-wisdom/what-is-wisdom.module').then(m => m.WhatIsWisdomModule)
  },
  {
    path: 'how-can-wisdom-help',
    loadChildren: () => import('./teenagers/how-can-wisdom-help/how-can-wisdom-help.module').then(m => m.HowCanWisdomHelpModule)
  },
  {
    path: 'wisdom-brings-change',
    loadChildren: () => import('./teenagers/wisdom-brings-change/wisdom-brings-change.module').then(m => m.WisdomBringsChangeModule)
  },
  {
    path: 'five-circles-of-wisdom',
    loadChildren: () => import('./teenagers/five-circles-of-wisdom/five-circles-of-wisdom.module').then(m => m.FiveCirclesOfWisdomModule)
  },
  {
    path: 'key-ideas',
    loadChildren: () => import('./teenagers/key-ideas/key-ideas.module').then(m => m.KeyIdeasModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./teenagers/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
