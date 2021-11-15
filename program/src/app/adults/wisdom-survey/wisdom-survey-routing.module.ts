import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',    
    loadChildren: () => import('./wisdom-scale/wisdom-scale.module').then( m => m.WisdomScalePageModule)
  },  
  {
    path: 'wisdom-scale',
    loadChildren: () => import('./wisdom-scale/wisdom-scale.module').then( m => m.WisdomScalePageModule)
  },
  {
    path: 'wisdom-score',
    loadChildren: () => import('./wisdom-score/wisdom-score.module').then( m => m.WisdomScorePageModule)
  },
  {
    path: 'wisdom-survey-insight',
    loadChildren: () => import('./wisdom-survey-insight/wisdom-survey-insight.module').then( m => m.WisdomSurveyInsightModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomSurveyRoutingModule { }
