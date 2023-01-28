import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S78001Page } from './s78001/s78001.page';
import { S78002Page } from './s78002/s78002.page';
import { S78003Page } from './s78003/s78003.page';
import { S78004Page } from './s78004/s78004.page';
import { S78005Page } from './s78005/s78005.page';
import { S78006Page } from './s78006/s78006.page';
import { S78007Page } from './s78007/s78007.page';
import { S78008Page } from './s78008/s78008.page';
import { S78009Page } from './s78009/s78009.page';
import { S78010Page } from './s78010/s78010.page';
import { S78011Page } from './s78011/s78011.page';
import { S78012Page } from './s78012/s78012.page';
import { S78013Page } from './s78013/s78013.page';
import { S78014Page } from './s78014/s78014.page';
import { S78015Page } from './s78015/s78015.page';
import { S78016Page } from './s78016/s78016.page';
import { S78017Page } from './s78017/s78017.page';
import { S78018Page } from './s78018/s78018.page';
import { S78019Page } from './s78019/s78019.page';
import { S78020Page } from './s78020/s78020.page';
import { S78021Page } from './s78021/s78021.page';
import { S78022Page } from './s78022/s78022.page';
import { S78023Page } from './s78023/s78023.page';

const routes: Routes = [
  {
    path: '',    
    component: S78001Page,
  },
  {
    path: 's78001',    
    component: S78001Page,
  },
  {
    path: 's78002',
    component: S78002Page,
  },
  {
    path: 's78003',
    component: S78003Page,
  },
  {
    path: 's78004',
    component: S78004Page,
  },
  {
    path: 's78005',
    component: S78005Page,
  },
  {
    path: 's78006',
    component: S78006Page,
  },
  {
    path: 's78007',
    component: S78007Page,
  },
  {
    path: 's78008',
    component: S78008Page,
  },
  {
    path: 's78009',
    component: S78009Page,
  },
  {
    path: 's78010',
    component: S78010Page,
  },
  {
    path: 's78011',
    component: S78011Page,
  },
  {
    path: 's78012',
    component: S78012Page,
  },
  {
    path: 's78013',
    component: S78013Page,
  },
  {
    path: 's78014',
    component: S78014Page,
  },
  {
    path: 's78015',
    component: S78015Page,
  },
  {
    path: 's78016',
    component: S78016Page,
  },
  {
    path: 's78017',
    component: S78017Page,
  },
  {
    path: 's78018',
    component: S78018Page,
  },
  {
    path: 's78019',
    component: S78019Page,
  },
  {
    path: 's78020',
    component: S78020Page,
  },
  {
    path: 's78021',
    component: S78021Page,
  },
  {
    path: 's78022',
    component: S78022Page,
  },
  {
    path: 's78023',
    component: S78023Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartHereRoutingModule { }
