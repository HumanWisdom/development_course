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
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuratedRoutingModule { }
