import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';


import { S38000Page } from './s38000/s38000.page';
import { S38001Page } from './s38001/s38001.page';
import { S38002Page } from './s38002/s38002.page';
import { S38003Page } from './s38003/s38003.page';
import { S38003tPage } from './s38003t/s38003t.page';
import { S38004Page } from './s38004/s38004.page';
import { S38005Page } from './s38005/s38005.page';
import { S38006Page } from './s38006/s38006.page';
import { S38006tPage } from './s38006t/s38006t.page';
import { S38007Page } from './s38007/s38007.page';
import { S38007tPage } from './s38007t/s38007t.page';
import { S38008Page } from './s38008/s38008.page';
import { S38008tPage } from './s38008t/s38008t.page';
import { S38009Page } from './s38009/s38009.page';
import { S38010Page } from './s38010/s38010.page';
import { S38011Page } from './s38011/s38011.page';
import { S38012Page } from './s38012/s38012.page';
import { S38012tPage } from './s38012t/s38012t.page';
import { S38013Page } from './s38013/s38013.page';
import { S38014Page } from './s38014/s38014.page';
import { S38015Page } from './s38015/s38015.page';
import { S38015tPage } from './s38015t/s38015t.page';
import { S38016Page } from './s38016/s38016.page';
import { S38016tPage } from './s38016t/s38016t.page';
import { S38017Page } from './s38017/s38017.page';
import { S38018Page } from './s38018/s38018.page';
import { S38019Page } from './s38019/s38019.page';
import { S38020Page } from './s38020/s38020.page';

const routes: Routes = [
  {
    path: '',    
   canActivate:[ActiveGuard],  
    component: S38000Page,
  },  
  {
    path: 's38000',
   canActivate:[ActiveGuard],  
    component: S38000Page,
  },
  {
    path: 's38001',
   canActivate:[ActiveGuard],  
    component: S38001Page,
  },
  {
    path: 's38002',
   canActivate:[ActiveGuard],  
    component: S38002Page,
  },
  {
    path: 's38003',
   canActivate:[ActiveGuard],  
    component: S38003Page,
  },
  {
    path: 's38003t',
   canActivate:[ActiveGuard],  
    component: S38003tPage,
  },
  {
    path: 's38004',
   canActivate:[ActiveGuard],  
    component: S38004Page,
  },
  {
    path: 's38005',
   canActivate:[ActiveGuard],  
    component: S38005Page,
  },
  {
    path: 's38006',
   canActivate:[ActiveGuard],  
    component: S38006Page,
  },
  {
    path: 's38006t',
   canActivate:[ActiveGuard],  
    component: S38006tPage,
  },
  {
    path: 's38007',
   canActivate:[ActiveGuard],  
    component: S38007Page,
  },
  {
    path: 's38007t',
   canActivate:[ActiveGuard],  
    component: S38007tPage,
  },
  {
    path: 's38008',
   canActivate:[ActiveGuard],  
    component: S38008Page,
  },
  {
    path: 's38008t',
   canActivate:[ActiveGuard],  
    component: S38008tPage,
  },
  {
    path: 's38009',
   canActivate:[ActiveGuard],  
    component: S38009Page,
  },
  {
    path: 's38010',
   canActivate:[ActiveGuard],  
    component: S38010Page,
  },
  {
    path: 's38011',
   canActivate:[ActiveGuard],  
    component: S38011Page,
  },
  {
    path: 's38012',
   canActivate:[ActiveGuard],  
    component: S38012Page,
  },
  {
    path: 's38012t',
   canActivate:[ActiveGuard],  
    component: S38012tPage,
  },
  {
    path: 's38013',
   canActivate:[ActiveGuard],  
    component: S38013Page,
  },
  {
    path: 's38014',
   canActivate:[ActiveGuard],  
    component: S38014Page,
  },
  {
    path: 's38015',
   canActivate:[ActiveGuard],  
    component: S38015Page,
  },
  {
    path: 's38015t',
   canActivate:[ActiveGuard],  
    component: S38015tPage,
  },
  {
    path: 's38016',
   canActivate:[ActiveGuard],  
    component: S38016Page,
  },
  {
    path: 's38016t',
   canActivate:[ActiveGuard],  
    component: S38016tPage,
  },
  {
    path: 's38017',
   canActivate:[ActiveGuard],  
    component: S38017Page,
  },
  {
    path: 's38018',
   canActivate:[ActiveGuard],  
    component: S38018Page,
  },
  {
    path: 's38019',
   canActivate:[ActiveGuard],  
    component: S38019Page,
  },
  {
    path: 's38020',
   canActivate:[ActiveGuard],  
    component: S38020Page,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }
