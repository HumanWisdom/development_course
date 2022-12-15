import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S74001Page } from './s74001/s74001.page';
import { S74002Page } from './s74002/s74002.page';
import { S74003Page } from './s74003/s74003.page';
import { S74004Page } from './s74004/s74004.page';
import { S74005Page } from './s74005/s74005.page';
import { S74006Page } from './s74006/s74006.page';
import { S74007Page } from './s74007/s74007.page';
import { S74008Page } from './s74008/s74008.page';
import { S74009Page } from './s74009/s74009.page';
import { S74010Page } from './s74010/s74010.page';
import { S74011Page } from './s74011/s74011.page';
import { S74012Page } from './s74012/s74012.page';

const routes: Routes = [
  {
    path: '',   
    component: S74001Page,
  },

  {
    path: 's74001',   
    component: S74001Page,
  },
  
  {
    path: 's74002',   
     component: S74002Page,
  },

  {
    path: 's74003',   
    component: S74003Page,
  },

  {
    path: 's74004',   
    component: S74004Page,
  },

  {
    path: 's74005',   
    component: S74005Page,
  },

  {
    path: 's74006',   
    component: S74006Page,
  },

  {
    path: 's74007',   
     component: S74007Page,
  },

  {
    path: 's74008',   
    component: S74008Page,
  },

  {
    path: 's74009',   
    component: S74009Page,
  },
  {
    path: 's74010',
    component: S74010Page,
  },
  {
    path: 's74011',
    component: S74011Page,
  },
  {
    path: 's74012',
    component: S74012Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowCanWisdomHelpRoutingModule { }
