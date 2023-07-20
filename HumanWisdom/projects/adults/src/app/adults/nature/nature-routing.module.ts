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
    component: S28001Page
  },
  {
    path: 's28002',
    canActivate: [ActiveGuard],
    component: S28002Page
  },
  {
    path: 's28003',
    canActivate: [ActiveGuard],
    component: S28003Page,
    data: { animation: 0 }
  },
  {
    path: 's28004',
    canActivate: [ActiveGuard],
    component: S28004Page,
    data: { animation: 1 }
  },
  {
    path: 's28005',
    canActivate: [ActiveGuard],
    component: S28005Page,
    data: { animation: 2 }
  },
  {
    path: 's28006',
    canActivate: [ActiveGuard],
    component: S28006Page,
    data: { animation: 3 }
  },
  {
    path: 's28007',
    canActivate: [ActiveGuard],
    component: S28007Page,
    data: { animation: 4 }
  },
  {
    path: 's28008',
    canActivate: [ActiveGuard],
    component: S28008Page,
    data: { animation: 5 }
  },
  {
    path: 's28009',
    canActivate: [ActiveGuard],
    component: S28009Page,
    data: { animation: 6 }
  },
  {
    path: 's28010',
    canActivate: [ActiveGuard],
    component: S28010Page,
    data: { animation: 7 }
  },
  {
    path: 's28011',
    canActivate: [ActiveGuard],
    component: S28011Page,
    data: { animation: 8 }
  },
  {
    path: 's28012',
    canActivate: [ActiveGuard],
    component: S28012Page,
    data: { animation: 9 }
  },
  {
    path: 's28013',
    canActivate: [ActiveGuard],
    component: S28013Page,
    data: { animation: 10 }
  },
  {
    path: 's28014',
    canActivate: [ActiveGuard],
    component: S28014Page,
    data: { animation: 11 }
  },
  {
    path: 's28015',
    canActivate: [ActiveGuard],
    component: S28015Page,
    data: { animation: 12 }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
