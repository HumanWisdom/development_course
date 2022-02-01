import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./coach-introduction/coach-introduction.module').then( m => m.CoachIntroductionPageModule)
  // },
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
  {
    path: 'coach-calendar-plugin',
    loadChildren: () => import('./coach-calendar-plugin/coach-calendar-plugin.module').then( m => m.CoachCalendarPluginPageModule)
  },
  {
    path: 'coach-history-date',
    loadChildren: () => import('./coach-history-date/coach-history-date.module').then( m => m.CoachHistoryDatePageModule)
  },
  {
    path: 'coach-history-patient-name',
    loadChildren: () => import('./coach-history-patient-name/coach-history-patient-name.module').then( m => m.CoachHistoryPatientNamePageModule)
  },
  {
    path: 'coach-history-revenue',
    loadChildren: () => import('./coach-history-revenue/coach-history-revenue.module').then( m => m.CoachHistoryRevenuePageModule)
  } ,
  {
    path: 'coach-customer-introduction',
    loadChildren: () => import('./coach-customer-introduction/coach-customer-introduction.module').then( m => m.CoachCustomerIntroductionPageModule)
  },
  {
    path: 'coach-customer-directory',
    loadChildren: () => import('./coach-directory/coach-directory.module').then(m=>m.CoachDirectoryPageModule)
  },
  {
    path: 'coach-appointments',
    loadChildren: () => import('./coach-appointments/coach-appointments.module').then(m=>m.CoachAppointmentsPageModule)
  },
  {
    path: 'coach-appointments-confirmed',
    loadChildren: () => import('./coach-appointment-confirmed/coach-appointment-confirmed.module').then(m=>m.CoachAppointmentConfirmedPageModule)
  },
  {
    path: 'coach-bio/:id',
    loadChildren: () => import('./coach-bio/coach-bio.module').then(m=>m.CoachBioPageModule)
  },
  {
    path: 'coach-directory-filter',
    loadChildren: () => import('./coach-directory-filter/coach-directory-filter.module').then(m=>m.CoachDirectoryFilterPageModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
