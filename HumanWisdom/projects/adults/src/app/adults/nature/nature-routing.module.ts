import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S28001Page } from './s28001/s28001.page';
import { S28002Page } from './s28002/s28002.page';
import { S28003Page } from './s28003/s28003.page';
import { S28004Page } from './s28004/s28004.page';
import { S28005Page } from './s28005/s28005.page';
import { S28006Page } from './s28006/s28006.page';
import { S28007Page } from './s28007/s28007.page';
import { S28008Page } from './s28008/s28008.page';
import { S28009Page } from './s28009/s28009.page';
import { S28010Page } from './s28010/s28010.page';
import { S28011Page } from './s28011/s28011.page';
import { S28012Page } from './s28012/s28012.page';
import { S28013Page } from './s28013/s28013.page';
import { S28014Page } from './s28014/s28014.page';
import { S28015Page } from './s28015/s28015.page';

const routes: Routes = [
  {
    path: '',
    component: S28001Page,
  },
  {
    path: 's28001',
    canActivate: [ActiveGuard],
    component: S28001Page,
  },
  {
    path: 's28002',
    canActivate: [ActiveGuard],
    component: S28002Page,
    data: { animation: 'isRight' }
  },
  {
    path: 's28003',
    canActivate: [ActiveGuard],
    component: S28003Page,
    data: { animation: 'isLeft' }
  },
  {
    path: 's28004',
    canActivate: [ActiveGuard],
    component: S28004Page,
    data: { animation: 'isRight' }
  },
  {
    path: 's28005',
    canActivate: [ActiveGuard],
    component: S28005Page,
    data: { animation: 'isLeft' }
  },
  {
    path: 's28006',
    canActivate: [ActiveGuard],
    component: S28006Page,
  },
  {
    path: 's28007',
    canActivate: [ActiveGuard],
    component: S28007Page,
  },
  {
    path: 's28008',
    canActivate: [ActiveGuard],
    component: S28008Page,
  },
  {
    path: 's28009',
    canActivate: [ActiveGuard],
    component: S28009Page,
  },
  {
    path: 's28010',
    canActivate: [ActiveGuard],
    component: S28010Page,
  },
  {
    path: 's28011',
    canActivate: [ActiveGuard],
    component: S28011Page,
  },
  {
    path: 's28012',
    canActivate: [ActiveGuard],
    component: S28012Page,
  },
  {
    path: 's28013',
    canActivate: [ActiveGuard],
    component: S28013Page,
  },
  {
    path: 's28014',
    canActivate: [ActiveGuard],
    component: S28014Page,
  },
  {
    path: 's28015',
    canActivate: [ActiveGuard],
    component: S28015Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
