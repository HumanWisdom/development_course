import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../../../shared/forum/forum-landing/forum-landing.module').then( m => m.ForumLandingPageModule)
  },
 
  {
    path: 'forum-landing',
    loadChildren: () => import('../../../../../shared/forum/forum-landing/forum-landing.module').then( m => m.ForumLandingPageModule)
  },
  {
    path: 'forum-thread/:sharedPostId',
    loadChildren: () => import('../../../../../shared/forum/forum-thread/forum-thread.module').then( m => m.ForumThreadPageModule)
  },
  {
    path: 'forum-thread-start-new',
    loadChildren: () => import('../../../../../shared/forum/forum-thread-start-new/forum-thread-start-new.module').then( m => m.ForumThreadStartNewPageModule)
  },
  {
    path: 'profile/:userId',
    loadChildren: () => import('../../../../../shared/forum/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworkV1RoutingModule { }
