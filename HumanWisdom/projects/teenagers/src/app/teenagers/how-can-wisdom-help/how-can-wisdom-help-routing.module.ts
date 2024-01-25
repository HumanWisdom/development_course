import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S80001Page } from './s80001/s80001.page';
import { S80002Page } from './s80002/s80002.page';
import { S80003Page } from './s80003/s80003.page';
import { S80004Page } from './s80004/s80004.page';
import { S80005Page } from './s80005/s80005.page';
import { S80006Page } from './s80006/s80006.page';
import { S80007Page } from './s80007/s80007.page';
import { S80008Page } from './s80008/s80008.page';
import { S80009Page } from './s80009/s80009.page';
import { S80010Page } from './s80010/s80010.page';
import { S80011Page } from './s80011/s80011.page';
import { S80012Page } from './s80012/s80012.page';

const routes: Routes = [
  {
    path: '', 
    canActivate: [ActiveGuard],   
    component: S80001Page,
  },  
  {
    path: 's80001',
    canActivate: [ActiveGuard],
    component: S80001Page,
  },
  {
    path: 's80002',
    canActivate: [ActiveGuard],
    component: S80002Page,
  },
  {
    path: 's80003',
    canActivate: [ActiveGuard],
    component: S80003Page,
  },
  {
    path: 's80004',
    canActivate: [ActiveGuard],
    component: S80004Page,
  },
  {
    path: 's80005',
    canActivate: [ActiveGuard],
    component: S80005Page,
  },
  {
    path: 's80006',
    canActivate: [ActiveGuard],
    component: S80006Page,
  },
  {
    path: 's80007',
    canActivate: [ActiveGuard],
    component: S80007Page,
  },
  {
    path: 's80008',
    canActivate: [ActiveGuard],
    component: S80008Page,
  },
  {
    path: 's80009',
    canActivate: [ActiveGuard],
    component: S80009Page,
  },
  {
    path: 's80010',
    canActivate: [ActiveGuard],
    component: S80010Page,
  },
  {
    path: 's80011',
    canActivate: [ActiveGuard],
    component: S80011Page,
  },
  {
    path: 's80012',
    canActivate: [ActiveGuard],
    component: S80012Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowCanWisdomHelpRoutingModule { }
