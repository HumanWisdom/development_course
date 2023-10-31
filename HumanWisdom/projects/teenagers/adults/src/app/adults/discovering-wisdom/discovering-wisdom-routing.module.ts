import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S27001Page } from './s27001/s27001.page';
import { S27002Page } from './s27002/s27002.page';
import { S27003Page } from './s27003/s27003.page';
import { S27004Page } from './s27004/s27004.page';
import { S27004p1Page } from './s27004p1/s27004p1.page';
import { S27005Page } from './s27005/s27005.page';
import { S27005tPage } from './s27005t/s27005t.page';
import { S27006Page } from './s27006/s27006.page';
import { S27007Page } from './s27007/s27007.page';
import { S27008Page } from './s27008/s27008.page';
import { S27009Page } from './s27009/s27009.page';
import { S27010Page } from './s27010/s27010.page';
import { S27011Page } from './s27011/s27011.page';
import { S27012Page } from './s27012/s27012.page';
import { S27013Page } from './s27013/s27013.page';
import { S27014Page } from './s27014/s27014.page';
import { S27015Page } from './s27015/s27015.page';
import { S27016Page } from './s27016/s27016.page';
import { S27017Page } from './s27017/s27017.page';
import { S27018Page } from './s27018/s27018.page';
import { S27019Page } from './s27019/s27019.page';
import { S27020Page } from './s27020/s27020.page';
import { S27021Page } from './s27021/s27021.page';
import { S27022Page } from './s27022/s27022.page';
import { S27023Page } from './s27023/s27023.page';
import { S27024Page } from './s27024/s27024.page';
import { S27025Page } from './s27025/s27025.page';
import { S27026Page } from './s27026/s27026.page';
import { S27027Page } from './s27027/s27027.page';
import { S27028Page } from './s27028/s27028.page';
import { S27029Page } from './s27029/s27029.page';
import { S27030Page } from './s27030/s27030.page';
import { S27031Page } from './s27031/s27031.page';
import { S27032Page } from './s27032/s27032.page';
import { S27033Page } from './s27033/s27033.page';
import { S27034Page } from './s27034/s27034.page';
import { S27035Page } from './s27035/s27035.page';
import { S27036Page } from './s27036/s27036.page';

const routes: Routes = [
  {
    path: '',    
    component: S27001Page,
  },  
  {
    path: 's27001',
    component: S27001Page,
  },
  {
    path: 's27002',
    component: S27002Page,
  },
  {
    path: 's27003',
    component: S27003Page,
  },
  {
    path: 's27004',
    component: S27004Page,
  },
  {
    path: 's27004p1',
    component: S27004p1Page,
  },
  {
    path: 's27005',
    component: S27005Page,
  },
  {
    path: 's27005t',
    component: S27005tPage,
  },
  {
    path: 's27006',
    component: S27006Page,
  },
  {
    path: 's27007',
    component: S27007Page,
  },
  {
    path: 's27008',
    component: S27008Page,
  },
  {
    path: 's27009',
    component: S27009Page,
  },
  {
    path: 's27010',
    component: S27010Page,
  },
  {
    path: 's27011',
    component: S27011Page,
  },
  {
    path: 's27012',
    component: S27012Page,
  },
  {
    path: 's27013',
    component: S27013Page,
  },
  {
    path: 's27014',
    component: S27014Page,
  },
  {
    path: 's27015',
    component: S27015Page,
  },
  {
    path: 's27016',
    component: S27016Page,
  },  
  {
    path: 's27017',
    component: S27017Page,
  },
  {
    path: 's27018',
    component: S27018Page,
  },
  {
    path: 's27019',
    component: S27019Page,
  },
  {
    path: 's27020',
    component: S27020Page,
  },
  {
    path: 's27021',
    component: S27021Page,
  },
  {
    path: 's27022',
    component: S27022Page,
  },
  {
    path: 's27023',
    component: S27023Page,
  },
  {
    path: 's27024',
    component: S27024Page,
  },
  {
    path: 's27025',
    component: S27025Page,
  },
  {
    path: 's27026',
    component: S27026Page,
  },
  {
    path: 's27027',
    component: S27027Page,
  },
  {
    path: 's27028',
    component: S27028Page,
  },
  {
    path: 's27029',
    component: S27029Page,
  },
  {
    path: 's27030',
    component: S27030Page,
  },
  {
    path: 's27031',
    component: S27031Page,
  },
  {
    path: 's27032',
    component: S27032Page,
  },
  {
    path: 's27033',
    component: S27033Page,
  },
  {
    path: 's27034',
    component: S27034Page,
  },
  {
    path: 's27035',
    component: S27035Page,
  },
  {
    path: 's27036',
    component: S27036Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoveringWisdomRoutingModule { }
