import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S102001Page } from './s102001/s102001.page';
import { S102002Page } from './s102002/s102002.page';
import { S102003Page } from './s102003/s102003.page';
import { S102004Page } from './s102004/s102004.page';
import { S102004tPage } from './s102004t/s102004t.page';
import { S102005Page } from './s102005/s102005.page';
import { S102005tPage } from './s102005t/s102005t.page';
import { S102006Page } from './s102006/s102006.page';
import { S102007Page } from './s102007/s102007.page';
import { S102008Page } from './s102008/s102008.page';
import { S102009Page } from './s102009/s102009.page';
import { S102010Page } from './s102010/s102010.page';
import { S102011Page } from './s102011/s102011.page';
import { S102012Page } from './s102012/s102012.page';
import { S102013Page } from './s102013/s102013.page';
import { S102014Page } from './s102014/s102014.page';
import { S102015Page } from './s102015/s102015.page';
import { S102016Page } from './s102016/s102016.page';
import { S102017Page } from './s102017/s102017.page';
import { S102017tPage } from './s102017t/s102017t.page';
import { S102018Page } from './s102018/s102018.page';
import { S102019Page } from './s102019/s102019.page';
import { S102020Page } from './s102020/s102020.page';
import { S102021Page } from './s102021/s102021.page';
import { S102022Page } from './s102022/s102022.page';

const routes: Routes = [
  {
    path: '',   
    component: S102001Page,
  },  
  {
    path: 's102001', 
    component: S102001Page,
  },
  {
    path: 's102002',
    canActivate: [ActiveGuard], 
    component: S102002Page,
  },
  {
    path: 's102003',
    canActivate: [ActiveGuard], 
    component: S102003Page,
  },
  {
    path: 's102004',
    canActivate: [ActiveGuard], 
    component: S102004Page,
  },
  {
    path: 's102004t',
    canActivate: [ActiveGuard],
    component: S102004tPage,
  },
  {
    path: 's102005',
    canActivate: [ActiveGuard],
    component: S102005Page,
  },
  {
    path: 's102005t',
    canActivate: [ActiveGuard],
    component: S102005tPage,
  },
  {
    path: 's102006',
    canActivate: [ActiveGuard], 
    component: S102006Page,
  }, 
  {
    path: 's102007',
    canActivate: [ActiveGuard], 
    component: S102007Page,
  }, 
  {
    path: 's102008',
    canActivate: [ActiveGuard], 
    component: S102008Page,
  },
  {
    path: 's102009',
    canActivate: [ActiveGuard], 
    component: S102009Page,
  },
  {
    path: 's102010',
    canActivate: [ActiveGuard],
    component: S102010Page,
  },
  {
    path: 's102011',
    canActivate: [ActiveGuard], 
    component: S102011Page,
  },
  {
    path: 's102012',
    canActivate: [ActiveGuard], 
    component: S102012Page,
  },
  {
    path: 's102013',
    canActivate: [ActiveGuard],
    component: S102013Page,
  },
  {
    path: 's102014',
    canActivate: [ActiveGuard],
    component: S102014Page,
  },
  {
    path: 's102015',
    canActivate: [ActiveGuard],
    component: S102015Page,
  },
  {
    path: 's102016',
    canActivate: [ActiveGuard], 
    component: S102016Page,
  },
  {
    path: 's102017',
    canActivate: [ActiveGuard], 
    component: S102017Page,
  },
  {
    path: 's102017t',
    canActivate: [ActiveGuard], 
    component: S102017tPage,
  },
  {
    path: 's102018',
    canActivate: [ActiveGuard],
    component: S102018Page,
  },
  {
    path: 's102019',
    canActivate: [ActiveGuard], 
    component: S102019Page,
  },
  {
    path: 's102020',
    canActivate: [ActiveGuard],  
    component: S102020Page,
  },
  {
    path: 's102021',
    canActivate: [ActiveGuard],  
    component: S102021Page,
  },
  {
    path: 's102022',
    canActivate: [ActiveGuard], 
    component: S102022Page,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAreKeyRoutingModule { }
