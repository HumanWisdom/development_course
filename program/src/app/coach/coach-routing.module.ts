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
  {
    path: 'coach-personal-info',
    loadChildren: () => import('./coach-personal-info/coach-personal-info.module').then( m => m.CoachPersonalInfoPageModule)
  },
  {
    path: 'coach-professional-info',
    loadChildren: () => import('./coach-professional-info/coach-professional-info.module').then( m => m.CoachProfessionalInfoPageModule)
  },
  {
    path: 'coach-payment-info',
    loadChildren: () => import('./coach-payment-info/coach-payment-info.module').then( m => m.CoachPaymentInfoPageModule)
  },
  {
    path: 'coach-congratulations',
    loadChildren: () => import('./coach-congratulations/coach-congratulations.module').then( m => m.CoachCongratulationsPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
