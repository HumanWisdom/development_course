import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./wisdom-shorts-index/wisdom-shorts-index.module').then(m => m.WisdomShortsIndexPageModule),
  },
  {
    path: 'widom-shorts-index',
    loadChildren: () => import('./wisdom-shorts-index/wisdom-shorts-index.module').then(m => m.WisdomShortsIndexPageModule),
  },
  {
    path: 'wisdom-shorts-v',
    loadChildren: () => import('./wisdom-shorts-s01/wisdom-shorts-s01.module').then(m => m.WisdomShortsS01PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomShortsRoutingModule { }
