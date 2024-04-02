import { SingleAudioContentComponent } from '../../../../../shared/component/single-audio-content/single-audio-content.component';
import { YoutubeContentComponent } from '../../../../../shared/component/youtube-content/youtube-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultsAudioMeditationComponent } from '../../../../../shared/component/adults-audio-meditation/adults-audio-meditation.component';

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
    path: 'overcome-unhelpful-habits',
    loadChildren: () => import('./overcome-unhelpful-habits/overcome-unhelpful-habits.module').then( m => m.OvercomeUnhelpfulHabitsPageModule)
  },
  {
    path: 'overcome-unhelpful-habits-transcript',
    loadChildren: () => import('./overcome-unhelpful-habits-transcript/overcome-unhelpful-habits-transcript.module').then( m => m.OvercomeUnhelpfulHabitsTranscriptPageModule)
  },
  {
    path: 'feel-calm',
    loadChildren: () => import('./feel-calm/feel-calm.module').then( m => m.FeelCalmPageModule)
  },
  {
    path: 'feel-calm-transcript',
    loadChildren: () => import('./feel-calm-transcript/feel-calm-transcript.module').then( m => m.FeelCalmTranscriptPageModule)
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
    path: 'succeed-in-life',
    loadChildren: () => import('./succeed-in-life/succeed-in-life.module').then( m => m.SucceedInLifePageModule)
  },
  {
    path: 'succeed-in-life-transcript',
    loadChildren: () => import('./succeed-in-life-transcript/succeed-in-life-transcript.module').then( m => m.SucceedInLifeTranscriptPageModule)
  },
   {
    path: 'understand-yourself',
    loadChildren: () => import('./understand-yourself/understand-yourself.module').then( m => m.UnderstandYourselfPageModule)
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
