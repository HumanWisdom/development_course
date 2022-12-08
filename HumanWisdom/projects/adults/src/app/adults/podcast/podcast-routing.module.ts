import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./podcast-toc/podcast-toc.module').then( m => m.PodcastTocPageModule),
  },
  {
    path: 'podcast-toc',
    loadChildren: () => import('./podcast-toc/podcast-toc.module').then( m => m.PodcastTocPageModule),
  },
  {
    path: 'podcast:/tag',
    loadChildren: () => import('./podcast-toc/podcast-toc.module').then( m => m.PodcastTocPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
