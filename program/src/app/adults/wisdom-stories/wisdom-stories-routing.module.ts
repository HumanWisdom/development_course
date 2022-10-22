import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./all-stories/all-stories.module').then( m => m.AllStoriesPageModule)
  },
  {
    path: 'all-stories',
    loadChildren: () => import('./all-stories/all-stories.module').then( m => m.AllStoriesPageModule)
  },
  {
    path: 'view-stories',
    canActivate:[ActiveGuard],  
    loadChildren: () => import('./view-stories/view-stories.module').then( m => m.ViewStoriesPageModule)
  },
  {
    path: 'submit-story',
    loadChildren: () => import('./submit-story/submit-story.module').then( m => m.SubmitStoryPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomStoriesRoutingModule { }
