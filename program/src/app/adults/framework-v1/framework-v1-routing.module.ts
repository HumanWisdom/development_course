import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing-s2/landing-s2.module').then( m => m.LandingS2PageModule)
  },
  {
    path: 'landing-s2',
    loadChildren: () => import('./landing-s2/landing-s2.module').then( m => m.LandingS2PageModule)
  },
  {
    path: 'forum-landing',
    loadChildren: () => import('./forum-landing/forum-landing.module').then( m => m.ForumLandingPageModule)
  },
  {
    path: 'forum-thread',
    loadChildren: () => import('./forum-thread/forum-thread.module').then( m => m.ForumThreadPageModule)
  },
  {
    path: 'forum-thread-reply',
    loadChildren: () => import('./forum-thread-reply/forum-thread-reply.module').then( m => m.ForumThreadReplyPageModule)
  },
  {
    path: 'forum-thread-start-new',
    loadChildren: () => import('./forum-thread-start-new/forum-thread-start-new.module').then( m => m.ForumThreadStartNewPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'screen-progress-bar',
    loadChildren: () => import('./screen-progress-bar/screen-progress-bar.module').then( m => m.ScreenProgressBarPageModule)
  },
  {
    path: 'toc-resume',
    loadChildren: () => import('./toc-resume/toc-resume.module').then( m => m.TocResumePageModule)
  },
  {
    path: 'nature-of-i-s01',
    loadChildren: () => import('./nature-of-i-s01/nature-of-i-s01.module').then( m => m.NatureOfIS01PageModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then( m => m.TestimonialsPageModule)
  },
  {
    path: 'nature-of-i-s02',
    loadChildren: () => import('./nature-of-i-s02/nature-of-i-s02.module').then( m => m.NatureOfIS02PageModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
  },
  {
    path: 'webpage-landing-s01',
    loadChildren: () => import('./webpage-landing-s01/webpage-landing-s01.module').then( m => m.WebpageLandingS01PageModule)
  }, 
  {
    path: 'podcast-toc',
    loadChildren: () => import('./podcast-toc/podcast-toc.module').then( m => m.PodcastTocPageModule)
  },
  {
    path: 'podcast-start',
    loadChildren: () => import('./podcast-start/podcast-start.module').then( m => m.PodcastStartPageModule)
  },
  {
    path: 'podcast-resume',
    loadChildren: () => import('./podcast-resume/podcast-resume.module').then( m => m.PodcastResumePageModule)
  },
  {
    path: 'webpage-landing-s02',
    loadChildren: () => import('./webpage-landing-s02/webpage-landing-s02.module').then( m => m.WebpageLandingS02PageModule)
  },
  {
    path: 'free-limit',
    loadChildren: () => import('./free-limit/free-limit.module').then( m => m.FreeLimitPageModule)
  },
  {
    path: 'subscription-s01-v02',
    loadChildren: () => import('./subscription-s01-v02/subscription-s01-v02.module').then( m => m.SubscriptionS01V02PageModule)
  },
  {
    path: 'subscription-s02-v02',
    loadChildren: () => import('./subscription-s02-v02/subscription-s02-v02.module').then( m => m.SubscriptionS02V02PageModule)
  },
  {
    path: 'subscription-s03-v02',
    loadChildren: () => import('./subscription-s03-v02/subscription-s03-v02.module').then( m => m.SubscriptionS03V02PageModule)
  },
  {
    path: 'subscription-s04-v02',
    loadChildren: () => import('./subscription-s04-v02/subscription-s04-v02.module').then( m => m.SubscriptionS04V02PageModule)
  },
  {
    path: 'subscription-s05-v02',
    loadChildren: () => import('./subscription-s05-v02/subscription-s05-v02.module').then( m => m.SubscriptionS05V02PageModule)
  },
  {
    path: 'subscription-s06-v02',
    loadChildren: () => import('./subscription-s06-v02/subscription-s06-v02.module').then( m => m.SubscriptionS06V02PageModule)
  },
  {
    path: 'subscription-s07-v02',
    loadChildren: () => import('./subscription-s07-v02/subscription-s07-v02.module').then( m => m.SubscriptionS07V02PageModule)
  },
  {
    path: 'subscription-s08-v02',
    loadChildren: () => import('./subscription-s08-v02/subscription-s08-v02.module').then( m => m.SubscriptionS08V02PageModule)
  },
  {
    path: 'subscription-s09-v02',
    loadChildren: () => import('./subscription-s09-v02/subscription-s09-v02.module').then( m => m.SubscriptionS09V02PageModule)
  },
  {
    path: 'subscription-s10-v02',
    loadChildren: () => import('./subscription-s10-v02/subscription-s10-v02.module').then( m => m.SubscriptionS10V02PageModule)
  }, 
  {
    path: 'toc-header-s01',
    loadChildren: () => import('./toc-header-s01/toc-header-s01.module').then( m => m.TocHeaderS01PageModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'profile-upload',
    loadChildren: () => import('./profile-upload/profile-upload.module').then( m => m.ProfileUploadPageModule)
  },
  {
    path: 'profile-uploaded',
    loadChildren: () => import('./profile-uploaded/profile-uploaded.module').then( m => m.ProfileUploadedPageModule)
  },
  {
    path: 'journal-s01',
    loadChildren: () => import('./journal-s01/journal-s01.module').then( m => m.JournalS01PageModule)
  },
  {
    path: 'refer-friend',
    loadChildren: () => import('./refer-friend/refer-friend.module').then( m => m.ReferFriendPageModule)
  },
  {
    path: 'hamburger',
    loadChildren: () => import('./hamburger/hamburger.module').then( m => m.HamburgerPageModule)
  },
  {
    path: 'login-signup',
    loadChildren: () => import('./login-signup/login-signup.module').then( m => m.LoginSignupPageModule)
  },
  {
    path: 'login-signup-splash',
    loadChildren: () => import('./login-signup-splash/login-signup-splash.module').then( m => m.LoginSignupSplashPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'tree-planting-program',
    loadChildren: () => import('./tree-planting-program/tree-planting-program.module').then( m => m.TreePlantingProgramPageModule)
  },
  {
    path: 'subscription-s01-v03',
    loadChildren: () => import('./subscription-s01-v03/subscription-s01-v03.module').then( m => m.SubscriptionS01V03PageModule)
  },
  {
    path: 'subscription-s02-v03',
    loadChildren: () => import('./subscription-s02-v03/subscription-s02-v03.module').then( m => m.SubscriptionS02V03PageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
  {
    path: 'cookie-policy',
    loadChildren: () => import('./cookie-policy/cookie-policy.module').then( m => m.CookiePolicyPageModule)
  },
  {
    path: 'hwp-project',
    loadChildren: () => import('./hwp-project/hwp-project.module').then( m => m.HwpProjectPageModule)
  },
  {
    path: 'subscription-payment',
    loadChildren: () => import('./subscription-payment/subscription-payment.module').then( m => m.SubscriptionPaymentPageModule)
  },
  {
    path: 'popup-s01',
    loadChildren: () => import('./popup-s01/popup-s01.module').then( m => m.PopupS01PageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'subscription-s01-v04',
    loadChildren: () => import('./subscription-s01-v04/subscription-s01-v04.module').then( m => m.SubscriptionS01V04PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworkV1RoutingModule { }
