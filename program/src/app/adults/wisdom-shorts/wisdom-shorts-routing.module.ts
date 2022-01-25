import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./wisdom-shorts-index/wisdom-shorts-index.module').then( m => m.WisdomShortsIndexPageModule),
  },
  {
    path: 'widom-shorts-index',
    loadChildren: () => import('./wisdom-shorts-index/wisdom-shorts-index.module').then( m => m.WisdomShortsIndexPageModule),
  },
  {
    path: 'wisdom-shorts-s01',
    loadChildren: () => import('./wisdom-shorts-s01/wisdom-shorts-s01.module').then( m => m.WisdomShortsS01PageModule)
  },
  {
    path: 'wisdom-shorts-s02',
    loadChildren: () => import('./wisdom-shorts-s02/wisdom-shorts-s02.module').then( m => m.WisdomShortsS02PageModule)
  },
  {
    path: 'wisdom-shorts-s03',
    loadChildren: () => import('./wisdom-shorts-s03/wisdom-shorts-s03.module').then( m => m.WisdomShortsS03PageModule)
  },
  {
    path: 'wisdom-shorts-s04',
    loadChildren: () => import('./wisdom-shorts-s04/wisdom-shorts-s04.module').then( m => m.WisdomShortsS04PageModule)
  },
  {
    path: 'wisdom-shorts-s05',
    loadChildren: () => import('./wisdom-shorts-s05/wisdom-shorts-s05.module').then( m => m.WisdomShortsS05PageModule)
  },
  {
    path: 'wisdom-shorts-s06',
    loadChildren: () => import('./wisdom-shorts-s06/wisdom-shorts-s06.module').then( m => m.WisdomShortsS06PageModule)
  },
  {
    path: 'wisdom-shorts-s07',
    loadChildren: () => import('./wisdom-shorts-s07/wisdom-shorts-s07.module').then( m => m.WisdomShortsS07PageModule)
  },
  {
    path: 'wisdom-shorts-s08',
    loadChildren: () => import('./wisdom-shorts-s08/wisdom-shorts-s08.module').then( m => m.WisdomShortsS08PageModule)
  },
  {
    path: 'wisdom-shorts-s09',
    loadChildren: () => import('./wisdom-shorts-s09/wisdom-shorts-s09.module').then( m => m.WisdomShortsS09PageModule)
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomShortsRoutingModule { }
