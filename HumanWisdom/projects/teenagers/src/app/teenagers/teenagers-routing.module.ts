import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioVideoGuard } from '../audio-video.guard';
import { S3VideoComponent } from '../../../../shared/component/s3-video/s3-video.component';
import { SingleAudioContentComponent } from '../../../../shared/component/single-audio-content/single-audio-content.component';
import { ActiveGuard } from '../authGuard/active.guard';
import { BlogArticlePage } from '../../../../shared/component/blogs/blog-article/blog-article.page';
import { BlogIndexPage } from '../../../../shared/component/blogs/blog-index/blog-index.page';
import { AuthGuard } from '../authGuard/auth.guard';
import { NewsletterComponent } from '../../../../shared/component/newsletter/newsletter.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../teenagers/teenagers-dashboard/teenagers-dashboard.module').then(m => m.TeenagersDashboardPageModule),
    canActivate: [AuthGuard]
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
    path: 'solving-global-problems',
    loadChildren: () => import('../teenagers/solving-global-problems/solving-global-problems.module').then(m => m.SolvingGlobalProblemsModule)
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
    loadChildren: () => import('../teenagers/teenagers-dashboard/teenagers-dashboard.module').then(m => m.TeenagersDashboardPageModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('../../../../shared/component/guided-questions/introduction/introduction.module').then(m => m.IntroductionPageModule),
    pathMatch: "full"
  },
  {
    path: 'viewcart',
    loadChildren: () => import('../../../../shared/component/viewcart/viewcart.module').then(m => m.ViewcartPageModule)
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
    path: 'career-success',
    loadChildren: () => import('../teenagers/career-success/career-success.module').then(m => m.CareerSuccessModule)
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
    path: 'wisdom-survey',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../../../shared/component/wisdom-survey/wisdom-survey.module').then(m => m.WisdomSurveyModule)
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
    path: 'explore',
    loadChildren: () => import('../teenagers/explore/explore.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'videopage/:videolink/:enable/:title',
    component: S3VideoComponent
  },
  {
    path: 'repeat-user',
    loadChildren: () => import('../../../../shared/component/repeat-user/repeat-user.module').then(m => m.RepeatUserPageModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('../../../../shared/component/intro-carousel/intro-carousel.module').then(m => m.IntroCarouselPageModule)
  },
  {
    path: 'change-topic',
    loadChildren: () => import('../teenagers/change-topic/change-topic.module').then(m => m.ChangeTopicPageModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('../../../../shared/component/testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
  },
  {
    path: 'wisdom-stories',
    loadChildren: () => import('./wisdom-stories/wisdom-stories.module').then(m => m.WisdomStoriesModule)
  },
  // {
  //     path: 'blogs',
  //     loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  // },
  {
    path: 'blogs',
    component: BlogIndexPage
  },
  {
    path: 'wisdom-shorts',
    loadChildren: () => import('../../../../shared/component/wisdom-shorts/wisdom-shorts.module').then(m => m.WisdomShortsModule)
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
    component: BlogArticlePage
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
  {
    path: 'site-search/:word',
    loadChildren: () => import('../../../../shared/modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('../teenagers/subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'coach',
    loadChildren: () => import('../teenagers/coach/coach.module').then(m => m.CoachModule)
  },
  {
    path: 'daily-practise/:id',
    loadChildren: () => import('../../../../shared/component/daily-practice/daily-practice.module').then(m => m.DailyPracticePageModule)
  },
  {
    path: 'refer-friend',
    loadChildren: () => import('../../../../shared/component/refer-friend/refer-friend.module').then(m => m.ReferFriendPageModule)
  },
  {
    path: 'treesisters',
    loadChildren: () => import('../../../../shared/component/treesisters/treesisters.module').then(m => m.TreesistersPageModule)
  },
  {
    path: 'intro-happierme',
    loadChildren: () => import('../../../../shared/component/intro-happierme/intro-happierme.module').then(m => m.IntroHappiermePageModule)
  },
  {
    path: 'hwp-premium-congratulations',
    loadChildren: () => import('../../../../shared/component/hwp-premium-congratulations/hwp-premium-congratulations.module').then(m => m.HwpPremiumCongratulationsPageModule)
  },
  {
    path: "journal/:TopicName",
    loadChildren: () => import('../../../../shared/component/guided-questions/introduction/introduction.module').then(m => m.IntroductionPageModule),
    pathMatch: "full"
  },
  {
    path: 'journal',
    loadChildren: () => import('../../../../shared/component/guided-questions/guided-questions.module').then(m => m.GuidedQuestionsModule)
  },
  {
    path: 'guidedquestions',
    loadChildren: () => import('../../../../shared/component/guided-questions/questions/questions.module').then(m => m.QuestionsPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('../../../../shared/component/note/note.module').then(m => m.NotePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('../../../../shared/component/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('../../../../shared/component/help-support/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('../../../../shared/component/help-support/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('../../../../shared/component/help-support/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('../../../../shared/component/help-support/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'cookies-policy',
    loadChildren: () => import('../../../../shared/component/help-support/cookie-policy/cookie-policy.module').then( m => m.CookiePolicyPageModule)
  },
  {
    path: 'help-support',
    loadChildren: () => import('../../../../shared/component/help-support/help-support.module').then(m => m.HelpSupportModule)
  },
  {
    path: 'awareness-exercises-transcript',
    loadChildren: () => import('./awareness-exercises-transcript/awareness-exercises-transcript.module').then( m => m.AwarenessExercisesTranscriptPageModule)
  },
  {
    path: 'daily-checkin',
    loadChildren: () => import('../../../../shared/component/daily-checkin-landing/daily-checkin-landing.module').then( m => m.DailyCheckInLandingPageModule)
  },
  {
    path: 'daily-checkin-save',
    loadChildren: () => import('../../../../shared/component/daily-check-note-save/daily-check-note-save.module').then( m => m.DailyCheckinNoteSavePageModule)
  },
  {
    path: 'redeem-subscription',
    loadChildren: () => import('../../../../shared/component/redeem-subscription/redeem-subscription/redeem-subscription.module').then(m => m.RedeemSubscriptionPageModule)
  },
  {
    path: 'redeem-congratulation',
    loadChildren: () => import('../../../../shared/component/redeem-subscription/redeem-congratulation/redeem-congratulation.module').then(m => m.RedeemCongratulationPageModule)
  },
  {
    path: 'redeem-subscription-landing',
    loadChildren: () => import('../../../../shared/component/redeem-subscription/redeem-subscription-landing/redeem-subscription-landing.module').then( m => m.RedeemSubscriptionLandingPageModule)
  },
  {
    path: 'redeem-gift-card',
    loadChildren: () => import('../../../../shared/component/redeem-subscription/redeem-subscription-landing/redeem-subscription-landing.module').then( m => m.RedeemSubscriptionLandingPageModule)
  },
  {
    path: 'newsletter-signup',
    component: NewsletterComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenagersRoutingModule { }
