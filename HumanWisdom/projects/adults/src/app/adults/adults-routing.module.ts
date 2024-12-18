import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { S3VideoComponent } from '../../../../shared/component/s3-video/s3-video.component';
import { ActiveGuard } from '../active.guard';
import { SingleAudioContentComponent } from '../../../../shared/component/single-audio-content/single-audio-content.component';
import { AudioVideoGuard } from '../audio-video.guard';
import { authLoginGuard } from '../auth-login.guard';
import { BlogIndexPage } from '../../../../shared/component/blogs/blog-index/blog-index.page';
import { BlogArticlePage } from '../../../../shared/component/blogs/blog-article/blog-article.page';
import { IntroGuard } from '../intro.guard';
import { NewsletterComponent } from '../../../../shared/component/newsletter/newsletter.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./adult-dashboard/adult-dashboard.module').then(m => m.AdultDashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'adult-dashboard',
    loadChildren: () => import('./adult-dashboard/adult-dashboard.module').then(m => m.AdultDashboardPageModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'journal',
  //   loadChildren: () => import('./journal/journal.module').then( m => m.JournalPageModule)
  // },
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
    path: 'coursenote',
    loadChildren: () => import('./coursenote/coursenote.module').then(m => m.CoursenotePageModule)
  },
  {
    path: 'wisdom-survey',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../../../shared/component/wisdom-survey/wisdom-survey.module').then(m => m.WisdomSurveyModule)
  },
  {
    path: 'wisdom-stories',
    loadChildren: () => import('./wisdom-stories/wisdom-stories.module').then(m => m.WisdomStoriesModule)
  },
  {
    path: 'discovering-wisdom',
    loadChildren: () => import('./discovering-wisdom/discovering-wisdom.module').then(m => m.DiscoveringWisdomModule)
  },
  {
    path: 'benefits-of-wisdom',
    loadChildren: () => import('./benefits-of-wisdom/benefits-of-wisdom.module').then(m => m.BenefitsOfWisdomModule)
  },
  {
    path: 'five-circles',
    loadChildren: () => import('./five-circles/five-circles.module').then(m => m.FiveCirclesModule)
  },
  {
    path: 'key-ideas',
    loadChildren: () => import('./key-ideas/key-ideas.module').then(m => m.KeyIdeasModule)
  },
  {
    path: 'program-guide',
    loadChildren: () => import('./program-guide/program-guide.module').then(m => m.ProgramGuideModule)
  },
  {
    path: 'get-support-now',
    loadChildren: () => import('./get-support-now/get-support-now.module').then(m => m.GetSupportNowModule)
  },
  {
    path: 'nature',
    loadChildren: () => import('./nature/nature.module').then(m => m.NatureModule)
  },
  {
    path: 'breathing',
    loadChildren: () => import('./breathing/breathing.module').then(m => m.BreathingModule)
  },
  {
    path: 'noticing-thoughts',
    loadChildren: () => import('./noticing-thoughts/noticing-thoughts.module').then(m => m.NoticingThoughtsModule)
  },
  {
    path: 'meditation',
    loadChildren: () => import('./meditation/meditation.module').then(m => m.MeditationModule)
  },
  {
    path: 'guided-meditation',
    loadChildren: () => import('./guided-meditation/guided-meditation.module').then(m => m.GuidedMeditationModule)
  },
  {
    path: 'benefits-of-enquiry',
    loadChildren: () => import('./benefits-of-enquiry/benefits-of-enquiry.module').then(m => m.BenefitsOfEnquiryModule)
  },
  {
    path: 'how-to-begin',
    loadChildren: () => import('./how-to-begin/how-to-begin.module').then(m => m.HowToBeginModule)
  },
  {
    path: 'three-steps-enquiry',
    loadChildren: () => import('./three-steps-enquiry/three-steps-enquiry.module').then(m => m.ThreeStepsEnquiryModule)
  },
  {
    path: 'insight',
    loadChildren: () => import('./insight/insight.module').then(m => m.InsightModule)
  },
  {
    path: 'awareness',
    loadChildren: () => import('./awareness/awareness.module').then(m => m.AwarenessModule)
  },
  {
    path: 'no-judgement',
    loadChildren: () => import('./no-judgement/no-judgement.module').then(m => m.NoJudgementModule)
  },
  {
    path: 'questions-are-key',
    loadChildren: () => import('./questions-are-key/questions-are-key.module').then(m => m.QuestionsAreKeyModule)
  },
  {
    path: 'without-language',
    loadChildren: () => import('./without-language/without-language.module').then(m => m.WithoutLanguageModule)
  },
  {
    path: 'obstacles-enquiry',
    loadChildren: () => import('./obstacles-enquiry/obstacles-enquiry.module').then(m => m.ObstaclesEnquiryModule)
  },
  {
    path: 'conditioning',
    loadChildren: () => import('./conditioning/conditioning.module').then(m => m.ConditioningModule)
  },
  {
    path: 'comparison',
    loadChildren: () => import('./comparison/comparison.module').then(m => m.ComparisonModule)
  },
  {
    path: 'reactive-mind',
    loadChildren: () => import('./reactive-mind/reactive-mind.module').then(m => m.ReactiveMindModule)
  },
  {
    path: 'self-image',
    loadChildren: () => import('./self-image/self-image.module').then(m => m.SelfImageModule)
  },
  {
    path: 'self-interest',
    loadChildren: () => import('./self-interest/self-interest.module').then(m => m.SelfInterestModule)
  },
  {
    path: 'identity',
    loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule)
  },
  {
    path: 'emotional-needs',
    loadChildren: () => import('./emotional-needs/emotional-needs.module').then(m => m.EmotionalNeedsModule)
  },
  {
    path: 'inner-boredom',
    loadChildren: () => import('./inner-boredom/inner-boredom.module').then(m => m.InnerBoredomModule)
  },
  {
    path: 'nature-of-i',
    loadChildren: () => import('./nature-of-i/nature-of-i.module').then(m => m.NatureOfIModule)
  },
  {
    path: 'fear-anxiety',
    loadChildren: () => import('./fear-anxiety/fear-anxiety.module').then(m => m.FearAnxietyModule)
  },
  {
    path: 'pleasure',
    loadChildren: () => import('./pleasure/pleasure.module').then(m => m.PleasureModule)
  },
  {
    path: 'sorrow',
    loadChildren: () => import('./sorrow/sorrow.module').then(m => m.SorrowModule)
  },
  {
    path: 'loneliness',
    loadChildren: () => import('./loneliness/loneliness.module').then(m => m.LonelinessModule)
  },
  {
    path: 'anger',
    loadChildren: () => import('./anger/anger.module').then(m => m.AngerModule)
  },
  {
    path: 'stress',
    loadChildren: () => import('./stress/stress.module').then(m => m.StressModule)
  },
  {
    path: 'relationships',
    loadChildren: () => import('./relationships/relationships.module').then(m => m.RelationshipsModule)
  },
  {
    path: 'love',
    loadChildren: () => import('./love/love.module').then(m => m.LoveModule)
  },
  {
    path: 'criticism',
    loadChildren: () => import('./criticism/criticism.module').then(m => m.CriticismModule)
  },
  {
    path: 'self-esteem',
    loadChildren: () => import('./self-esteem/self-esteem.module').then(m => m.SelfEsteemModule)
  },
  {
    path: 'living-with-peace',
    loadChildren: () => import('./living-with-peace/living-with-peace.module').then(m => m.LivingWithPeaceModule)
  },
  {
    path: 'dealing-with-death',
    loadChildren: () => import('./dealing-with-death/dealing-with-death.module').then(m => m.DealingWithDeathModule)
  },
  {
    path: 'happiness',
    loadChildren: () => import('./happiness/happiness.module').then(m => m.HappinessModule)
  },
  {
    path: 'communication',
    loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule)
  },
  {
    path: 'opinions-beliefs',
    loadChildren: () => import('./opinions-beliefs/opinions-beliefs.module').then(m => m.OpinionsBeliefsModule)
  },
  {
    path: 'success-failure',
    loadChildren: () => import('./success-failure/success-failure.module').then(m => m.SuccessFailureModule)
  },
  {
    path: 'habit-addiction',
    loadChildren: () => import('./habit-addiction/habit-addiction.module').then(m => m.HabitAddictionModule)
  },
  {
    path: 'food-health',
    loadChildren: () => import('./food-health/food-health.module').then(m => m.FoodHealthModule)
  },
  {
    path: 'money',
    loadChildren: () => import('./money/money.module').then(m => m.MoneyModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
  },
  {
    path: 'leadership',
    loadChildren: () => import('./leadership/leadership.module').then(m => m.LeadershipModule)
  },
  {
    path: 'solving-global-problems',
    loadChildren: () => import('./solving-global-problems/solving-global-problems.module').then(m => m.SolvingGlobalProblemsModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then(m => m.BookmarksPageModule)
  },
  {
    path: 'wisdom-shorts',
    loadChildren: () => import('../../../../shared/component/wisdom-shorts/wisdom-shorts.module').then(m => m.WisdomShortsModule)
  },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  // },
  {
    path: 'treesisters',
    loadChildren: () => import('../../../../shared/component/treesisters/treesisters.module').then(m => m.TreesistersPageModule)
  },
  {
    path: 'add-to-home-screen-ios',
    loadChildren: () => import('./add-to-home-screen-ios/add-to-home-screen-ios.module').then(m => m.AddToHomeScreenIosPageModule)
  },
  {
    path: 'daily-practise/:id',
    loadChildren: () => import('../../../../shared/component/daily-practice/daily-practice.module').then(m => m.DailyPracticePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./personalised-for-you-search/personalised-for-you-search.module').then(m => m.PersonalisedForYouSearchPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'help-support',
    loadChildren: () => import('../../../../shared/component/help-support/help-support.module').then(m => m.HelpSupportModule)
  },
  {
    path: 'hwp-project',
    loadChildren: () => import('./hwp-project/hwp-project.module').then(m => m.HwpProjectPageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('../../../../shared/component/podcast/podcast.module').then(m => m.PodcastModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('../adults/subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'podcast/:tag',
    loadChildren: () => import('../../../../shared/component/podcast/podcast.module').then(m => m.PodcastModule),
  },
  {
    path: 'refer-friend',
    loadChildren: () => import('../../../../shared/component/refer-friend/refer-friend.module').then(m => m.ReferFriendPageModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('../../../../shared/component/testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
  },
  {
    path: 'tree-planting-program',
    loadChildren: () => import('./tree-planting-program/tree-planting-program.module').then(m => m.TreePlantingProgramPageModule)
  },
  {
    path: 'test-screen',
    loadChildren: () => import('./test-screen/test-screen.module').then(m => m.TestScreenPageModule)
  },
  {
    path: 'site-search/:word',
    loadChildren: () => import('../../../../shared/modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'newsletter-subscribe',
    loadChildren: () => import('./newsletter-subscribe/newsletter-subscribe.module').then(m => m.NewsletterSubscribePageModule)
  },
  {
    path: 'curated',
    loadChildren: () => import('./curated/curated.module').then(m => m.CuratedModule)
  },
  {
    path: 'events',
    loadChildren: () => import('../../../../shared/component/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'wisdom-shorts/:videolink',
    canActivate:[ActiveGuard],
    component: S3VideoComponent
  },
  {
    path: 'wisdom-shorts/:videolink/:enable',
    canActivate:[AudioVideoGuard],
    component: S3VideoComponent
  },
  {
    path: 'wisdom-shorts/:videolink/:enable/:title',
    canActivate:[AudioVideoGuard],
    component: S3VideoComponent
  },
  {
    path: 'how-can-wisdom-help',
    loadChildren: () => import('./how-can-wisdom-help/how-can-wisdom-help.module').then(m => m.HowCanWisdomHelpModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('../../../../shared/component/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'partnership-webpage',
    loadChildren: () => import('./partnership-webpage/partnership-webpage.module').then(m => m.PartnershipWebpageModule)
  },
  {
    path: 'partnership-app',
    canActivate: [AuthGuard],
    loadChildren: () => import('./partnership-app/partnership-app.module').then(m => m.PartnershipAppModule)
  },
  {
    path: 'humanwisdom-premium',
    loadChildren: () => import('./humanwisdom-premium/humanwisdom-premium.module').then(m => m.HumanwisdomPremiumPageModule)
  },
  {
    path: 'hwp-premium-congratulations',
    loadChildren: () => import('../../../../shared/component/hwp-premium-congratulations/hwp-premium-congratulations.module').then(m => m.HwpPremiumCongratulationsPageModule)
  },
  {
    path: 'partnership-report',
    loadChildren: () => import('./partnership-report/partnership-report.module').then(m => m.PartnershipReportModule)
  },
  {
    path: 'adverts',
    loadChildren: () => import('./adverts/adverts.module').then(m => m.AdvertsPageModule)
  },
  {
    path: 'wisdom-exercise',
    loadChildren: () => import('./wisdom-exercise/wisdom-exercise.module').then(m => m.WisdomExerciseModule)
  },
  {
    path: 'adverts-hwp',
    loadChildren: () => import('./adverts-hwp/adverts-hwp.module').then(m => m.AdvertsHwpPageModule)
  },
  {
    path: 'adverts-hwp-app',
    loadChildren: () => import('./adverts-hwp-app/adverts-hwp-app.module').then(m => m.AdvertsHwpAppPageModule)
  },
  {
    path: 'adverts-about',
    loadChildren: () => import('./adverts-about/adverts-about.module').then(m => m.AdvertsAboutPageModule)
  },
  {
    path: 'adverts-work',
    loadChildren: () => import('./adverts-work/adverts-work.module').then(m => m.AdvertsWorkPageModule)
  },
  {
    path: 'adverts-student',
    loadChildren: () => import('./adverts-student/adverts-student.module').then(m => m.AdvertsStudentPageModule)
  },
  {
    path: 'audio-meditation',
    loadChildren: () => import('../../../../shared/component/audio-meditation/audio-meditation.module').then(m => m.AudioMeditationModule)
  },
  {
    path: 'bullying',
    loadChildren: () => import('./bullying/bullying.module').then(m => m.BullyingModule)
  },
  {
    path: 'making-better-decisions',
    loadChildren: () => import('./making-better-decisions/making-better-decisions.module').then(m => m.MakingBetterDecisionsModule)
  },
  {
    path: 'give-the-gift-of-wisdom',
    loadChildren: () => import('./give-the-gift-of-wisdom/give-the-gift-of-wisdom.module').then(m => m.GiveTheGiftOfWisdomPageModule)
  },
  {
    path: 'contact-coach',
    loadChildren: () => import('./contact-coach/contact-coach.module').then(m => m.ContactCoachPageModule)
  },
  {
    path:'gpay',
    loadChildren:() =>import('./gpay/gpay.module').then(m=>m.GpayModule)
  },
  {
    path: 'external-approval',
    loadChildren: () => import('./external-approval/external-approval.module').then(m => m.ExternalApprovalModule)
  },
  {
    path: 'dealing-with-depression',
    loadChildren: () => import('./dealing-with-depression/dealing-with-depression.module').then(m => m.DealingWithDepressionModule)
  },
  {
    path: 'diversity-and-inclusion',
    loadChildren: () => import('./diversity-and-inclusion/diversity-and-inclusion.module').then(m=>m.DiversityAndInclusionModule)
  },
  {
    path: 'repeat-user',
    loadChildren: () => import('../../../../shared/component/repeat-user/repeat-user.module').then( m => m.RepeatUserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'feel-better-now',
    loadChildren: () => import('../../../../shared/component/feel-better-now/feel-better-now.module').then( m => m.FeelBetterNowModule),
  },
  {
    path: 'pathway',
    loadChildren: () => import('./pathway/pathway.module').then( m => m.PathwayModule)
  },
  {
    path: 'select-a-topic-to-explore',
    loadChildren: () => import('./select-a-topic-to-explore/select-a-topic-to-explore.module').then( m => m.SelectATopicToExplorePageModule)
  },
  {
    path: 'find-inspiration',
    loadChildren: () => import('./find-inspiration/find-inspiration.module').then( m => m.FindInspirationPageModule)
  },
  {
    path: 'change-topic',
    loadChildren: () => import('./change-topic/change-topic.module').then( m => m.ChangeTopicPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'find-answers/:url',
    loadChildren: () => import('./find-answers/find-answers.module').then( m => m.FindAnswersModule)
  },
  {
    path:'change-topic',
    loadChildren: () => import('./change-topic/change-topic.module').then(m=>m.ChangeTopicPageModule)
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
    path: 'awareness-exercises-transcript',
    loadChildren: () => import('./awareness-exercises-transcript/awareness-exercises-transcript.module').then( m => m.AwarenessExercisesTranscriptPageModule)
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
    path: 'intro-happierme',
    loadChildren: () => import('../../../../shared/component/intro-happierme/intro-happierme.module').then( m => m.IntroHappiermePageModule)
  },
  {
    path: 'kindness',
    loadChildren: () => import('./kindness/kindness.module').then(m => m.KindnessModule)
  },
  {
    path: 'social-media',
    loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaModule)
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then(m => m.CafeModule)
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
    path: 'blog-static',
    loadChildren: () => import('./blog-static/blog-static.module').then( m => m.BlogStaticPageModule)
  },
  {
    path: 'splash-options',
    loadChildren: () => import('./splash-options/splash-options.module').then( m => m.SplashOptionsPageModule)
  },
  {
    path: 'coach',
    loadChildren: () => import('./coach/coach.module').then( m => m.CoachModule)
  },
  {
    path: 'wisdom-points',
    loadChildren: () => import('./wisdom-points/wisdom-points.module').then( m => m.WisdomPointsModule)
  },
  {
    path: "course/onboarding",
    redirectTo:"onboarding"
  },
  {
    path: "onboarding",
    loadChildren: () => import("../onboarding/onboarding.module").then(m => m.OnboardingModule)
  },
  {
    path: "course/forum",
    redirectTo:"forum"
  },
  {
    path: "forum",
    loadChildren: () => import("../forum/framework-v1.module").then(m => m.FrameworkV1Module)
  },
  {
    path: "course/coach",
    redirectTo:"coach"
  },
  {
    path: "coach",
    loadChildren: () => import("./coach/coach.module").then(m => m.CoachModule)
  },
  {
    path: "course/intro",
    redirectTo:"intro"
  },
  {
    path: "intro",
    canActivate:[IntroGuard],
    loadChildren: () => import("../introductory/introductory.module").then(m => m.IntroductoryModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('../adults/adverts-hwp-app/adverts-hwp-app.module').then(m => m.AdvertsHwpAppPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('../adults/adverts-about/adverts-about.module').then(m => m.AdvertsAboutPageModule)
  },
  {
    path: 'partnership-program',
    loadChildren: () => import('../adults/partnership-webpage/partnership-index/partnership-index.module').then( m => m.PartnershipIndexPageModule)
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
    path: 'daily-checkin',
    loadChildren: () => import('../../../../shared/component/daily-checkin-landing/daily-checkin-landing.module').then( m => m.DailyCheckInLandingPageModule)
  },
  {
    path: 'daily-checkin-save',
    loadChildren: () => import('../../../../shared/component/daily-check-note-save/daily-check-note-save.module').then( m => m.DailyCheckinNoteSavePageModule)
  },
  {
    path: 'give-the-gift-of-wisdom',
    loadChildren: () => import('../adults/give-the-gift-of-wisdom/give-the-gift-of-wisdom.module').then(m => m.GiveTheGiftOfWisdomPageModule)
  },
  {
    path: 'wisdom-for-work',
    loadChildren: () => import('../adults/adverts-work/adverts-work.module').then(m => m.AdvertsWorkPageModule)
  },
  {
    path: 'wisdom-for-students',
    loadChildren: () => import('../adults/adverts-student/adverts-student.module').then(m => m.AdvertsStudentPageModule)
  },
  {
    path: 'log-in',
    canActivate: [authLoginGuard],
    loadChildren: () => import('../onboarding/login-signup/login-signup.module').then(m => m.LoginSignupPageModule)
  },
  {
    path: 'partnership-app',
    canActivate: [AuthGuard],
    loadChildren: () => import('../adults/partnership-app/partnership-app.module').then(m => m.PartnershipAppModule)
  },
  {
    path:'blogs',
    component:BlogIndexPage
  },
  {
    path: 'blog-article',
    // canActivate:[ActiveGuard],
    component:BlogArticlePage
  },
  {
    path: 'note-add-smiley',
    loadChildren: () => import('./note-add-smiley/note-add-smiley.module').then( m => m.NoteAddSmileyPageModule)
  },
  {
    path: 'note-add',
    loadChildren: () => import('./note-add/note-add.module').then( m => m.NoteAddPageModule)
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
export class AdultsRoutingModule { }
