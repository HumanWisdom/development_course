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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenagersRoutingModule { }
