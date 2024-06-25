import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'stress',
    loadChildren: () => import('./stress/stress.module').then( m => m.StressPageModule)
  },
  {
    path: 'anxiety',
    loadChildren: () => import('./anxiety/anxiety.module').then( m => m.AnxietyPageModule)
  },
  {
    path: 'anger',
    loadChildren: () => import('./anger/anger.module').then( m => m.AngerPageModule)
  },
  {
    path: 'sorrow-and-loss',
    loadChildren: () => import('./sorrow-and-loss/sorrow-and-loss.module').then( m => m.SorrowAndLossPageModule)
  },
  {
    path: 'relationship-problems',
    loadChildren: () => import('./relationship-problems/relationship-problems.module').then( m => m.RelationshipProblemsPageModule)
  },
  {
    path: 'feeling-upset',
    loadChildren: () => import('./feeling-upset/feeling-upset.module').then( m => m.FeelingUpsetPageModule)
  },
  {
    path: 'loneliness',
    loadChildren: () => import('./loneliness/loneliness.module').then( m => m.LonelinessPageModule)
  },
  {
    path: 'boredom',
    loadChildren: () => import('./boredom/boredom.module').then( m => m.BoredomPageModule)
  },
  {
    path: 'coping-with-illness',
    loadChildren: () => import('./coping-with-illness/coping-with-illness.module').then( m => m.CopingWithIllnessPageModule)
  },
  {
    path: 'depression',
    loadChildren: () => import('./depression/depression.module').then( m => m.DepressionPageModule)
  },
  {
    path: 'stress-at',
    loadChildren: () => import('./stress-at/stress-at.module').then( m => m.StressAtPageModule)
  },
  {
    path: 'anger-at',
    loadChildren: () => import('./anger-at/anger-at.module').then( m => m.AngerAtPageModule)
  },
  {
    path: 'anxiety-at',
    loadChildren: () => import('./anxiety-at/anxiety-at.module').then( m => m.AnxietyAtPageModule)
  },
  {
    path: 'boredom-at',
    loadChildren: () => import('./boredom-at/boredom-at.module').then( m => m.BoredomAtPageModule)
  },
  {
    path: 'coping-with-illness-at',
    loadChildren: () => import('./coping-with-illness-at/coping-with-illness-at.module').then( m => m.CopingWithIllnessAtPageModule)
  },
  {
    path: 'depression-at',
    loadChildren: () => import('./depression-at/depression-at.module').then( m => m.DepressionAtPageModule)
  },
  {
    path: 'feeling-upset-at',
    loadChildren: () => import('./feeling-upset-at/feeling-upset-at.module').then( m => m.FeelingUpsetAtPageModule)
  },
  {
    path: 'loneliness-at',
    loadChildren: () => import('./loneliness-at/loneliness-at.module').then( m => m.LonelinessAtPageModule)
  },
  {
    path: 'relationship-problems-at',
    loadChildren: () => import('./relationship-problems-at/relationship-problems-at.module').then( m => m.RelationshipProblemsAtPageModule)
  },
  {
    path: 'sorrow-and-loss-at',
    loadChildren: () => import('./sorrow-and-loss-at/sorrow-and-loss-at.module').then( m => m.SorrowAndLossAtPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeelBetterNowRoutingModule { }
