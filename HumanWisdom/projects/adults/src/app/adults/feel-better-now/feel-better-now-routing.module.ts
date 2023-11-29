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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeelBetterNowRoutingModule { }
