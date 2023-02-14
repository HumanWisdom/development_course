import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'start-here',
    loadChildren: () => import('./start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'what-is-wisdom',
    loadChildren: () => import('./what-is-wisdom/what-is-wisdom.module').then(m => m.WhatIsWisdomModule)
  },
  {
    path: 'how-can-wisdom-help',
    loadChildren: () => import('./how-can-wisdom-help/how-can-wisdom-help.module').then(m => m.HowCanWisdomHelpModule)
  },
  {
    path: 'wisdom-brings-change',
    loadChildren: () => import('./wisdom-brings-change/wisdom-brings-change.module').then(m => m.WisdomBringsChangeModule)
  },
  {
    path: 'five-circles-of-wisdom',
    loadChildren: () => import('./five-circles-of-wisdom/five-circles-of-wisdom.module').then(m => m.FiveCirclesOfWisdomModule)
  },
  {
    path: 'key-ideas',
    loadChildren: () => import('./key-ideas/key-ideas.module').then(m => m.KeyIdeasModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenagersRoutingModule { }
