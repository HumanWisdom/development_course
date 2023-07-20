import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'develop-a-calm-mind',
    loadChildren: () => import('./develop-a-calm-mind/develop-a-calm-mind.module').then( m => m.DevelopACalmMindPageModule)
  },
  {
    path: 'understand-yourself',
    loadChildren: () => import('./understand-yourself/understand-yourself.module').then( m => m.UnderstandYourselfPageModule)
  },
  {
    path: 'understand-how-your-mind-works',
    loadChildren: () => import('./understand-how-your-mind-works/understand-how-your-mind-works.module').then( m => m.UnderstandHowYourMindWorksPageModule)
  },
  {
    path: 'manage-your-emotions',
    loadChildren: () => import('./manage-your-emotions/manage-your-emotions.module').then( m => m.ManageYourEmotionsPageModule)
  },
  {
    path: 'live-your-best-life',
    loadChildren: () => import('./live-your-best-life/live-your-best-life.module').then( m => m.LiveYourBestLifePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathwayRoutingModule { }
