import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

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
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s04/wisdom-shorts-s04.module').then( m => m.WisdomShortsS04PageModule)
  },
  {
    path: 'wisdom-shorts-s05',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s05/wisdom-shorts-s05.module').then( m => m.WisdomShortsS05PageModule)
  },
  {
    path: 'wisdom-shorts-s06',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s06/wisdom-shorts-s06.module').then( m => m.WisdomShortsS06PageModule)
  },
  {
    path: 'wisdom-shorts-s07',
    canActivate:[ActiveGuard], 
    loadChildren: () => import('./wisdom-shorts-s07/wisdom-shorts-s07.module').then( m => m.WisdomShortsS07PageModule)
  },
  {
    path: 'wisdom-shorts-s08',
    canActivate:[ActiveGuard], 
    loadChildren: () => import('./wisdom-shorts-s08/wisdom-shorts-s08.module').then( m => m.WisdomShortsS08PageModule)
  },
  {
    path: 'wisdom-shorts-s09',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s09/wisdom-shorts-s09.module').then( m => m.WisdomShortsS09PageModule)
  },
  {
    path: 'wisdom-shorts-s10',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s10/wisdom-shorts-s10.module').then( m => m.WisdomShortsS10PageModule)
  },
  {
    path: 'wisdom-shorts-s11',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s11/wisdom-shorts-s11.module').then( m => m.WisdomShortsS11PageModule)
  },
  {
    path: 'wisdom-shorts-s12',
    canActivate:[ActiveGuard],
    loadChildren: () => import('./wisdom-shorts-s12/wisdom-shorts-s12.module').then( m => m.WisdomShortsS12PageModule)
  },
  {
    path: 'wisdom-shorts-s13',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s13/wisdom-shorts-s13.module').then( m => m.WisdomShortsS13PageModule)
  },
  {
    path: 'wisdom-shorts-s14',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s14/wisdom-shorts-s14.module').then( m => m.WisdomShortsS14PageModule)
  },
  {
    path: 'wisdom-shorts-s15',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./wisdom-shorts-s15/wisdom-shorts-s15.module').then( m => m.WisdomShortsS15PageModule)
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomShortsRoutingModule { }
