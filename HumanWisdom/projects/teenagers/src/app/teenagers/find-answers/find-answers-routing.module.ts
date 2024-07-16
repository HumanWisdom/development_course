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
    path: 'why-do-i-a01',
    loadChildren: () => import('./why-do-i-a01/why-do-i-a01.module').then( m => m.WhyDoIA01PageModule)
  },
  {
    path: 'why-do-i-a02',
    loadChildren: () => import('./why-do-i-a02/why-do-i-a02.module').then( m => m.WhyDoIA02PageModule)
  },
  {
    path: 'why-do-i-a03',
    loadChildren: () => import('./why-do-i-a03/why-do-i-a03.module').then( m => m.WhyDoIA03PageModule)
  },
  {
    path: 'why-do-i-a04',
    loadChildren: () => import('./why-do-i-a04/why-do-i-a04.module').then( m => m.WhyDoIA04PageModule)
  },
  {
    path: 'why-do-i-a05',
    loadChildren: () => import('./why-do-i-a05/why-do-i-a05.module').then( m => m.WhyDoIA05PageModule)
  },
  {
    path: 'why-do-i-a06',
    loadChildren: () => import('./why-do-i-a06/why-do-i-a06.module').then( m => m.WhyDoIA06PageModule)
  },
  {
    path: 'why-do-i-a07',
    loadChildren: () => import('./why-do-i-a07/why-do-i-a07.module').then( m => m.WhyDoIA07PageModule)
  },
  {
    path: 'why-do-i-a08',
    loadChildren: () => import('./why-do-i-a08/why-do-i-a08.module').then( m => m.WhyDoIA08PageModule)
  },
  {
    path: 'why-do-i-a09',
    loadChildren: () => import('./why-do-i-a09/why-do-i-a09.module').then( m => m.WhyDoIA09PageModule)
  },
  {
    path: 'why-do-i-a10',
    loadChildren: () => import('./why-do-i-a10/why-do-i-a10.module').then( m => m.WhyDoIA10PageModule)
  },
  {
    path: 'why-do-i-a11',
    loadChildren: () => import('./why-do-i-a11/why-do-i-a11.module').then( m => m.WhyDoIA11PageModule)
  },
  {
    path: 'why-do-i-a12',
    loadChildren: () => import('./why-do-i-a12/why-do-i-a12.module').then( m => m.WhyDoIA12PageModule)
  },
  {
    path: 'why-do-i-a13',
    loadChildren: () => import('./why-do-i-a13/why-do-i-a13.module').then( m => m.WhyDoIA13PageModule)
  },
  {
    path: 'why-do-i-a14',
    loadChildren: () => import('./why-do-i-a14/why-do-i-a14.module').then( m => m.WhyDoIA14PageModule)
  },
  {
    path: 'how-can-i-a01',
    loadChildren: () => import('./how-can-i-a01/how-can-i-a01.module').then( m => m.HowCanIA01PageModule)
  },
  {
    path: 'how-can-i-a02',
    loadChildren: () => import('./how-can-i-a02/how-can-i-a02.module').then( m => m.HowCanIA02PageModule)
  },
  {
    path: 'how-can-i-a03',
    loadChildren: () => import('./how-can-i-a03/how-can-i-a03.module').then( m => m.HowCanIA03PageModule)
  },
  {
    path: 'how-can-i-a04',
    loadChildren: () => import('./how-can-i-a04/how-can-i-a04.module').then( m => m.HowCanIA04PageModule)
  },
  {
    path: 'how-can-i-a05',
    loadChildren: () => import('./how-can-i-a05/how-can-i-a05.module').then( m => m.HowCanIA05PageModule)
  },
  {
    path: 'how-can-i-a06',
    loadChildren: () => import('./how-can-i-a06/how-can-i-a06.module').then( m => m.HowCanIA06PageModule)
  },
  {
    path: 'how-can-i-a07',
    loadChildren: () => import('./how-can-i-a07/how-can-i-a07.module').then( m => m.HowCanIA07PageModule)
  },
  {
    path: 'how-can-i-a08',
    loadChildren: () => import('./how-can-i-a08/how-can-i-a08.module').then( m => m.HowCanIA08PageModule)
  },
  {
    path: 'how-can-i-a09',
    loadChildren: () => import('./how-can-i-a09/how-can-i-a09.module').then( m => m.HowCanIA09PageModule)
  },
  {
    path: 'how-can-i-a10',
    loadChildren: () => import('./how-can-i-a10/how-can-i-a10.module').then( m => m.HowCanIA10PageModule)
  },
  {
    path: 'how-can-i-a11',
    loadChildren: () => import('./how-can-i-a11/how-can-i-a11.module').then( m => m.HowCanIA11PageModule)
  },
  {
    path: 'how-can-i-a12',
    loadChildren: () => import('./how-can-i-a12/how-can-i-a12.module').then( m => m.HowCanIA12PageModule)
  },
  {
    path: 'how-can-i-a13',
    loadChildren: () => import('./how-can-i-a13/how-can-i-a13.module').then( m => m.HowCanIA13PageModule)
  },
  {
    path: 'how-can-i-a14',
    loadChildren: () => import('./how-can-i-a14/how-can-i-a14.module').then( m => m.HowCanIA14PageModule)
  },
  {
    path: 'how-can-i-a15',
    loadChildren: () => import('./how-can-i-a15/how-can-i-a15.module').then( m => m.HowCanIA15PageModule)
  },
  {
    path: 'how-can-i-a16',
    loadChildren: () => import('./how-can-i-a16/how-can-i-a16.module').then( m => m.HowCanIA16PageModule)
  },
  {
    path: 'how-can-i-a17',
    loadChildren: () => import('./how-can-i-a17/how-can-i-a17.module').then( m => m.HowCanIA17PageModule)
  },
  {
    path: 'how-can-i-a18',
    loadChildren: () => import('./how-can-i-a18/how-can-i-a18.module').then( m => m.HowCanIA18PageModule)
  },
  {
    path: 'how-can-i-a19',
    loadChildren: () => import('./how-can-i-a19/how-can-i-a19.module').then( m => m.HowCanIA19PageModule)
  },
  {
    path: 'how-can-i-a01-at',
    loadChildren: () => import('./how-can-i-a01-at/how-can-i-a01-at.module').then( m => m.HowCanIA01AtPageModule)
  },
  {
    path: 'how-can-i-a02-at',
    loadChildren: () => import('./how-can-i-a02-at/how-can-i-a02-at.module').then( m => m.HowCanIA02AtPageModule)
  },
  {
    path: 'how-can-i-a03-at',
    loadChildren: () => import('./how-can-i-a03-at/how-can-i-a03-at.module').then( m => m.HowCanIA03AtPageModule)
  },
  {
    path: 'how-can-i-a04-at',
    loadChildren: () => import('./how-can-i-a04-at/how-can-i-a04-at.module').then( m => m.HowCanIA04AtPageModule)
  },
  {
    path: 'how-can-i-a05-at',
    loadChildren: () => import('./how-can-i-a05-at/how-can-i-a05-at.module').then( m => m.HowCanIA05AtPageModule)
  },
  {
    path: 'how-can-i-a06-at',
    loadChildren: () => import('./how-can-i-a06-at/how-can-i-a06-at.module').then( m => m.HowCanIA06AtPageModule)
  },
  {
    path: 'how-can-i-a07-at',
    loadChildren: () => import('./how-can-i-a07-at/how-can-i-a07-at.module').then( m => m.HowCanIA07AtPageModule)
  },
  {
    path: 'how-can-i-a08-at',
    loadChildren: () => import('./how-can-i-a08-at/how-can-i-a08-at.module').then( m => m.HowCanIA08AtPageModule)
  },
  {
    path: 'how-can-i-a09-at',
    loadChildren: () => import('./how-can-i-a09-at/how-can-i-a09-at.module').then( m => m.HowCanIA09AtPageModule)
  },
  {
    path: 'how-can-i-a10-at',
    loadChildren: () => import('./how-can-i-a10-at/how-can-i-a10-at.module').then( m => m.HowCanIA10AtPageModule)
  },
  {
    path: 'how-can-i-a11-at',
    loadChildren: () => import('./how-can-i-a11-at/how-can-i-a11-at.module').then( m => m.HowCanIA11AtPageModule)
  },
  {
    path: 'how-can-i-a12-at',
    loadChildren: () => import('./how-can-i-a12-at/how-can-i-a12-at.module').then( m => m.HowCanIA12AtPageModule)
  },
  {
    path: 'how-can-i-a13-at',
    loadChildren: () => import('./how-can-i-a13-at/how-can-i-a13-at.module').then( m => m.HowCanIA13AtPageModule)
  },
  {
    path: 'how-can-i-a14-at',
    loadChildren: () => import('./how-can-i-a14-at/how-can-i-a14-at.module').then( m => m.HowCanIA14AtPageModule)
  },
  {
    path: 'how-can-i-a15-at',
    loadChildren: () => import('./how-can-i-a15-at/how-can-i-a15-at.module').then( m => m.HowCanIA15AtPageModule)
  },
  {
    path: 'how-can-i-a16-at',
    loadChildren: () => import('./how-can-i-a16-at/how-can-i-a16-at.module').then( m => m.HowCanIA16AtPageModule)
  },
  {
    path: 'how-can-i-a17-at',
    loadChildren: () => import('./how-can-i-a17-at/how-can-i-a17-at.module').then( m => m.HowCanIA17AtPageModule)
  },
  {
    path: 'how-can-i-a18-at',
    loadChildren: () => import('./how-can-i-a18-at/how-can-i-a18-at.module').then( m => m.HowCanIA18AtPageModule)
  },
  {
    path: 'how-can-i-a19-at',
    loadChildren: () => import('./how-can-i-a19-at/how-can-i-a19-at.module').then( m => m.HowCanIA19AtPageModule)
  },
  {
    path: 'why-do-i-a01-at',
    loadChildren: () => import('./why-do-i-a01-at/why-do-i-a01-at.module').then( m => m.WhyDoIA01AtPageModule)
  },
  {
    path: 'why-do-i-a02-at',
    loadChildren: () => import('./why-do-i-a02-at/why-do-i-a02-at.module').then( m => m.WhyDoIA02AtPageModule)
  },
  {
    path: 'why-do-i-a03-at',
    loadChildren: () => import('./why-do-i-a03-at/why-do-i-a03-at.module').then( m => m.WhyDoIA03AtPageModule)
  },
  {
    path: 'why-do-i-a04-at',
    loadChildren: () => import('./why-do-i-a04-at/why-do-i-a04-at.module').then( m => m.WhyDoIA04AtPageModule)
  },
  {
    path: 'why-do-i-a05-at',
    loadChildren: () => import('./why-do-i-a05-at/why-do-i-a05-at.module').then( m => m.WhyDoIA05AtPageModule)
  },
  {
    path: 'why-do-i-a06-at',
    loadChildren: () => import('./why-do-i-a06-at/why-do-i-a06-at.module').then( m => m.WhyDoIA06AtPageModule)
  },
  {
    path: 'why-do-i-a07-at',
    loadChildren: () => import('./why-do-i-a07-at/why-do-i-a07-at.module').then( m => m.WhyDoIA07AtPageModule)
  },
  {
    path: 'why-do-i-a08-at',
    loadChildren: () => import('./why-do-i-a08-at/why-do-i-a08-at.module').then( m => m.WhyDoIA08AtPageModule)
  },
  {
    path: 'why-do-i-a09-at',
    loadChildren: () => import('./why-do-i-a09-at/why-do-i-a09-at.module').then( m => m.WhyDoIA09AtPageModule)
  },
  {
    path: 'why-do-i-a10-at',
    loadChildren: () => import('./why-do-i-a10-at/why-do-i-a10-at.module').then( m => m.WhyDoIA10AtPageModule)
  },
  {
    path: 'why-do-i-a11-at',
    loadChildren: () => import('./why-do-i-a11-at/why-do-i-a11-at.module').then( m => m.WhyDoIA11AtPageModule)
  },
  {
    path: 'why-do-i-a12-at',
    loadChildren: () => import('./why-do-i-a12-at/why-do-i-a12-at.module').then( m => m.WhyDoIA12AtPageModule)
  },
  {
    path: 'why-do-i-a13-at',
    loadChildren: () => import('./why-do-i-a13-at/why-do-i-a13-at.module').then( m => m.WhyDoIA13AtPageModule)
  },
  {
    path: 'why-do-i-a14-at',
    loadChildren: () => import('./why-do-i-a14-at/why-do-i-a14-at.module').then( m => m.WhyDoIA14AtPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindAnswersRoutingModule { }
