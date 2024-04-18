import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioVideoGuard } from '../audio-video.guard';
import { S3VideoComponent } from '../../../../shared/component/s3-video/s3-video.component';
import { SingleAudioContentComponent } from '../../../../shared/component/single-audio-content/single-audio-content.component';
import { ActiveGuard } from '../authGuard/active.guard';
import {BlogArticlePage} from '../../../../shared/component/blogs/blog-article/blog-article.page';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../teenagers/start-here/start-here.module').then(m => m.StartHereModule)
    },
    {
        path: 'change-topic',
        loadChildren: () => import('../teenagers/change-topic/change-topic.module').then(m => m.ChangeTopicPageModule)
    },
    {
        path: 'start-here',
        loadChildren: () => import('../teenagers/start-here/start-here.module').then(m => m.StartHereModule)
    },
    {
        path: 'what-is-wisdom',
        loadChildren: () => import('../teenagers/what-is-wisdom/what-is-wisdom.module').then(m => m.WhatIsWisdomModule)
    },
    {
        path: 'how-can-wisdom-help',
        loadChildren: () => import('../teenagers/how-can-wisdom-help/how-can-wisdom-help.module').then(m => m.HowCanWisdomHelpModule)
    },
    {
        path: 'wisdom-brings-change',
        loadChildren: () => import('../teenagers/wisdom-brings-change/wisdom-brings-change.module').then(m => m.WisdomBringsChangeModule)
    },
    {
        path: 'five-circles-of-wisdom',
        loadChildren: () => import('../teenagers/five-circles-of-wisdom/five-circles-of-wisdom.module').then(m => m.FiveCirclesOfWisdomModule)
    },
    {
        path: 'key-ideas',
        loadChildren: () => import('../teenagers/key-ideas/key-ideas.module').then(m => m.KeyIdeasModule)
    },
    {
        path: 'teenager-dashboard',
        loadChildren: () => import('../teenagers/dashboard/dashboard.module').then(m => m.DashboardPageModule)
    },
    {
        path: 'benefits-of-enquiry',
        loadChildren: () => import('../teenagers/benefits-of-enquiry/benefits-of-enquiry.module').then(m => m.BenefitsOfEnquiryModule)
    },
    {
        path: 'how-to-begin',
        loadChildren: () => import('../teenagers/how-to-begin/how-to-begin.module').then(m => m.HowToBeginModule)
    },
    {
        path: 'three-steps-enquiry',
        loadChildren: () => import('../teenagers/three-steps-enquiry/three-steps-enquiry.module').then(m => m.ThreeStepsEnquiryModule)
    },
    {
        path: 'insight',
        loadChildren: () => import('../teenagers/insight/insight.module').then(m => m.InsightModule)
    },
    {
        path: 'awareness',
        loadChildren: () => import('../teenagers/awareness/awareness.module').then(m => m.AwarenessModule)
    },
    {
        path: 'no-judgement',
        loadChildren: () => import('../teenagers/no-judgement/no-judgement.module').then(m => m.NoJudgementModule)
    },
    {
        path: 'questions-are-key',
        loadChildren: () => import('../teenagers/questions-are-key/questions-are-key.module').then(m => m.QuestionsAreKeyModule)
    },
    {
        path: 'without-language',
        loadChildren: () => import('../teenagers/without-language/without-language.module').then(m => m.WithoutLanguageModule)
    },
    {
        path: 'obstacles-enquiry',
        loadChildren: () => import('../teenagers/obstacles-enquiry/obstacles-enquiry.module').then(m => m.ObstaclesEnquiryModule)
    },
    {
        path: 'nature',
        loadChildren: () => import('../teenagers/nature/nature.module').then(m => m.NatureModule)
    },
    {
        path: 'breathing',
        loadChildren: () => import('../teenagers/breathing/breathing.module').then(m => m.BreathingModule)
    },
    {
        path: 'noticing-thoughts',
        loadChildren: () => import('../teenagers/noticing-thoughts/noticing-thoughts.module').then(m => m.NoticingThoughtsModule)
    },
    {
        path: 'meditation',
        loadChildren: () => import('../teenagers/meditation/meditation.module').then(m => m.MeditationModule)
    },
    {
        path: 'guided-meditation',
        loadChildren: () => import('../teenagers/guided-meditation/guided-meditation.module').then(m => m.GuidedMeditationModule)
    },
    {
        path: 'conditioning',
        loadChildren: () => import('../teenagers/conditioning/conditioning.module').then(m => m.ConditioningModule)
    },
    {
        path: 'comparison',
        loadChildren: () => import('../teenagers/comparison/comparison.module').then(m => m.ComparisonModule)
    },
    {
        path: 'fear-anxiety',
        loadChildren: () => import('../teenagers/fear-anxiety/fear-anxiety.module').then(m => m.FearAnxietyModule)

    },
    {
        path: 'reactive-mind',
        loadChildren: () => import('../teenagers/reactive-mind/reactive-mind.module').then(m => m.ReactiveMindModule)
    },
    {
        path: 'self-image',
        loadChildren: () => import('../teenagers/self-image/self-image.module').then(m => m.SelfImageModule)
    },
    {
        path: 'self-interest',
        loadChildren: () => import('../teenagers/self-interest/self-interest.module').then(m => m.SelfInterestModule)
    },
    {
        path: 'sorrow',
        loadChildren: () => import('../teenagers/sorrow/sorrow.module').then(m => m.SorrowModule)
    },
    {
        path: 'loneliness',
        loadChildren: () => import('../teenagers/loneliness/loneliness.module').then(m => m.LonelinessModule)
    },
    {
        path: 'anger',
        loadChildren: () => import('../teenagers/anger/anger.module').then(m => m.AngerModule)
    },
    {
        path: "journal/:TopicName",
        loadChildren: () => import('./guided-questions/introduction/introduction.module').then(m => m.IntroductionPageModule),
        pathMatch: "full"
      },
    {
        path: 'journal',
        loadChildren: () => import('../teenagers/guided-questions/guided-questions.module').then(m => m.GuidedQuestionsModule)
    },
    {
        path: "forum",
        loadChildren: () => import("../teenagers/forum/framework-v1.module").then(m => m.FrameworkV1Module)
    },
    {
        path: 'search',
        loadChildren: () => import('../teenagers/personalised-for-you-search/personalised-for-you-search.module').then(m => m.PersonalisedForYouSearchPageModule),
        // canActivate: [AuthGu]
    },
    {
        path: 'identity',
        loadChildren: () => import('../teenagers/identity/identity.module').then(m => m.IdentityModule)
    },
    {
        path: 'emotional-needs',
        loadChildren: () => import('../teenagers/emotional-needs/emotional-needs.module').then(m => m.EmotionalNeedsModule)
    },
    {
        path: 'pleasure',
        loadChildren: () => import('../teenagers/pleasure/pleasure.module').then(m => m.PleasureModule)
    },
    {
        path: 'inner-boredom',
        loadChildren: () => import('../teenagers/inner-boredom/inner-boredom.module').then(m => m.InnerBoredomModule)
    },
    {
        path: 'nature-of-the-i',
        loadChildren: () => import('../teenagers/nature-of-the-i/nature-of-the-i.module').then(m => m.NatureOfTheIModule)
    },
    {
        path: 'external-approval',
        loadChildren: () => import('../teenagers/external-approval/external-approval.module').then(m => m.ExternalApprovalModule)
    },
    {
        path: 'stress',
        loadChildren: () => import('../teenagers/stress/stress.module').then(m => m.StressModule)
    },
    {

        path: 'self-esteem',
        loadChildren: () => import('../teenagers/self-esteem/self-esteem.module').then(m => m.SelfEsteemModule)

    },
    {
        path: 'food-health',
        loadChildren: () => import('../teenagers/food-health/food-health.module').then(m => m.FoodHealthModule)
    },
    {

        path: 'habit-addiction',
        loadChildren: () => import('../teenagers/habit-addiction/habit-addiction.module').then(m => m.HabitAddictionModule)
    },
    {

        path: 'living-with-peace',
        loadChildren: () => import('../teenagers/living-with-peace/living-with-peace.module').then(m => m.LivingWithPeaceModule)
    },
    {
        path: 'dealing-with-death',
        loadChildren: () => import('../teenagers/dealing-with-death/dealing-with-death.module').then(m => m.DealingWithDeathModule)
    },
    {
        path: 'relationships',
        loadChildren: () => import('../teenagers/relationships/relationships.module').then(m => m.RelationshipsModule)
    },
    {
        path: 'communication',
        loadChildren: () => import('../teenagers/communication/communication.module').then(m => m.CommunicationModule)
    },
    {
        path: 'happiness',
        loadChildren: () => import('../teenagers/happiness/happiness.module').then(m => m.HappinessModule)
    },
    {
        path: 'love',
        loadChildren: () => import('../teenagers/love/love.module').then(m => m.LoveModule)
    },
    {
        path: 'bullying',
        loadChildren: () => import('../teenagers/bullying/bullying.module').then(m => m.BullyingModule)
    },
    {
        path: 'criticism',
        loadChildren: () => import('../teenagers/criticism/criticism.module').then(m => m.CriticismModule)
    },
    {
        path: 'opinions-beliefs',
        loadChildren: () => import('../teenagers/opinions-beliefs/opinions-beliefs.module').then(m => m.OpinionsBeliefsModule)
    },
    {
        path: 'success-failure',
        loadChildren: () => import('../teenagers/success-failure/success-failure.module').then(m => m.SuccessFailureModule)
    },
    {
        path: 'making-better-decisions',
        loadChildren: () => import('../teenagers/making-better-decisions/making-better-decisions.module').then(m => m.MakingBetterDecisionsModule)
    },
    {
        path: 'kindness',
        loadChildren: () => import('../teenagers/kindness/kindness.module').then(m => m.KindnessModule)
    },
    {
        path: 'social-media',
        loadChildren: () => import('../teenagers/social-media/social-media.module').then(m => m.SocialMediaModule)
    },
    {
        path: 'pressure-of-exams',
        loadChildren: () => import('../teenagers/pressure-of-exams/pressure-of-exams.module').then(m => m.PressureOfExamsModule)
    },
    {
        path: 'dealing-with-depression',
        loadChildren: () => import('../teenagers/dealing-with-depression/dealing-with-depression.module').then(m => m.DealingWithDepressionModule)
    },

    {
        path: 'wisdom-exercise',
        loadChildren: () => import('../teenagers/wisdom-exercise/wisdom-exercise.module').then(m => m.WisdomExerciseModule)
    },
    {
        path: 'find-answers/:url',
        loadChildren: () => import('../teenagers/find-answers/find-answers.module').then(m => m.FindAnswersModule)
    },
    {
        path: 'feel-better-now',
        loadChildren: () => import('../../../../shared/component/feel-better-now/feel-better-now.module').then(m => m.FeelBetterNowModule),
    },
    {
        path: 'videopage/:videolink/:enable',
        canActivate: [AudioVideoGuard],
        component: S3VideoComponent
    },
    {
        path: 'videopage/:videolink/:enable/:title',
        canActivate: [AudioVideoGuard],
        component: S3VideoComponent
    },
    {
        path: 'audiopage/:audiolink/:RowId/:enable/:title',
        canActivate: [AudioVideoGuard],
        component: SingleAudioContentComponent
    },
    {
        path: 'audiopage/:audiolink/:RowId/:enable',
        canActivate: [AudioVideoGuard],
        component: SingleAudioContentComponent
    },
    {
        path: 'wisdom-shorts/:videolink',
        canActivate: [ActiveGuard],
        component: S3VideoComponent
    },
    {
        path: 'wisdom-shorts/:videolink/:enable',
        canActivate: [AudioVideoGuard],
        component: S3VideoComponent
    },
    {
        path: 'wisdom-shorts/:videolink/:enable/:title',
        canActivate: [AudioVideoGuard],
        component: S3VideoComponent
    },
    {
        path: 'teen-talk',
        loadChildren: () => import('../teenagers/teen-talk/teen-talk.module').then(m => m.TeenTalkPageModule)
    },
    {
        path: 'splash',
        loadChildren: () => import('../teenagers/splash/splash.module').then(m => m.SplashPageModule)
    },
    {
        path: 'explore',
        loadChildren: () => import('../teenagers/explore/explore.module').then(m => m.ExplorePageModule)
    },
    {
        path: 'videopage/:videolink/:enable/:title',
        component: S3VideoComponent
    },
    {
        path: 'repeat-user',
        loadChildren: () => import('../teenagers/repeat-user/repeat-user.module').then(m => m.RepeatUserPageModule)
    },
    {
        path: 'select-a-topic-to-explore',
        loadChildren: () => import('../teenagers/select-a-topic-to-explore/select-a-topic-to-explore.module').then(m => m.SelectATopicToExplorePageModule)
    },
    {
        path: 'pathway',
        loadChildren: () => import('../teenagers/pathway/pathway.module').then(m => m.PathwayModule)
    },
    {
        path: 'intro-carousel',
        loadChildren: () => import('./intro-carousel/intro-carousel.module').then(m => m.IntroCarouselPageModule)
    },
    {
        path: 'change-topic',
        loadChildren: () => import('../teenagers/change-topic/change-topic.module').then(m => m.ChangeTopicPageModule)
    },
    {
        path: 'testimonials',
        loadChildren: () => import('../teenagers/testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
    },
    {
        path: 'wisdom-stories',
        loadChildren: () => import('./wisdom-stories/wisdom-stories.module').then(m => m.WisdomStoriesModule)
    },
    {
        path: 'blogs',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
    },

    {
        path: 'curated',
        loadChildren: () => import('../teenagers/curated/curated.module').then(m => m.CuratedModule)
    },
    {
        path: 'onboarding',
        loadChildren: () => import('../onboarding/onboarding.module').then(m => m.OnboardingModule)
    },
    {
        path: 'audio-meditation',
        loadChildren: () => import('../../../../shared/component/audio-meditation/audio-meditation.module').then(m => m.AudioMeditationModule)
   },
   {

    path: 'blog-article',
    // canActivate:[ActiveGuard],  
    component:BlogArticlePage
  },
  {
    path: 'events',
    loadChildren: () => import('../../../../shared/component/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'podcast/:tag',
    loadChildren: () => import('../../../../shared/component/podcast/podcast.module').then(m => m.PodcastModule),
  },
  {
    path: 'podcast',
    loadChildren: () => import('../../../../shared/component/podcast/podcast.module').then(m => m.PodcastModule)
  },

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeenagersRoutingModule { }
