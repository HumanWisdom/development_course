import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S106001Page } from './s106001/s106001.page';
import { S106002Page } from './s106002/s106002.page';
import { S106003Page } from './s106003/s106003.page';
import { S106004Page } from './s106004/s106004.page';
import { S106005Page } from './s106005/s106005.page';
import { S106006Page } from './s106006/s106006.page';
import { S106007Page } from './s106007/s106007.page';
import { S106008Page } from './s106008/s106008.page';
import { S106009Page } from './s106009/s106009.page';
import { S106010Page } from './s106010/s106010.page';
import { S106011Page } from './s106011/s106011.page';
import { S106012Page } from './s106012/s106012.page';
import { S106013Page } from './s106013/s106013.page';
import { S106014Page } from './s106014/s106014.page';
import { S106015Page } from './s106015/s106015.page';

const routes: Routes = [
  {
    path: '',
    component: S106001Page,
  },
  {
    path: 's106001',
    component: S106001Page
  },
  {
    path: 's106002',
    component: S106002Page
  },
  {
    path: 's106003',
    component: S106003Page,
    data: { animation: 0 }
  },
  {
    path: 's106004',
    component: S106004Page,
    data: { animation: 1 }
  },
  {
    path: 's106005',
    component: S106005Page,
    data: { animation: 2 }
  },
  {
    path: 's106006',
    component: S106006Page,
    data: { animation: 3 }
  },
  {
    path: 's106007',
    component: S106007Page,
    data: { animation: 4 }
  },
  {
    path: 's106008',
    component: S106008Page,
    data: { animation: 5 }
  },
  {
    path: 's106009',
    component: S106009Page,
    data: { animation: 6 }
  },
  {
    path: 's106010',
    component: S106010Page,
    data: { animation: 7 }
  },
  {
    path: 's106011',
    component: S106011Page,
    data: { animation: 8 }
  },
  {
    path: 's106012',
    component: S106012Page,
    data: { animation: 9 }
  },
  {
    path: 's106013',
    component: S106013Page,
    data: { animation: 10 }
  },
  {
    path: 's106014',
    component: S106014Page,
    data: { animation: 11 }
  },
  {
    path: 's106015',
    component: S106015Page,
    data: { animation: 12 }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
