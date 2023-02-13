import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S82001Page } from './s82001/s82001.page';
import { S82002Page } from './s82002/s82002.page';
import { S82003Page } from './s82003/s82003.page';
import { S82004Page } from './s82004/s82004.page';
import { S82004tPage } from './s82004t/s82004t.page';
import { S82005Page } from './s82005/s82005.page';
import { S82005tPage } from './s82005t/s82005t.page';
import { S82006Page } from './s82006/s82006.page';
import { S82007Page } from './s82007/s82007.page';
import { S82007tPage } from './s82007t/s82007t.page';
import { S82008Page } from './s82008/s82008.page';
import { S82009Page } from './s82009/s82009.page';
import { S82010Page } from './s82010/s82010.page';
import { S82011Page } from './s82011/s82011.page';
import { S82011tPage } from './s82011t/s82011t.page';
import { S82012Page } from './s82012/s82012.page';
import { S82013Page } from './s82013/s82013.page';
import { S82013tPage } from './s82013t/s82013t.page';
import { S82014Page } from './s82014/s82014.page';
import { S82015Page } from './s82015/s82015.page';
import { S82015tPage } from './s82015t/s82015t.page';
import { S82016Page } from './s82016/s82016.page';
import { S82017Page } from './s82017/s82017.page';
import { S82018Page } from './s82018/s82018.page';
import { S82018tPage } from './s82018t/s82018t.page';
import { S82019Page } from './s82019/s82019.page';
import { S82020Page } from './s82020/s82020.page';
import { S82021Page } from './s82021/s82021.page';
import { S82022Page } from './s82022/s82022.page';

const routes: Routes = [
  {
    path: '',    
    component: S82001Page,
  },  
  {
    path: 's82001',
    component: S82001Page,
  },
  {
    path: 's82002',
    component: S82002Page,
  },
  {
    path: 's82003',
    component: S82003Page,
  },
  {
    path: 's82004',
    component: S82004Page,
  },
  {
    path: 's82004t',
    component: S82004tPage,
  },
  {
    path: 's82005',
    component: S82005Page,
  },
  {
    path: 's82005t',
    component: S82005tPage,
  },
  {
    path: 's82006',
    component: S82006Page,
  },
  {
    path: 's82007',
    component: S82007Page,
  },
  {
    path: 's82007t',
    component: S82007tPage,
  },
  {
    path: 's82008',
    component: S82008Page,
  },
  {
    path: 's82009',
    component: S82009Page,
  },
  {
    path: 's82010',
    component: S82010Page,
  },
  {
    path: 's82011',
    component: S82011Page,
  },
  {
    path: 's82011t',
    component: S82011tPage,
  },
  {
    path: 's82012',
    component: S82012Page,
  },
  {
    path: 's82013',
    component: S82013Page,
  },
  {
    path: 's82013t',
    component: S82013tPage,
  },
  {
    path: 's82014',
    component: S82014Page,
  },
  {
    path: 's82015',
    component: S82015Page,
  },
  {
    path: 's82015t',
    component: S82015tPage,
  },
  {
    path: 's82016',
    component: S82016Page,
  },
  {
    path: 's82017',
    component: S82017Page,
  },
  {
    path: 's82018',
    component: S82018Page,
  },
  {
    path: 's82018t',
    component: S82018tPage,
  },
  {
    path: 's82019',
    component: S82019Page,
  },
  {
    path: 's82020',
    component: S82020Page,
  },
  {
    path: 's82021',
    component: S82021Page,
  },
  {
    path: 's82022',
    component: S82022Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveCirclesOfWisdomRoutingModule { }
