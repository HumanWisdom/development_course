import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';


import { S30001Page } from './s30001/s30001.page';
import { S30002Page } from './s30002/s30002.page';
import { S30002tPage } from './s30002t/s30002t.page';
import { S30003Page } from './s30003/s30003.page';
import { S30004Page } from './s30004/s30004.page';
import { S30005Page } from './s30005/s30005.page';
import { S30006Page } from './s30006/s30006.page';
import { S30007Page } from './s30007/s30007.page';

const routes: Routes = [
  {
    path: '',
    component: S30001Page,
  },
  {
    path: 's30001',
    canActivate: [ActiveGuard],
    component: S30001Page,
  },
  {
    path: 's30002',
    canActivate: [ActiveGuard],
    component: S30002Page,
    data: { animation: 'isLeft' }
  },
  {
    path: 's30002t',
    canActivate: [ActiveGuard],
    component: S30002tPage,
    data: { animation: 'isLeft' }
  },
  {
    path: 's30003',
    canActivate: [ActiveGuard],
    component: S30003Page,
    data: { animation: 'isRight' }
  },
  {
    path: 's30004',
    canActivate: [ActiveGuard],
    component: S30004Page,
    data: { animation: 'isLeft' }
  },
  {
    path: 's30005',
    canActivate: [ActiveGuard],
    component: S30005Page,
    data: { animation: 'isRight' }
  },
  {
    path: 's30006',
    canActivate: [ActiveGuard],
    component: S30006Page,
    data: { animation: 'isLeft' }
  },
  {
    path: 's30007',
    canActivate: [ActiveGuard],
    component: S30007Page,
    data: { animation: 'isRight' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticingThoughtsRoutingModule { }
