import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S33001Page } from './s33001/s33001.page';
import { S33002Page } from './s33002/s33002.page';
import { S33003Page } from './s33003/s33003.page';
import { S33004Page } from './s33004/s33004.page';
import { S33004tPage } from './s33004t/s33004t.page';
import { S33005Page } from './s33005/s33005.page';
import { S33005tPage } from './s33005t/s33005t.page';
import { S33006Page } from './s33006/s33006.page';
import { S33007Page } from './s33007/s33007.page';
import { S33007tPage } from './s33007t/s33007t.page';
import { S33008Page } from './s33008/s33008.page';
import { S33009Page } from './s33009/s33009.page';
import { S33010Page } from './s33010/s33010.page';
import { S33011Page } from './s33011/s33011.page';
import { S33011tPage } from './s33011t/s33011t.page';
import { S33012Page } from './s33012/s33012.page';
import { S33013Page } from './s33013/s33013.page';
import { S33013tPage } from './s33013t/s33013t.page';
import { S33014Page } from './s33014/s33014.page';
import { S33015Page } from './s33015/s33015.page';
import { S33015tPage } from './s33015t/s33015t.page';
import { S33016Page } from './s33016/s33016.page';
import { S33017Page } from './s33017/s33017.page';
import { S33018Page } from './s33018/s33018.page';
import { S33018tPage } from './s33018t/s33018t.page';
import { S33019Page } from './s33019/s33019.page';
import { S33020Page } from './s33020/s33020.page';
import { S33021Page } from './s33021/s33021.page';
import { S33022Page } from './s33022/s33022.page';

const routes: Routes = [
  {
    path: '',    
    component: S33001Page,
  },  
  {
    path: 's33001',
    component: S33001Page,
  },
  {
    path: 's33002',
    component: S33002Page,
  },
  {
    path: 's33003',
    component: S33003Page,
  },
  {
    path: 's33004',
    component: S33004Page,
  },
  {
    path: 's33004t',
    component: S33004tPage,
  },
  {
    path: 's33005',
    component: S33005Page,
  },
  {
    path: 's33005t',
    component: S33005tPage,
  },
  {
    path: 's33006',
    component: S33006Page,
  },
  {
    path: 's33007',
    component: S33007Page,
  },
  {
    path: 's33007t',
    component: S33007tPage,
  },
  {
    path: 's33008',
    component: S33008Page,
  },
  {
    path: 's33009',
    component: S33009Page,
  },
  {
    path: 's33010',
    component: S33010Page,
  },
  {
    path: 's33011',
    component: S33011Page,
  },
  {
    path: 's33011t',
    component: S33011tPage,
  },
  {
    path: 's33012',
    component: S33012Page,
  },
  {
    path: 's33013',
    component: S33013Page,
  },
  {
    path: 's33013t',
    component: S33013tPage,
  },
  {
    path: 's33014',
    component: S33014Page,
  },
  {
    path: 's33015',
    component: S33015Page,
  },
  {
    path: 's33015t',
    component: S33015tPage,
  },
  {
    path: 's33016',
    component: S33016Page,
  },  
  {
    path: 's33017',
    component: S33017Page,
  },
  {
    path: 's33018',
    component: S33018Page,
  },
  {
    path: 's33018t',
    component: S33018tPage,
  },
  {
    path: 's33019',
    component: S33019Page,
  },
  {
    path: 's33020',
    component: S33020Page,
  },
  {
    path: 's33021',
    component: S33021Page,
  },
  {
    path: 's33022',
    component: S33022Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveCirclesRoutingModule { }
