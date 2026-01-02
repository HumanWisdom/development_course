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
    loadChildren: () => import('./overcome-stress-anxiety-transcript/overcome-stress-anxiety-transcript.module').then(m => m.OvercomeStressAnxietyTranscriptPageModule)
  },
  {
    path: 'wisdom-for-workplace',
    component: CuratedRedirectComponent
  },
  {
    path: 'wisdom-for-workplace-transcript',
    loadChildren: () => import('./wisdom-for-workplace-transcript/wisdom-for-workplace-transcript.module').then(m => m.WisdomForWorkplaceTranscriptPageModule)
  },
  {
    path: 'have-fulfilling-relationships',
    component: CuratedRedirectComponent
  },
  {
    path: 'have-fulfilling-relationships-transcript',
    loadChildren: () => import('./have-fulfilling-relationships-transcript/have-fulfilling-relationships-transcript.module').then(m => m.HaveFulfillingRelationshipsTranscriptPageModule)
  },
  {
    path: 'be-happier',
    component: CuratedRedirectComponent
  },
  {
    path: 'be-happier-transcript',
    loadChildren: () => import('./be-happier-transcript/be-happier-transcript.module').then(m => m.BeHappierTranscriptPageModule)
  },
  {
    path: 'change-unhelpful-habits',
    component: CuratedRedirectComponent
  },
  {
    path: 'change-unhelpful-habits-transcript',
    loadChildren: () => import('./change-unhelpful-habits-transcript/change-unhelpful-habits-transcript.module').then(m => m.ChangeUnhelpfulHabitsTranscriptPageModule)
  },
  {
    path: 'have-calm-mind',
    component: CuratedRedirectComponent
  },
  {
    path: 'have-calm-mind-transcript',
    loadChildren: () => import('./have-calm-mind-transcript/have-calm-mind-transcript.module').then(m => m.HaveCalmMindTranscriptPageModule)
  },
  {
    path: 'deal-with-sorrow-loss',
    component: CuratedRedirectComponent
  },
  {
    path: 'deal-with-sorrow-loss-transcript',
    loadChildren: () => import('./deal-with-sorrow-loss-transcript/deal-with-sorrow-loss-transcript.module').then(m => m.DealWithSorrowLossTranscriptPageModule)
  },
  {
    path: 'manage-your-emotions',
    component: CuratedRedirectComponent
  },
  {
    path: 'manage-your-emotions-transcript',
    loadChildren: () => import('./manage-your-emotions-transcript/manage-your-emotions-transcript.module').then(m => m.ManageYourEmotionsTranscriptPageModule)
  },
  {
    path: 'parent-hub',
    component: CuratedRedirectComponent
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
