import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuratedRoutingModule { }
