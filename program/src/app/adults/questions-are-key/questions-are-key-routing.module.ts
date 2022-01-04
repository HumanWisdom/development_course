import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S41000Page } from './s41000/s41000.page';
import { S41001Page } from './s41001/s41001.page';
import { S41002Page } from './s41002/s41002.page';
import { S41003Page } from './s41003/s41003.page';
import { S41003tPage } from './s41003t/s41003t.page';
import { S41004Page } from './s41004/s41004.page';
import { S41004tPage } from './s41004t/s41004t.page';
import { S41005Page } from './s41005/s41005.page';
import { S41006Page } from './s41006/s41006.page';
import { S41007Page } from './s41007/s41007.page';
import { S41008Page } from './s41008/s41008.page';
import { S41009Page } from './s41009/s41009.page';
import { S41010Page } from './s41010/s41010.page';
import { S41011Page } from './s41011/s41011.page';
import { S41012Page } from './s41012/s41012.page';
import { S41013Page } from './s41013/s41013.page';
import { S41014Page } from './s41014/s41014.page';
import { S41015Page } from './s41015/s41015.page';
import { S41016Page } from './s41016/s41016.page';
import { S41016tPage } from './s41016t/s41016t.page';
import { S41017Page } from './s41017/s41017.page';
import { S41018Page } from './s41018/s41018.page';
import { S41019Page } from './s41019/s41019.page';
import { S41019p1Page } from './s41019p1/s41019p1.page';
import { S41019p2Page } from './s41019p2/s41019p2.page';
import { S41019p3Page } from './s41019p3/s41019p3.page';
import { S41019p4Page } from './s41019p4/s41019p4.page';
import { S41019p5Page } from './s41019p5/s41019p5.page';
import { S41019p6Page } from './s41019p6/s41019p6.page';
import { S41019p7Page } from './s41019p7/s41019p7.page';
import { S41019p8Page } from './s41019p8/s41019p8.page';
import { S41020Page } from './s41020/s41020.page';

const routes: Routes = [
  {
    path: '',    
    canActivate:[ActiveGuard],  
    component: S41000Page,
  },  
  {
    path: 's41000',
    canActivate:[ActiveGuard],  
    component: S41000Page,
  },
  {
    path: 's41001',
    canActivate:[ActiveGuard],  
    component: S41001Page,
  },
  {
    path: 's41002',
    canActivate:[ActiveGuard],  
    component: S41002Page,
  },
  {
    path: 's41003',
    canActivate:[ActiveGuard],  
    component: S41003Page,
  },
  {
    path: 's41003t',
    canActivate:[ActiveGuard],  
    component: S41003tPage,
  },
  {
    path: 's41004',
    canActivate:[ActiveGuard],  
    component: S41004Page,
  },
  {
    path: 's41004t',
    canActivate:[ActiveGuard],  
    component: S41004tPage,
  },
  {
    path: 's41005',
    canActivate:[ActiveGuard],  
    component: S41005Page,
  },
  {
    path: 's41006',
    canActivate:[ActiveGuard],  
    component: S41006Page,
  }, 
  {
    path: 's41007',
    canActivate:[ActiveGuard],  
    component: S41007Page,
  }, 
  {
    path: 's41008',
    canActivate:[ActiveGuard],  
    component: S41008Page,
  },
  {
    path: 's41009',
    canActivate:[ActiveGuard],  
    component: S41009Page,
  },
  {
    path: 's41010',
    canActivate:[ActiveGuard],  
    component: S41010Page,
  },
  {
    path: 's41011',
    canActivate:[ActiveGuard],  
    component: S41011Page,
  },
  {
    path: 's41012',
    canActivate:[ActiveGuard],  
    component: S41012Page,
  },
  {
    path: 's41013',
    canActivate:[ActiveGuard],  
    component: S41013Page,
  },
  {
    path: 's41014',
    canActivate:[ActiveGuard],  
    component: S41014Page,
  },
  {
    path: 's41015',
    canActivate:[ActiveGuard],  
    component: S41015Page,
  },
  {
    path: 's41016',
    canActivate:[ActiveGuard],  
    component: S41016Page,
  },
  {
    path: 's41016t',
    canActivate:[ActiveGuard],  
    component: S41016tPage,
  },
  {
    path: 's41017',
    canActivate:[ActiveGuard],  
    component: S41017Page,
  },
  {
    path: 's41018',
    canActivate:[ActiveGuard],  
    component: S41018Page,
  },
  {
    path: 's41019',
    canActivate:[ActiveGuard],  
    component: S41019Page,
  },
  {
    path: 's41020',
    canActivate:[ActiveGuard],  
    component: S41020Page,
  },
  {
    path: 's41019p1',
    canActivate:[ActiveGuard],  
    component: S41019p1Page,
  },
  {
    path: 's41019p2',
    canActivate:[ActiveGuard],  
    component: S41019p2Page,
  },
  {
    path: 's41019p3',
    canActivate:[ActiveGuard],  
    component: S41019p3Page,
  },
  {
    path: 's41019p4',
    canActivate:[ActiveGuard],  
    component: S41019p4Page,
  },
  {
    path: 's41019p5',
    canActivate:[ActiveGuard],  
    component: S41019p5Page,
  },
  {
    path: 's41019p6',
    canActivate:[ActiveGuard],  
    component: S41019p6Page,
  },
  {
    path: 's41019p7',
    canActivate:[ActiveGuard],  
    component: S41019p7Page,
  },
  {
    path: 's41019p8',
    canActivate:[ActiveGuard],  
    component: S41019p8Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAreKeyRoutingModule { }
