import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S81001Page } from './s81001/s81001.page';
import { S81002Page } from './s81002/s81002.page';
import { S81003Page } from './s81003/s81003.page';
import { S81004Page } from './s81004/s81004.page';
import { S81004tPage } from './s81004t/s81004t.page';
import { S81005Page } from './s81005/s81005.page';
import { S81006Page } from './s81006/s81006.page';
import { S81007Page } from './s81007/s81007.page';
import { S81008Page } from './s81008/s81008.page';
import { S81009Page } from './s81009/s81009.page';
import { S81010Page } from './s81010/s81010.page';
import { S81011Page } from './s81011/s81011.page';
import { S81012Page } from './s81012/s81012.page';
import { S81013Page } from './s81013/s81013.page';
import { S81014Page } from './s81014/s81014.page';
import { S81015Page } from './s81015/s81015.page';
import { S81016Page } from './s81016/s81016.page';
import { S81017Page } from './s81017/s81017.page';
import { S81018Page } from './s81018/s81018.page';
import { S81019Page } from './s81019/s81019.page';
import { S81020Page } from './s81020/s81020.page';
import { S81021Page } from './s81021/s81021.page';
import { S81022Page } from './s81022/s81022.page';
import { S81023Page } from './s81023/s81023.page';
import { S81024Page } from './s81024/s81024.page';
import { S81024tPage } from './s81024t/s81024t.page';
import { S81025Page } from './s81025/s81025.page';
import { S81026Page } from './s81026/s81026.page';
import { S81027Page } from './s81027/s81027.page';

const routes: Routes = [
  {
    path: '',    
    component: S81001Page,
  },  
  {
    path: 's81001',
    component: S81001Page,
  },
  {
    path: 's81002',
    component: S81002Page,
  },
  {
    path: 's81003',
    component: S81003Page,
  },
  {
    path: 's81004',
    component: S81004Page,
  },
  {
    path: 's81004t',
    component: S81004tPage,
  },
  {
    path: 's81005',
    component: S81005Page,
  },
  {
    path: 's81006',
    component: S81006Page,
  },
  {
    path: 's81007',
    component: S81007Page,
  },
  {
    path: 's81008',
    component: S81008Page,
  },
  {
    path: 's81009',
    component: S81009Page,
  },
  {
    path: 's81010',
    component: S81010Page,
  },
  {
    path: 's81011',
    component: S81011Page,
  },
  {
    path: 's81012',
    component: S81012Page,
  },
  {
    path: 's81013',
    component: S81013Page,
  },
  {
    path: 's81014',
    component: S81014Page,
  },
  {
    path: 's81015',
    component: S81015Page,
  },
  {
    path: 's81016',
    component: S81016Page,
  },
  {
    path: 's81017',
    component: S81017Page,
  },
  {
    path: 's81018',
    component: S81018Page,
  },
  {
    path: 's81019',
    component: S81019Page,
  },
  {
    path: 's81020',
    component: S81020Page,
  },
  {
    path: 's81021',
    component: S81021Page,
  },
  {
    path: 's81022',
    component: S81022Page,
  },
  {
    path: 's81023',
    component: S81023Page,
  },
  {
    path: 's81024',
    component: S81024Page,
  },
  {
    path: 's81024t',
    component: S81024tPage,
  },
  {
    path: 's81025',
    component: S81025Page,
  },
  {
    path: 's81026',
    component: S81026Page,
  },
  {
    path: 's81027',
    component: S81027Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomBringsChangeRoutingModule { }
