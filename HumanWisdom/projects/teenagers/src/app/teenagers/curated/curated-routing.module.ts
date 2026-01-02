import { SingleAudioContentComponent } from '../../../../../shared/component/single-audio-content/single-audio-content.component';
import { YoutubeContentComponent } from '../../../../../shared/component/youtube-content/youtube-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuratedRedirectComponent } from './curated-redirect/curated-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: CuratedRedirectComponent
  },
  {
    path: 'overcome-stress-anxiety',
    component: CuratedRedirectComponent
  },
  {
    path: 'overcome-stress-anxiety-transcript',
    loadChildren: () => import('./overcome-stress-anxiety-transcript/overcome-stress-anxiety-transcript.module').then( m => m.OvercomeStressAnxietyTranscriptPageModule)
  },
  {
    path: 'have-fulfilling-relationships',
    component: CuratedRedirectComponent
  },
  {
    path: 'have-fulfilling-relationships-transcript',
    loadChildren: () => import('./have-fulfilling-relationships-transcript/have-fulfilling-relationships-transcript.module').then( m => m.HaveFulfillingRelationshipsTranscriptPageModule)
  },
  {
    path: 'be-happier',
    component: CuratedRedirectComponent
  },
  {
    path: 'be-happier-transcript',
    loadChildren: () => import('./be-happier-transcript/be-happier-transcript.module').then( m => m.BeHappierTranscriptPageModule)
  },
  {
    path: 'overcome-unhelpful-habits',
    component: CuratedRedirectComponent
  },
  {
    path: 'overcome-unhelpful-habits-transcript',
    loadChildren: () => import('./overcome-unhelpful-habits-transcript/overcome-unhelpful-habits-transcript.module').then( m => m.OvercomeUnhelpfulHabitsTranscriptPageModule)
  },
  {
    path: 'feel-calm',
    component: CuratedRedirectComponent
  },
  {
    path: 'feel-calm-transcript',
    loadChildren: () => import('./feel-calm-transcript/feel-calm-transcript.module').then( m => m.FeelCalmTranscriptPageModule)
  },
  {
    path: 'manage-your-emotions',
    component: CuratedRedirectComponent
  },
  {
    path: 'manage-your-emotions-transcript',
    loadChildren: () => import('./manage-your-emotions-transcript/manage-your-emotions-transcript.module').then( m => m.ManageYourEmotionsTranscriptPageModule)
  },
  {
    path: 'succeed-in-life',
    component: CuratedRedirectComponent
  },
  {
    path: 'succeed-in-life-transcript',
    loadChildren: () => import('./succeed-in-life-transcript/succeed-in-life-transcript.module').then( m => m.SucceedInLifeTranscriptPageModule)
  },
   {
    path: 'understand-yourself',
    component: CuratedRedirectComponent
  },
  {
    path: 'understand-yourself-transcript',
    loadChildren: () => import('./understand-yourself-transcript/understand-yourself-transcript.module').then( m => m.UnderstandYourselfTranscriptPageModule)
  },
  {
    path: 'youtubelink/:videolink',
    component: YoutubeContentComponent
  },
  {
    path: 'audiopage/:audiolink/:title/:RowId',
    component: SingleAudioContentComponent
    // component: AdultsAudioMeditationComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuratedRoutingModule { }
