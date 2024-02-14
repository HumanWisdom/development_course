import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';


import { S99001Page } from './s99001/s99001.page';
import { S99002Page } from './s99002/s99002.page';
import { S99003Page } from './s99003/s99003.page';
import { S99004Page } from './s99004/s99004.page';
import { S99004tPage } from './s99004t/s99004t.page';
import { S99005Page } from './s99005/s99005.page';
import { S99006Page } from './s99006/s99006.page';
import { S99007Page } from './s99007/s99007.page';
import { S99007tPage } from './s99007t/s99007t.page';
import { S99008Page } from './s99008/s99008.page';
import { S99008tPage } from './s99008t/s99008t.page';
import { S99009Page } from './s99009/s99009.page';
import { S99009tPage } from './s99009t/s99009t.page';
import { S99010Page } from './s99010/s99010.page';
import { S99011Page } from './s99011/s99011.page';
import { S99012Page } from './s99012/s99012.page';
import { S99013Page } from './s99013/s99013.page';
import { S99013tPage } from './s99013t/s99013t.page';
import { S99014Page } from './s99014/s99014.page';
import { S99015Page } from './s99015/s99015.page';
import { S99016Page } from './s99016/s99016.page';
import { S99016tPage } from './s99016t/s99016t.page';
import { S99017Page } from './s99017/s99017.page';
import { S99017tPage } from './s99017t/s99017t.page';
import { S99018Page } from './s99018/s99018.page';
import { S99019Page } from './s99019/s99019.page';
import { S99020Page } from './s99020/s99020.page';
import { S99021Page } from './s99021/s99021.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [ActiveGuard],
    component: S99001Page,
  },  
  {
    path: 's99001',
    canActivate: [ActiveGuard],
    component: S99001Page,
  },
  {
    path: 's99002',
    canActivate: [ActiveGuard],
    component: S99002Page,
  },
  {
    path: 's99003',
    canActivate: [ActiveGuard],
    component: S99003Page,
  },
  {
    path: 's99004',
    canActivate: [ActiveGuard],
    component: S99004Page,
  },
  {
    path: 's99004t',
    canActivate: [ActiveGuard],
    component: S99004tPage,
  },
  {
    path: 's99005',
    canActivate: [ActiveGuard],
    component: S99005Page,
  },
  {
    path: 's99006',
    canActivate: [ActiveGuard],
    component: S99006Page,
  },
   {
    path: 's99007',
    canActivate: [ActiveGuard],
    component: S99007Page,
  },
  {
    path: 's99007t',
    canActivate: [ActiveGuard],
    component: S99007tPage,
  },
  {
    path: 's99008',
    canActivate: [ActiveGuard],
    component: S99008Page,
  },
  {
    path: 's99008t',
    canActivate: [ActiveGuard],
    component: S99008tPage,
  },
  {
    path: 's99009',
    canActivate: [ActiveGuard],
    component: S99009Page,
  },
  {
    path: 's99009t',
    canActivate: [ActiveGuard],
    component: S99009tPage,
  },
  {
    path: 's99010',
    canActivate: [ActiveGuard],
    component: S99010Page,
  },
  {
    path: 's99011',
    canActivate: [ActiveGuard],
    component: S99011Page,
  },
  {
    path: 's99012',
    canActivate: [ActiveGuard],
    component: S99012Page,
  },
  {
    path: 's99013',
    canActivate: [ActiveGuard],
    component: S99013Page,
  },
  {
    path: 's99013t',
    canActivate: [ActiveGuard],
    component: S99013tPage,
  },
  {
    path: 's99014',
    canActivate: [ActiveGuard],
    component: S99014Page,
  },
  {
    path: 's99015',
    canActivate: [ActiveGuard],
    component: S99015Page,
  },
  {
    path: 's99016',
    canActivate: [ActiveGuard],
    component: S99016Page,
  },
  {
    path: 's99016t',
    canActivate: [ActiveGuard],
    component: S99016tPage,
  },
  {
    path: 's99017',
    canActivate: [ActiveGuard],
    component: S99017Page,
  },
  {
    path: 's99017t',
    canActivate: [ActiveGuard],
    component: S99017tPage,
  },
  {
    path: 's99018',
    canActivate: [ActiveGuard],
    component: S99018Page,
  },
  {
    path: 's99019',
    canActivate: [ActiveGuard],
    component: S99019Page,
  },
  {
    path: 's99020',
    canActivate: [ActiveGuard],
    component: S99020Page,
  },
  {
    path: 's99021',
    canActivate: [ActiveGuard],
    component: S99021Page,
  }   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }
