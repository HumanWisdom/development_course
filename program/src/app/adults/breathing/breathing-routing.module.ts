import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S29000Page } from './s29000/s29000.page';
import { S29001Page } from './s29001/s29001.page';
import { S29002Page } from './s29002/s29002.page';
import { S29003Page } from './s29003/s29003.page';
import { S29004Page } from './s29004/s29004.page';
import { S29005Page } from './s29005/s29005.page';
import { S29006Page } from './s29006/s29006.page';
import { S29007Page } from './s29007/s29007.page';
import { S29008Page } from './s29008/s29008.page';
import { S29009Page } from './s29009/s29009.page';
import { S29010Page } from './s29010/s29010.page';

const routes: Routes = [
  {
    path: '',  
    component: S29000Page,
  }, 
  {
    canActivate:[ActiveGuard],
    path: 's29000',    
    component: S29000Page,
  }, 
  {
    canActivate:[ActiveGuard],
    path: 's29001',    
    component: S29001Page,
  }, 
  {
    canActivate:[ActiveGuard],
    path: 's29002',
    component: S29002Page,
  },
  {
    canActivate:[ActiveGuard],
    path: 's29003',
    component: S29003Page,
  },  
  {
    canActivate:[ActiveGuard],
    path: 's29004',
    component: S29004Page,
  },
  {  
    canActivate:[ActiveGuard],
    path: 's29005',
    component: S29005Page,
  },
  {
    canActivate:[ActiveGuard],
    path: 's29006',
    component: S29006Page,
  },
  {
    path: 's29007',
    canActivate:[ActiveGuard],
    component: S29007Page,
  },
  {
    path: 's29008',
    canActivate:[ActiveGuard],
    component: S29008Page,
  },
  { 
    path: 's29009',
    canActivate:[ActiveGuard],
    component: S29009Page,
  },
  {
    path: 's29010',
    canActivate:[ActiveGuard],
    component: S29010Page,
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreathingRoutingModule { }
