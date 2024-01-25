import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S79001Page } from './s79001/s79001.page';
import { S79002Page } from './s79002/s79002.page';
import { S79003Page } from './s79003/s79003.page';
import { S79004Page } from './s79004/s79004.page';
import { S79005Page } from './s79005/s79005.page';
import { S79006Page } from './s79006/s79006.page';
import { S79006tPage } from './s79006t/s79006t.page';
import { S79007Page } from './s79007/s79007.page';
import { S79008Page } from './s79008/s79008.page';
import { S79009Page } from './s79009/s79009.page';
import { S79010Page } from './s79010/s79010.page';
import { S79011Page } from './s79011/s79011.page';
import { S79012Page } from './s79012/s79012.page';
import { S79013Page } from './s79013/s79013.page';
import { S79014Page } from './s79014/s79014.page';
import { S79015Page } from './s79015/s79015.page';
import { S79016Page } from './s79016/s79016.page';
import { S79017Page } from './s79017/s79017.page';
import { S79018Page } from './s79018/s79018.page';
import { S79019Page } from './s79019/s79019.page';
import { S79020Page } from './s79020/s79020.page';
import { S79021Page } from './s79021/s79021.page';
import { S79022Page } from './s79022/s79022.page';
import { S79023Page } from './s79023/s79023.page';
import { S79024Page } from './s79024/s79024.page';
import { S79025Page } from './s79025/s79025.page';
import { S79026Page } from './s79026/s79026.page';
import { S79027Page } from './s79027/s79027.page';
import { S79028Page } from './s79028/s79028.page';

const routes: Routes = [
  {
    path: '',    
    canActivate: [ActiveGuard],
    component: S79001Page,
  },  
  {
    path: 's79001',
    canActivate: [ActiveGuard],
    component: S79001Page,
  },
  {
    path: 's79002',
    canActivate: [ActiveGuard],
    component: S79002Page,
  },
  {
    path: 's79003',
    canActivate: [ActiveGuard],
    component: S79003Page,
  },
  {
    path: 's79004',
    canActivate: [ActiveGuard],
    component: S79004Page,
  },
  {
    path: 's79005',
    canActivate: [ActiveGuard],
    component: S79005Page,
  },
  {
    path: 's79006',
    canActivate: [ActiveGuard],
    component: S79006Page,
  },
  {
    path: 's79006t',
    canActivate: [ActiveGuard],
    component: S79006tPage,
  },
  {
    path: 's79007',
    canActivate: [ActiveGuard],
    component: S79007Page,
  },
  {
    path: 's79008',
    canActivate: [ActiveGuard],
    component: S79008Page,
  },
  {
    path: 's79009',
    canActivate: [ActiveGuard],
    component: S79009Page,
  },
  {
    path: 's79010',
    canActivate: [ActiveGuard],
    component: S79010Page,
  },
  {
    path: 's79011',
    canActivate: [ActiveGuard],
    component: S79011Page,
  },
  {
    path: 's79012',
    canActivate: [ActiveGuard],
    component: S79012Page,
  },
  {
    path: 's79013',
    canActivate: [ActiveGuard],
    component: S79013Page,
  },
  {
    path: 's79014',
    canActivate: [ActiveGuard],
    component: S79014Page,
  },
  {
    path: 's79015',
    canActivate: [ActiveGuard],
    component: S79015Page,
  },
  {
    path: 's79016',
    canActivate: [ActiveGuard],
    component: S79016Page,
  },
  {
    path: 's79017',
    canActivate: [ActiveGuard],
    component: S79017Page,
  },
  {
    path: 's79018',
    canActivate: [ActiveGuard],
    component: S79018Page,
  },
  {
    path: 's79019',
    canActivate: [ActiveGuard],
    component: S79019Page,
  },
  {
    path: 's79020',
    canActivate: [ActiveGuard],
    component: S79020Page,
  },
  {
    path: 's79021',
    canActivate: [ActiveGuard],
    component: S79021Page,
  },
  {
    path: 's79022',
    canActivate: [ActiveGuard],
    component: S79022Page,
  },
  {
    path: 's79023',
    canActivate: [ActiveGuard],
    component: S79023Page,
  },
  {
    path: 's79024',
    canActivate: [ActiveGuard],
    component: S79024Page,
  },
  {
    path: 's79025',
    canActivate: [ActiveGuard],
    component: S79025Page,
  },
  {
    path: 's79026',
    canActivate: [ActiveGuard],
    component: S79026Page,
  },
  {
    path: 's79027',
    canActivate: [ActiveGuard],
    component: S79027Page,
  },
  {
    path: 's79028',
    canActivate: [ActiveGuard],
    component: S79028Page,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatIsWisdomRoutingModule { }
