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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomShortsRoutingModule { }
