import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 's75001',
    loadChildren: () => import('./s75001/s75001.module').then( m => m.S75001PageModule)
  },
  {
    path: 's75002',
    loadChildren: () => import('./s75002/s75002.module').then( m => m.S75002PageModule)
  },
  {
    path: 's75003',
    loadChildren: () => import('./s75003/s75003.module').then( m => m.S75003PageModule)
  },
  {
    path: 's75004',
    loadChildren: () => import('./s75004/s75004.module').then( m => m.S75004PageModule)
  },
  {
    path: 's75005',
    loadChildren: () => import('./s75005/s75005.module').then( m => m.S75005PageModule)
  },
  {
    path: 's75006',
    loadChildren: () => import('./s75006/s75006.module').then( m => m.S75006PageModule)
  },
  {
    path: 's75007',
    loadChildren: () => import('./s75007/s75007.module').then( m => m.S75007PageModule)
  },
  {
    path: 's75008',
    loadChildren: () => import('./s75008/s75008.module').then( m => m.S75008PageModule)
  },
  {
    path: 's75009',
    loadChildren: () => import('./s75009/s75009.module').then( m => m.S75009PageModule)
  },
  {
    path: 's75010',
    loadChildren: () => import('./s75010/s75010.module').then( m => m.S75010PageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomExerciseRoutingModule { }
