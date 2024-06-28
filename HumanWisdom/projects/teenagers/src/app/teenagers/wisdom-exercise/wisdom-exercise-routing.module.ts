import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./s157001/s157001.module').then( m => m.S157001PageModule)
  },
  {
    path: 's157001',
    loadChildren: () => import('./s157001/s157001.module').then( m => m.S157001PageModule)
  },
  {
    path: 's157002',   
    canActivate:[ActiveGuard],
    loadChildren: () => import('./s157002/s157002.module').then( m => m.S157002PageModule)
  },
  {
    path: 's157003',
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157003/s157003.module').then( m => m.S157003PageModule)
  },
  {
    path: 's157004',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157004/s157004.module').then( m => m.S157004PageModule)
  },
  {
    path: 's157005',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157005/s157005.module').then( m => m.S157005PageModule)
  },
  {
    path: 's157006',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157006/s157006.module').then( m => m.S157006PageModule)
  },
  {
    path: 's157007', 
    canActivate:[ActiveGuard],  
   loadChildren: () => import('./s157007/s157007.module').then( m => m.S157007PageModule)
  },
  {
    path: 's157008',
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157008/s157008.module').then( m => m.S157008PageModule)
  },
  {
    path: 's157009',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157009/s157009.module').then( m => m.S157009PageModule)
  },
  {
    path: 's157010',  
    canActivate:[ActiveGuard], 
   loadChildren: () => import('./s157010/s157010.module').then( m => m.S157010PageModule)
  },
  {
    path: 's157011',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157011/s157011.module').then( m => m.S157011PageModule)
  },
  {
    path: 's157012',  
    canActivate:[ActiveGuard],
    loadChildren: () => import('./s157012/s157012.module').then( m => m.S157012PageModule)
  },
  {
    path: 's157013',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157013/s157013.module').then( m => m.S157013PageModule)
  },
  {
    path: 's157014',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157014/s157014.module').then( m => m.S157014PageModule)
  },
  {
    path: 's157015',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157015/s157015.module').then( m => m.S157015PageModule)
  },
  {
    path: 's157016',   
    canActivate:[ActiveGuard],
   loadChildren: () => import('./s157016/s157016.module').then( m => m.S157016PageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomExerciseRoutingModule { }
