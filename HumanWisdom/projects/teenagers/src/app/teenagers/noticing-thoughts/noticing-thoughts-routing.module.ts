import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { S108001Page } from './s108001/s108001.page';
import { S108002Page } from './s108002/s108002.page';
import { S108003tPage } from './s108003t/s108003t.page';
import { S108003Page } from './s108003/s108003.page';
import { S108004Page } from './s108004/s108004.page';
import { S108005Page } from './s108005/s108005.page';
import { S108006Page } from './s108006/s108006.page';
import { S108007Page } from './s108007/s108007.page';
import { S108008Page } from './s108008/s108008.page';

const routes: Routes = [
  {
    path: '',
    component: S108001Page,
  },
  {
    path: 's108001',

    component: S108001Page,
  },
  {
    path: 's108002',

    component: S108002Page,
    // data: { animation: 0 }
  },
  {
    path: 's108003t',

    component: S108003tPage,
    // data: { animation: 1 }
  },
  {
    path: 's108003',

    component: S108003Page,
    // data: { animation: 2 }
  },
  {
    path: 's108004',

    component: S108004Page,
    // data: { animation: 3 }
  },
  {
    path: 's108005',

    component: S108005Page,
    // data: { animation: 4 }
  },
  {
    path: 's108006',

    component: S108006Page,
    // data: { animation: 5 }
  },
  {
    path: 's108007',

    component: S108007Page,
    // data: { animation: 6 }
  },
  {
    path: 's108008',

    component: S108008Page,
    // data: { animation: 6 }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticingThoughtsRoutingModule { }
