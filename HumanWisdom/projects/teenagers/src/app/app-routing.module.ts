import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./teenagers/start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'start-here',
    loadChildren: () => import('./teenagers/start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'what-is-wisdom',
    loadChildren: () => import('./teenagers/what-is-wisdom/what-is-wisdom.module').then(m => m.WhatIsWisdomModule)
  },
  {
    path: 'how-can-wisdom-help',
    loadChildren: () => import('./teenagers/how-can-wisdom-help/how-can-wisdom-help.module').then(m => m.HowCanWisdomHelpModule)
  },
  {
    path: 'wisdom-brings-change',
    loadChildren: () => import('./teenagers/wisdom-brings-change/wisdom-brings-change.module').then(m => m.WisdomBringsChangeModule)
  },
  {
    path: 'five-circles-of-wisdom',
    loadChildren: () => import('./teenagers/five-circles-of-wisdom/five-circles-of-wisdom.module').then(m => m.FiveCirclesOfWisdomModule)
  },
  {
    path: 'key-ideas',
    loadChildren: () => import('./teenagers/key-ideas/key-ideas.module').then(m => m.KeyIdeasModule)
  },
  {
    path: 'teenager-dashboard',
    loadChildren: () => import('./teenagers/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'benefits-of-enquiry',
    loadChildren: () => import('./teenagers/benefits-of-enquiry/benefits-of-enquiry.module').then( m => m.BenefitsOfEnquiryModule)
  },
  {
    path: 'how-to-begin',
    loadChildren: () => import('./teenagers/how-to-begin/how-to-begin.module').then( m => m.HowToBeginModule)
  },
  {
    path: 'three-steps-enquiry',
    loadChildren: () => import('./teenagers/three-steps-enquiry/three-steps-enquiry.module').then( m => m.ThreeStepsEnquiryModule)
  },
  {
    path: 'insight',
    loadChildren: () => import('./teenagers/insight/insight.module').then( m => m.InsightModule)
  },
  {
    path: 'awareness',
    loadChildren: () => import('./teenagers/awareness/awareness.module').then( m => m.AwarenessModule)
  },
  {
    path: 'no-judgement',
    loadChildren: () => import('./teenagers/no-judgement/no-judgement.module').then( m => m.NoJudgementModule)
  },
  {
    path: 'questions-are-key',
    loadChildren: () => import('./teenagers/questions-are-key/questions-are-key.module').then( m => m.QuestionsAreKeyModule)
  },
  {
    path: 'without-language',
    loadChildren: () => import('./teenagers/without-language/without-language.module').then( m => m.WithoutLanguageModule)
  },
  {
    path: 'obstacles-enquiry',
    loadChildren: () => import('./teenagers/obstacles-enquiry/obstacles-enquiry.module').then( m => m.ObstaclesEnquiryModule)
  },
  {
    path: 'nature',
    loadChildren: () => import('./teenagers/nature/nature.module').then( m => m.NatureModule)
  },
  {
    path: 'breathing',
    loadChildren: () => import('./teenagers/breathing/breathing.module').then( m => m.BreathingModule)
  },
  {
    path: 'noticing-thoughts',
    loadChildren: () => import('./teenagers/noticing-thoughts/noticing-thoughts.module').then( m => m.NoticingThoughtsModule)
  },
  {
    path: 'meditation',
    loadChildren: () => import('./teenagers/meditation/meditation.module').then( m => m.MeditationModule)
  } ,
  {
    path: 'guided-meditation',
    loadChildren: () => import('./teenagers/guided-meditation/guided-meditation.module').then( m => m.GuidedMeditationModule)
  },      
   {
    path: 'conditioning',
    loadChildren: () => import('./teenagers/conditioning/conditioning.module').then( m => m.ConditioningModule)
  },
  {
    path: 'comparison',
    loadChildren: () => import('./teenagers/comparison/comparison.module').then( m => m.ComparisonModule)
  },
  {
    path: 'fear-anxiety',
    loadChildren: () => import('./teenagers/fear-anxiety/fear-anxiety.module').then( m => m.FearAnxietyModule)
   
   },
   { path: 'reactive-mind',
    loadChildren: () => import('./teenagers/reactive-mind/reactive-mind.module').then( m => m.ReactiveMindModule)
  },
  {
    path: 'self-image',
    loadChildren: () => import('./teenagers/self-image/self-image.module').then( m => m.SelfImageModule)
  },
  {
    path: 'self-interest',
    loadChildren: () => import('./teenagers/self-interest/self-interest.module').then( m => m.SelfInterestModule)
  },
  {
    path: 'sorrow',
    loadChildren: () => import('./teenagers/sorrow/sorrow.module').then(m => m.SorrowModule)
  },
  {
    path: 'loneliness',
    loadChildren: () => import('./teenagers/loneliness/loneliness.module').then(m => m.LonelinessModule)
  }, 
  {
    path: 'anger',
    loadChildren: () => import('./teenagers/anger/anger.module').then(m => m.AngerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
