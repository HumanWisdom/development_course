import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S36000Page } from './s36000/s36000.page';
import { S36001Page } from './s36001/s36001.page';
import { S36002Page } from './s36002/s36002.page';
import { S36003Page } from './s36003/s36003.page';
import { S36004Page } from './s36004/s36004.page';
import { S36005Page } from './s36005/s36005.page';
import { S36005tPage } from './s36005t/s36005t.page';
import { S36006Page } from './s36006/s36006.page';
import { S36007Page } from './s36007/s36007.page';
import { S36008Page } from './s36008/s36008.page';
import { S36009Page } from './s36009/s36009.page';
import { S36009tPage } from './s36009t/s36009t.page';
import { S36010Page } from './s36010/s36010.page';
import { S36011Page } from './s36011/s36011.page';
import { S36012Page } from './s36012/s36012.page';
import { S36013Page } from './s36013/s36013.page';
import { S36014Page } from './s36014/s36014.page';
import { S36014tPage } from './s36014t/s36014t.page';
import { S36015Page } from './s36015/s36015.page';
import { S36016Page } from './s36016/s36016.page';
import { S36017Page } from './s36017/s36017.page';
import { S36018Page } from './s36018/s36018.page';
import { S36019Page } from './s36019/s36019.page';
import { S36020Page } from './s36020/s36020.page';
import { S36021Page } from './s36021/s36021.page';
import { S36021tPage } from './s36021t/s36021t.page';
import { S36022Page } from './s36022/s36022.page';
import { S36023Page } from './s36023/s36023.page';
import { S36024Page } from './s36024/s36024.page';
import { S36025Page } from './s36025/s36025.page';
import { S36026Page } from './s36026/s36026.page';
import { S36027Page } from './s36027/s36027.page';

const routes: Routes = [
  {
    path: '',    
     canActivate:[ActiveGuard],  
    component: S36000Page,
  },  
  {
    path: 's36000',
     canActivate:[ActiveGuard],  
    component: S36000Page,
  },
  {
    path: 's36001',
     canActivate:[ActiveGuard],  
    component: S36001Page,
  },
  {
    path: 's36002',
     canActivate:[ActiveGuard],  
    component: S36002Page,
  },
  {
    path: 's36003',
     canActivate:[ActiveGuard],  
    component: S36003Page,
  },
  {
    path: 's36004',
     canActivate:[ActiveGuard],  
    component: S36004Page,
  },
  {
    path: 's36005',
     canActivate:[ActiveGuard],  
    component: S36005Page,
  },
  {
    path: 's36005t',
     canActivate:[ActiveGuard],  
    component: S36005tPage,
  },
  {
    path: 's36006',
     canActivate:[ActiveGuard],  
    component: S36006Page,
  },
  {
    path: 's36007',
     canActivate:[ActiveGuard],  
    component: S36007Page,
  },
  {
    path: 's36008',
     canActivate:[ActiveGuard],  
    component: S36008Page,
  },
  {
    path: 's36009',
     canActivate:[ActiveGuard],  
    component: S36009Page,
  },
  {
    path: 's36009t',
     canActivate:[ActiveGuard],  
    component: S36009tPage,
  },
  {
    path: 's36010',
     canActivate:[ActiveGuard],  
    component: S36010Page,
  },
  {
    path: 's36011',
     canActivate:[ActiveGuard],  
    component: S36011Page,
  },
  {
    path: 's36012',
     canActivate:[ActiveGuard],  
    component: S36012Page,
  },
  {
    path: 's36013',
     canActivate:[ActiveGuard],  
    component: S36013Page,
  },
  {
    path: 's36014',
     canActivate:[ActiveGuard],  
    component: S36014Page,
  },
  {
    path: 's36014t',
     canActivate:[ActiveGuard],  
    component: S36014tPage,
  },
  {
    path: 's36015',
     canActivate:[ActiveGuard],  
    component: S36015Page,
  },
  {
    path: 's36016',
     canActivate:[ActiveGuard],  
    component: S36016Page,
  },
  {
    path: 's36017',
     canActivate:[ActiveGuard],  
    component: S36017Page,
  },
  {
    path: 's36018',
     canActivate:[ActiveGuard],  
    component: S36018Page,
  },
  {
    path: 's36019',
     canActivate:[ActiveGuard],  
    component: S36019Page,
  },
  {
    path: 's36020',
     canActivate:[ActiveGuard],  
    component: S36020Page,
  },
  {
    path: 's36021',
     canActivate:[ActiveGuard],  
    component: S36021Page,
  },
  {
    path: 's36021t',
     canActivate:[ActiveGuard],  
    component: S36021tPage,
  },
  {
    path: 's36022',
     canActivate:[ActiveGuard],  
    component: S36022Page,
  },
  {
    path: 's36023',
     canActivate:[ActiveGuard],  
    component: S36023Page,
  },
  {
    path: 's36024',
     canActivate:[ActiveGuard],  
    component: S36024Page,
  },
  {
    path: 's36025',
     canActivate:[ActiveGuard],  
    component: S36025Page,
  },
  {
    path: 's36026',
     canActivate:[ActiveGuard],  
    component: S36026Page,
  },
  {
    path: 's36027',
     canActivate:[ActiveGuard],  
    component: S36027Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowToBeginRoutingModule { }
