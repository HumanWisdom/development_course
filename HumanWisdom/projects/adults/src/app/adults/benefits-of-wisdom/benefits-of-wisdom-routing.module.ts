import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S32001Page } from './s32001/s32001.page';  
import { S32002Page } from './s32002/s32002.page';  
import { S32003Page } from './s32003/s32003.page';  
import { S32004Page } from './s32004/s32004.page';
import { S32004tPage } from './s32004t/s32004t.page';
import { S32005Page } from './s32005/s32005.page';  
import { S32006Page } from './s32006/s32006.page'; 
import { S32006p1Page } from './s32006p1/s32006p1.page'; 
import { S32006p2Page } from './s32006p2/s32006p2.page'; 
import { S32006p3Page } from './s32006p3/s32006p3.page'; 
import { S32006p4Page } from './s32006p4/s32006p4.page'; 
import { S32006p5Page } from './s32006p5/s32006p5.page'; 
import { S32006p6Page } from './s32006p6/s32006p6.page'; 
import { S32006p7Page } from './s32006p7/s32006p7.page'; 
import { S32006p8Page } from './s32006p8/s32006p8.page'; 
import { S32006p9Page } from './s32006p9/s32006p9.page'; 
import { S32006p10Page } from './s32006p10/s32006p10.page'; 
import { S32006p11Page } from './s32006p11/s32006p11.page';  
import { S32007Page } from './s32007/s32007.page';  
import { S32008Page } from './s32008/s32008.page';  
import { S32009Page } from './s32009/s32009.page';  
import { S32010Page } from './s32010/s32010.page';  
import { S32011Page } from './s32011/s32011.page';  
import { S32012Page } from './s32012/s32012.page';  
import { S32012tPage } from './s32012t/s32012t.page';  
import { S32013Page } from './s32013/s32013.page';  
import { S32014Page } from './s32014/s32014.page';  
import { S32015Page } from './s32015/s32015.page';  

const routes: Routes = [
  {
    path: '',    
    component: S32001Page,
  },  
  {
    path: 's32001',
    component: S32001Page,
  },
  {
    path: 's32002',
    component: S32002Page,
  },
  {
    path: 's32003',
    component: S32003Page,
  },
  {
    path: 's32004',
    component: S32004Page,
  },
  {
    path: 's32004t',
    component: S32004tPage,
  },
  {
    path: 's32005',
    component: S32005Page,
  },
  {
    path: 's32006',
    component: S32006Page,
  },
  {
    path: 's32006p1',
    component: S32006p1Page,
  },
  {
    path: 's32006p2',
    component: S32006p2Page,
  },
  {
    path: 's32006p3',
    component: S32006p3Page,
  },
  {
    path: 's32006p4',
    component: S32006p4Page,
  },
  {
    path: 's32006p5',
    component: S32006p5Page,
  },
  {
    path: 's32006p6',
    component: S32006p6Page,
  },
  {
    path: 's32006p7',
    component: S32006p7Page,
  },
  {
    path: 's32006p8',
    component: S32006p8Page,
  },
  {
    path: 's32006p9',
    component: S32006p9Page,
  },
  {
    path: 's32006p10',
    component: S32006p10Page,
  },
  {
    path: 's32006p11',
    component: S32006p11Page,
  },
  {
    path: 's32007',
    component: S32007Page,
  },
  {
    path: 's32008',
    component: S32008Page,
  },
  {
    path: 's32009',
    component: S32009Page,
  },
  {
    path: 's32010',
    component: S32010Page,
  },
  {
    path: 's32011',
    component: S32011Page,
  },
  {
    path: 's32012',
    component: S32012Page,
  },
  {
    path: 's32012t',
    component: S32012tPage,
  },
  {
    path: 's32013',
    component: S32013Page,
  },
  {
    path: 's32014',
    component: S32014Page,
  },
  {
    path: 's32015',
    component: S32015Page,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsOfWisdomRoutingModule { }
