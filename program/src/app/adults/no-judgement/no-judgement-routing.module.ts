import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S40000Page } from './s40000/s40000.page';
import { S40001Page } from './s40001/s40001.page';
import { S40002Page } from './s40002/s40002.page';
import { S40003Page } from './s40003/s40003.page';
import { S40003tPage } from './s40003t/s40003t.page';
import { S40004Page } from './s40004/s40004.page';
import { S40005Page } from './s40005/s40005.page';
import { S40005tPage } from './s40005t/s40005t.page';
import { S40006Page } from './s40006/s40006.page';
import { S40006tPage } from './s40006t/s40006t.page';
import { S40007Page } from './s40007/s40007.page';
import { S40008Page } from './s40008/s40008.page';
import { S40009Page } from './s40009/s40009.page';
import { S40010Page } from './s40010/s40010.page';
import { S40011Page } from './s40011/s40011.page';
import { S40012Page } from './s40012/s40012.page';
import { S40012tPage } from './s40012t/s40012t.page';
import { S40013Page } from './s40013/s40013.page';
import { S40014Page } from './s40014/s40014.page';
import { S40015Page } from './s40015/s40015.page';
import { S40015p1Page } from './s40015p1/s40015p1.page';
import { S40016Page } from './s40016/s40016.page';

const routes: Routes = [
  {
    path: '',    
    canActivate:[ActiveGuard],  
    component: S40000Page,
  },  
  {
    path: 's40000',
    canActivate:[ActiveGuard],  
    component: S40000Page,
  },
  {
    path: 's40001',
    canActivate:[ActiveGuard],  
    component: S40001Page,
  },
  {
    path: 's40002',
    canActivate:[ActiveGuard],  
    component: S40002Page,
  },
  {
    path: 's40003',
    canActivate:[ActiveGuard],  
    component: S40003Page,
  },
  {
    path: 's40003t',
    canActivate:[ActiveGuard],  
    component: S40003tPage,
  },
  {
    path: 's40004',
    canActivate:[ActiveGuard],  
    component: S40004Page,
  },
  {
    path: 's40005',
    canActivate:[ActiveGuard],  
    component: S40005Page,
  },
  {
    path: 's40005t',
    canActivate:[ActiveGuard],  
    component: S40005tPage,
  },
  {
    path: 's40006',
    canActivate:[ActiveGuard],  
    component: S40006Page,
  },
  {
    path: 's40006t',
    canActivate:[ActiveGuard],  
    component: S40006tPage,
  },
  {
    path: 's40007',
    canActivate:[ActiveGuard],  
    component: S40007Page,
  },
  {
    path: 's40008',
    canActivate:[ActiveGuard],  
    component: S40008Page,
  },
  {
    path: 's40009',
    canActivate:[ActiveGuard],  
    component: S40009Page,
  },
  {
    path: 's40010',
    canActivate:[ActiveGuard],  
    component: S40010Page,
  },
  {
    path: 's40011',
    canActivate:[ActiveGuard],  
    component: S40011Page,
  },
  {
    path: 's40012',
    canActivate:[ActiveGuard],  
    component: S40012Page,
  },
  {
    path: 's40012t',
    canActivate:[ActiveGuard],  
    component: S40012tPage,
  },
  {
    path: 's40013',
    canActivate:[ActiveGuard],  
    component: S40013Page,
  },
  {
    path: 's40014',
    canActivate:[ActiveGuard],  
    component: S40014Page,
  },
  {
    path: 's40015',
    canActivate:[ActiveGuard],  
    component: S40015Page,
  },
  {
    path: 's40015p1',
    canActivate:[ActiveGuard],  
    component: S40015p1Page,
  },
  {
    path: 's40016',
    canActivate:[ActiveGuard],  
    component: S40016Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoJudgementRoutingModule { }
