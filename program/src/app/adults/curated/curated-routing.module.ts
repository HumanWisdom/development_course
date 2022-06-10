import { SingleAudioContentComponent } from './../shared/component/single-audio-content/single-audio-content.component';
import { YoutubeContentComponent } from './../shared/component/youtube-content/youtube-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./overcome-stress-anxiety/overcome-stress-anxiety.module').then( m => m.OvercomeStressAnxietyPageModule),
  },
  {
    path: 'overcome-stress-anxiety',
    loadChildren: () => import('./overcome-stress-anxiety/overcome-stress-anxiety.module').then( m => m.OvercomeStressAnxietyPageModule),
  },   
  {
    path: 'overcome-stress-anxiety-transcript',
    loadChildren: () => import('./overcome-stress-anxiety-transcript/overcome-stress-anxiety-transcript.module').then( m => m.OvercomeStressAnxietyTranscriptPageModule)
  },
  {
    path: 'wisdom-for-workplace',
    loadChildren: () => import('./wisdom-for-workplace/wisdom-for-workplace.module').then( m => m.WisdomForWorkplacePageModule)
  },
  {
    path: 'wisdom-for-workplace-transcript',
    loadChildren: () => import('./wisdom-for-workplace-transcript/wisdom-for-workplace-transcript.module').then( m => m.WisdomForWorkplaceTranscriptPageModule)
  },
  {
    path: 'have-fulfilling-relationships',
    loadChildren: () => import('./have-fulfilling-relationships/have-fulfilling-relationships.module').then( m => m.HaveFulfillingRelationshipsPageModule)
  },
  {
    path: 'have-fulfilling-relationships-transcript',
    loadChildren: () => import('./have-fulfilling-relationships-transcript/have-fulfilling-relationships-transcript.module').then( m => m.HaveFulfillingRelationshipsTranscriptPageModule)
  },
  {
    path: 'be-happier',
    loadChildren: () => import('./be-happier/be-happier.module').then( m => m.BeHappierPageModule)
  },
  {
    path: 'be-happier-transcript',
    loadChildren: () => import('./be-happier-transcript/be-happier-transcript.module').then( m => m.BeHappierTranscriptPageModule)
  },
  {
    path: 'change-unhelpful-habits',
    loadChildren: () => import('./change-unhelpful-habits/change-unhelpful-habits.module').then( m => m.ChangeUnhelpfulHabitsPageModule)
  },
  {
    path: 'change-unhelpful-habits-transcript',
    loadChildren: () => import('./change-unhelpful-habits-transcript/change-unhelpful-habits-transcript.module').then( m => m.ChangeUnhelpfulHabitsTranscriptPageModule)
  },
  {
    path: 'have-calm-mind',
    loadChildren: () => import('./have-calm-mind/have-calm-mind.module').then( m => m.HaveCalmMindPageModule)
  },
  {
    path: 'have-calm-mind-transcript',
    loadChildren: () => import('./have-calm-mind-transcript/have-calm-mind-transcript.module').then( m => m.HaveCalmMindTranscriptPageModule)
  },
  {
    path: 'deal-with-sorrow-loss',
    loadChildren: () => import('./deal-with-sorrow-loss/deal-with-sorrow-loss.module').then( m => m.DealWithSorrowLossPageModule)
  },
  {
    path: 'deal-with-sorrow-loss-transcript',
    loadChildren: () => import('./deal-with-sorrow-loss-transcript/deal-with-sorrow-loss-transcript.module').then( m => m.DealWithSorrowLossTranscriptPageModule)
  },
  {
    path: 'manage-your-emotions',
    loadChildren: () => import('./manage-your-emotions/manage-your-emotions.module').then( m => m.ManageYourEmotionsPageModule)
  },
  {
    path: 'manage-your-emotions-transcript',
    loadChildren: () => import('./manage-your-emotions-transcript/manage-your-emotions-transcript.module').then( m => m.ManageYourEmotionsTranscriptPageModule)
  },
 {
   path: 'youtubelink/:videolink',
   component: YoutubeContentComponent
 },
 {
  path: 'audiopage/:audiolink/:title',
  component: SingleAudioContentComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuratedRoutingModule { }
