import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./coach-introduction/coach-introduction.module').then( m => m.CoachIntroductionPageModule)
  },
  {
    path: 'coach-introduction',
    loadChildren: () => import('./coach-introduction/coach-introduction.module').then( m => m.CoachIntroductionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
