import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S42000Page } from './s42000/s42000.page';
import { S42001Page } from './s42001/s42001.page';
import { S42002Page } from './s42002/s42002.page';
import { S42002tPage } from './s42002t/s42002t.page';
import { S42003Page } from './s42003/s42003.page';
import { S42004Page } from './s42004/s42004.page';
import { S42005Page } from './s42005/s42005.page';
import { S42006Page } from './s42006/s42006.page';
import { S42007Page } from './s42007/s42007.page';
import { S42008Page } from './s42008/s42008.page';
import { S42009Page } from './s42009/s42009.page';
import { S42010Page } from './s42010/s42010.page';
import { S42011Page } from './s42011/s42011.page';
import { S42012Page } from './s42012/s42012.page';
import { S42012tPage } from './s42012t/s42012t.page';
import { S42013Page } from './s42013/s42013.page';
import { S42014Page } from './s42014/s42014.page';
import { S42015Page } from './s42015/s42015.page';
import { S42015tPage } from './s42015t/s42015t.page';
import { S42016Page } from './s42016/s42016.page';
import { S42017Page } from './s42017/s42017.page';
import { S42018Page } from './s42018/s42018.page';
import { S42019Page } from './s42019/s42019.page';
import { S42020Page } from './s42020/s42020.page';
import { S42021Page } from './s42021/s42021.page';
import { S42022Page } from './s42022/s42022.page';

const routes: Routes = [
  {
    path: '',
     component: S42001Page,
  },  
  {
    path: 's42000',
     canActivate:[ActiveGuard],  
    component: S42000Page,
  },   
  {
    path: 's42001',
     canActivate:[ActiveGuard],  
    component: S42001Page,
  },   
  {
    path: 's42004',
     canActivate:[ActiveGuard],  
    component: S42004Page,
  },
  {
    path: 's42006',
     canActivate:[ActiveGuard],  
    component: S42006Page,
  },
  {
    path: 's42008',
     canActivate:[ActiveGuard],  
    component: S42008Page,
  },
  {
    path: 's42018',
     canActivate:[ActiveGuard],  
    component: S42018Page,
  },
  {
    path: 's42020',
     canActivate:[ActiveGuard],  
    component: S42020Page,
  },
  {
    path: 's42009',
     canActivate:[ActiveGuard],  
    component: S42009Page,
  },
  {
    path: 's42011',
     canActivate:[ActiveGuard],  
    component: S42011Page,
  },
  {
    path: 's42014',
     canActivate:[ActiveGuard],  
    component: S42014Page,
  },
  {
    path: 's42016',
     canActivate:[ActiveGuard],  
    component: S42016Page,
  },
  {
    path: 's42017',
     canActivate:[ActiveGuard],  
    component: S42017Page,
  },
  {
    path: 's42019',
     canActivate:[ActiveGuard],  
    component: S42019Page,
  },
  {
    path: 's42002',
     canActivate:[ActiveGuard],  
    component: S42002Page,
  },
  {
    path: 's42002t',
     canActivate:[ActiveGuard],  
    component: S42002tPage,
  },
  {
    path: 's42012',
     canActivate:[ActiveGuard],  
    component: S42012Page,
  },
  {
    path: 's42012t',
     canActivate:[ActiveGuard],  
    component: S42012tPage,
  },
  {
    path: 's42015',
     canActivate:[ActiveGuard],  
    component: S42015Page,
  },
  {
    path: 's42015t',
     canActivate:[ActiveGuard],  
    component: S42015tPage,
  },
  {
    path: 's42021',
     canActivate:[ActiveGuard],  
    component: S42021Page,
  },
  {
    path: 's42022',
     canActivate:[ActiveGuard],  
    component: S42022Page,
  },
  {
    path: 's42010',
     canActivate:[ActiveGuard],  
    component: S42010Page,
  },
  {
    path: 's42013',
     canActivate:[ActiveGuard],  
    component: S42013Page,
  },
  {
    path: 's42003',
     canActivate:[ActiveGuard],  
    component: S42003Page,
  },
  {
    path: 's42005',
     canActivate:[ActiveGuard],  
    component: S42005Page,
  },
  {
    path: 's42007',
     canActivate:[ActiveGuard],  
    component: S42007Page,
  },  
  {
    path: 's42000',
     canActivate:[ActiveGuard],  
    component: S42000Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutLanguageRoutingModule { }
