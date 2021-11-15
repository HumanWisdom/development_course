import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [   
  {
    path: '',
    loadChildren: () => import('./adult-dashboard/adult-dashboard.module').then( m => m.AdultDashboardPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'framework-v1',
    loadChildren: () => import('./framework-v1/framework-v1.module').then( m => m.FrameworkV1Module)
  },    
  {
    path: 'adult-dashboard',
    loadChildren: () => import('./adult-dashboard/adult-dashboard.module').then( m => m.AdultDashboardPageModule),
    canActivate:[AuthGuard]
  },  
  {
    path: 'journal',
    loadChildren: () => import('./journal/journal.module').then( m => m.JournalPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  }, 
  {
    path: 'coursenote',
    loadChildren: () => import('./coursenote/coursenote.module').then( m => m.CoursenotePageModule)
  },  
  {
    path: 'wisdom-survey',
    loadChildren: () => import('./wisdom-survey/wisdom-survey.module').then( m => m.WisdomSurveyModule)
  },
  {
    path: 'wisdom-stories',
    loadChildren: () => import('./wisdom-stories/wisdom-stories.module').then( m => m.WisdomStoriesModule)
  },
  {
    path: 'discovering-wisdom',
    loadChildren: () => import('./discovering-wisdom/discovering-wisdom.module').then( m => m.DiscoveringWisdomModule)
  },
  {
    path: 'benefits-of-wisdom',
    loadChildren: () => import('./benefits-of-wisdom/benefits-of-wisdom.module').then( m => m.BenefitsOfWisdomModule)
  },
  {
    path: 'five-circles',
    loadChildren: () => import('./five-circles/five-circles.module').then( m => m.FiveCirclesModule)
  },
  {
    path: 'key-ideas',
    loadChildren: () => import('./key-ideas/key-ideas.module').then( m => m.KeyIdeasModule)
  },
  {
    path: 'program-guide',
    loadChildren: () => import('./program-guide/program-guide.module').then( m => m.ProgramGuideModule)
  },
  {
    path: 'get-support-now',
    loadChildren: () => import('./get-support-now/get-support-now.module').then( m => m.GetSupportNowModule)
  },
  {
    path: 'nature',
    loadChildren: () => import('./nature/nature.module').then( m => m.NatureModule)
  },
  {
    path: 'breathing',
    loadChildren: () => import('./breathing/breathing.module').then( m => m.BreathingModule)
  },
  {
    path: 'noticing-thoughts',
    loadChildren: () => import('./noticing-thoughts/noticing-thoughts.module').then( m => m.NoticingThoughtsModule)
  },  
  {
    path: 'meditation',
    loadChildren: () => import('./meditation/meditation.module').then( m => m.MeditationModule)
  },
  {
    path: 'guided-meditation',
    loadChildren: () => import('./guided-meditation/guided-meditation.module').then( m => m.GuidedMeditationModule)
  },
  {
    path: 'benefits-of-enquiry',
    loadChildren: () => import('./benefits-of-enquiry/benefits-of-enquiry.module').then( m => m.BenefitsOfEnquiryModule)
  },
  {
    path: 'how-to-begin',
    loadChildren: () => import('./how-to-begin/how-to-begin.module').then( m => m.HowToBeginModule)
  },  
  {
    path: 'three-steps-enquiry',
    loadChildren: () => import('./three-steps-enquiry/three-steps-enquiry.module').then( m => m.ThreeStepsEnquiryModule)
  },
  {
    path: 'insight',
    loadChildren: () => import('./insight/insight.module').then( m => m.InsightModule)
  },
  {
    path: 'awareness',
    loadChildren: () => import('./awareness/awareness.module').then( m => m.AwarenessModule)
  },
  {
    path: 'no-judgement',
    loadChildren: () => import('./no-judgement/no-judgement.module').then( m => m.NoJudgementModule)
  },
  {
    path: 'questions-are-key',
    loadChildren: () => import('./questions-are-key/questions-are-key.module').then( m => m.QuestionsAreKeyModule)
  },  
  {
    path: 'without-language',
    loadChildren: () => import('./without-language/without-language.module').then( m => m.WithoutLanguageModule)
  },  
  {
    path: 'obstacles-enquiry',
    loadChildren: () => import('./obstacles-enquiry/obstacles-enquiry.module').then( m => m.ObstaclesEnquiryModule)
  },  
  {
    path: 'conditioning',
    loadChildren: () => import('./conditioning/conditioning.module').then( m => m.ConditioningModule)
  },   
  {
    path: 'comparison',
    loadChildren: () => import('./comparison/comparison.module').then( m => m.ComparisonModule)
  }, 
  {
    path: 'reactive-mind',
    loadChildren: () => import('./reactive-mind/reactive-mind.module').then( m => m.ReactiveMindModule)
  },
  {
    path: 'self-image',
    loadChildren: () => import('./self-image/self-image.module').then( m => m.SelfImageModule)
  },
  {
    path: 'self-interest',
    loadChildren: () => import('./self-interest/self-interest.module').then( m => m.SelfInterestModule)
  },
  {
    path: 'identity',
    loadChildren: () => import('./identity/identity.module').then( m => m.IdentityModule)
  },
  {
    path: 'emotional-needs',
    loadChildren: () => import('./emotional-needs/emotional-needs.module').then( m => m.EmotionalNeedsModule)
  },
  {
    path: 'inner-boredom',
    loadChildren: () => import('./inner-boredom/inner-boredom.module').then( m => m.InnerBoredomModule)
  },
  {
    path: 'nature-of-i',
    loadChildren: () => import('./nature-of-i/nature-of-i.module').then( m => m.NatureOfIModule)
  },
  {
    path: 'fear-anxiety',
    loadChildren: () => import('./fear-anxiety/fear-anxiety.module').then( m => m.FearAnxietyModule)
  },  
  {
    path: 'pleasure',
    loadChildren: () => import('./pleasure/pleasure.module').then( m => m.PleasureModule)
  },
  {
    path: 'sorrow',
    loadChildren: () => import('./sorrow/sorrow.module').then( m => m.SorrowModule)
  },
  {
    path: 'loneliness',
    loadChildren: () => import('./loneliness/loneliness.module').then( m => m.LonelinessModule)
  },     
  {
    path: 'anger',
    loadChildren: () => import('./anger/anger.module').then( m => m.AngerModule)
  },    
  {
    path: 'stress',
    loadChildren: () => import('./stress/stress.module').then( m => m.StressModule)
  },
  {
    path: 'relationships',
    loadChildren: () => import('./relationships/relationships.module').then( m => m.RelationshipsModule)
  },    
  {
    path: 'love',
    loadChildren: () => import('./love/love.module').then( m => m.LoveModule)
  },
  {
    path: 'criticism',
    loadChildren: () => import('./criticism/criticism.module').then( m => m.CriticismModule)
  },   
  {
    path: 'self-esteem',
    loadChildren: () => import('./self-esteem/self-esteem.module').then( m => m.SelfEsteemModule)
  }, 
  {
    path: 'living-with-peace',
    loadChildren: () => import('./living-with-peace/living-with-peace.module').then( m => m.LivingWithPeaceModule)
  },
  {
    path: 'dealing-with-death',
    loadChildren: () => import('./dealing-with-death/dealing-with-death.module').then( m => m.DealingWithDeathModule)
  },
  {
    path: 'happiness',
    loadChildren: () => import('./happiness/happiness.module').then( m => m.HappinessModule)
  },    
  {
    path: 'communication',
    loadChildren: () => import('./communication/communication.module').then( m => m.CommunicationModule)
  },
  {
    path: 'opinions-beliefs',
    loadChildren: () => import('./opinions-beliefs/opinions-beliefs.module').then( m => m.OpinionsBeliefsModule)
  },
  {
    path: 'success-failure',
    loadChildren: () => import('./success-failure/success-failure.module').then( m => m.SuccessFailureModule)
  },
  {
    path: 'habit-addiction',
    loadChildren: () => import('./habit-addiction/habit-addiction.module').then( m => m.HabitAddictionModule)
  },
  {
    path: 'food-health',
    loadChildren: () => import('./food-health/food-health.module').then( m => m.FoodHealthModule)
  },
  {
    path: 'money',
    loadChildren: () => import('./money/money.module').then( m => m.MoneyModule)
  },  
  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then( m => m.WorkModule)
  },
   {
    path: 'leadership',
    loadChildren: () => import('./leadership/leadership.module').then( m => m.LeadershipModule)
  },
  {
    path: 'solving-global-problems',
    loadChildren: () => import('./solving-global-problems/solving-global-problems.module').then( m => m.SolvingGlobalProblemsModule)
  }, 
  {
    path: 'bookmarks',
    loadChildren: () => import('./framework-v1/bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
  }, 
  {
    path: 'cookie-policy',
    loadChildren: () => import('./framework-v1/cookie-policy/cookie-policy.module').then( m => m.CookiePolicyPageModule)
  },
  {
    path: 'tree-planting-program',
    loadChildren: () => import('./framework-v1/tree-planting-program/tree-planting-program.module').then( m => m.TreePlantingProgramPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultsRoutingModule { }
