import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S51000Page } from './s51000/s51000.page';
import { S51001Page } from './s51001/s51001.page';
import { S51002Page } from './s51002/s51002.page';
import { S51003Page } from './s51003/s51003.page';
import { S51004Page } from './s51004/s51004.page';
import { S51005Page } from './s51005/s51005.page';
import { S51006Page } from './s51006/s51006.page';
import { S51006p1Page } from './s51006p1/s51006p1.page';
import { S51006p2Page } from './s51006p2/s51006p2.page';
import { S51006p3Page } from './s51006p3/s51006p3.page';
import { S51006p4Page } from './s51006p4/s51006p4.page';
import { S51006p5Page } from './s51006p5/s51006p5.page';
import { S51006p6Page } from './s51006p6/s51006p6.page';
import { S51006p7Page } from './s51006p7/s51006p7.page';
import { S51012Page } from './s51012/s51012.page';
import { S51013Page } from './s51013/s51013.page';

const routes: Routes = [
  {
    path: '',    
     component: S51000Page,
  }, 
  {
    path: 's51000',    
   canActivate:[ActiveGuard],  
    component: S51000Page,
  },   {

    path: 's51001',
   canActivate:[ActiveGuard],  
    component: S51001Page,
  },
  {
    path: 's51002',
   canActivate:[ActiveGuard],  
    component: S51002Page,
  },  
  {
    path: 's51003',
   canActivate:[ActiveGuard],  
    component: S51003Page,
  },  
  {
    path: 's51004',
   canActivate:[ActiveGuard],  
    component: S51004Page,
  },  
  {
    path: 's51005',
   canActivate:[ActiveGuard],  
    component: S51005Page,
  },  
  {
    path: 's51006',
   canActivate:[ActiveGuard],  
    component: S51006Page,
  },
  {
    path: 's51006p1',
   canActivate:[ActiveGuard],  
    component: S51006p1Page,
  },    
  {
    path: 's51006p2',
   canActivate:[ActiveGuard],  
    component: S51006p2Page,
  },    
  {
    path: 's51012',
   canActivate:[ActiveGuard],  
    component: S51012Page,
  },
  {
    path: 's51013',
   canActivate:[ActiveGuard],  
    component: S51013Page,
  },
  {
    path: 's51006p3',
    canActivate:[ActiveGuard],  
    component: S51006p3Page,
  },
  {
    path: 's51006p4',
    canActivate:[ActiveGuard],  
    component: S51006p4Page,
  },
  {
    path: 's51006p5',
    canActivate:[ActiveGuard],  
    component: S51006p5Page,
  },
  {
    path: 's51006p6',
    canActivate:[ActiveGuard],  
    component: S51006p6Page,
  },
  {
    path: 's51006p7',
    canActivate:[ActiveGuard],  
    component: S51006p7Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidedMeditationRoutingModule { }
