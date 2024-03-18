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
    path: 'develop-a-calm-mind-transcript',
    loadChildren: () => import('./develop-a-calm-mind-transcript/develop-a-calm-mind-transcript.module').then( m => m.DevelopACalmMindTranscriptPageModule)
  },
  {
    path: 'learn-to-question-yourself',
    loadChildren: () => import('./learn-to-question-yourself/learn-to-question-yourself.module').then( m => m.LearnToQuestionYourselfPageModule)
  },
  {
    path: 'learn-to-question-yourself-transcript',
    loadChildren: () => import('./learn-to-question-yourself-transcript/learn-to-question-yourself-transcript.module').then( m => m.LearnToQuestionYourselfTranscriptPageModule)
  },
  {
    path: 'understand-how-your-mind-works',
    loadChildren: () => import('./understand-how-your-mind-works/understand-how-your-mind-works.module').then( m => m.UnderstandHowYourMindWorksPageModule)
  },
  {
    path: 'understand-how-your-mind-works-transcript',
    loadChildren: () => import('./understand-how-your-mind-works-transcript/understand-how-your-mind-works-transcript.module').then( m => m.UnderstandHowYourMindWorksTranscriptPageModule)
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
    path: 'nature',
    loadChildren: () => import('../nature/nature.module').then( m => m.NatureModule)
  },
  {
    path: 'breathing',
    loadChildren: () => import('../breathing/breathing.module').then( m => m.BreathingModule)
  },
  {
    path: 'noticing-thoughts',
    loadChildren: () => import('../noticing-thoughts/noticing-thoughts.module').then( m => m.NoticingThoughtsModule)
  },
  {
    path: 'meditation',
    loadChildren: () => import('../meditation/meditation.module').then( m => m.MeditationModule)
  } ,
  {
    path: 'guided-meditation',
    loadChildren: () => import('../guided-meditation/guided-meditation.module').then( m => m.GuidedMeditationModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathwayRoutingModule { }
