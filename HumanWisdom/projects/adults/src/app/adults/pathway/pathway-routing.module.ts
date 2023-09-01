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
  {
    path: 'develop-a-calm-mind-transcript',
    loadChildren: () => import('./develop-a-calm-mind-transcript/develop-a-calm-mind-transcript.module').then( m => m.DevelopACalmMindTranscriptPageModule)
  },
  {
    path: 'live-your-best-life-transcript',
    loadChildren: () => import('./live-your-best-life-transcript/live-your-best-life-transcript.module').then( m => m.LiveYourBestLifeTranscriptPageModule)
  },
  {
    path: 'manage-your-emotions-transcript',
    loadChildren: () => import('./manage-your-emotions-transcript/manage-your-emotions-transcript.module').then( m => m.ManageYourEmotionsTranscriptPageModule)
  },
  {
    path: 'understand-how-your-mind-works-transcript',
    loadChildren: () => import('./understand-how-your-mind-works-transcript/understand-how-your-mind-works-transcript.module').then( m => m.UnderstandHowYourMindWorksTranscriptPageModule)
  },
  {
    path: 'understand-yourself-transcript',
    loadChildren: () => import('./understand-yourself-transcript/understand-yourself-transcript.module').then( m => m.UnderstandYourselfTranscriptPageModule)
  },
  {
    path: 'index-transcript',
    loadChildren: () => import('./index-transcript/index-transcript.module').then( m => m.IndexTranscriptPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathwayRoutingModule { }
