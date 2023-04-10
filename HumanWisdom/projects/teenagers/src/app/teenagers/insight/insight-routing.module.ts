import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
     component: S99001Page,
  },  
  {
    path: 's99001',
     
    component: S99001Page,
  },
  {
    path: 's99002',
     
    component: S99002Page,
  },
  {
    path: 's99003',
     
    component: S99003Page,
  },
  {
    path: 's99004',
     
    component: S99004Page,
  },
  {
    path: 's99004t',
     
    component: S99004tPage,
  },
  {
    path: 's99005',
     
    component: S99005Page,
  },
  {
    path: 's99006',
     
    component: S99006Page,
  },
   {
    path: 's99007',
     
    component: S99007Page,
  },
  {
    path: 's99007t',
     
    component: S99007tPage,
  },
  {
    path: 's99008',
     
    component: S99008Page,
  },
  {
    path: 's99008t',
     
    component: S99008tPage,
  },
  {
    path: 's99009',
     
    component: S99009Page,
  },
  {
    path: 's99009t',
     
    component: S99009tPage,
  },
  {
    path: 's99010',
     
    component: S99010Page,
  },
  {
    path: 's99011',
     
    component: S99011Page,
  },
  {
    path: 's99012',
     
    component: S99012Page,
  },
  {
    path: 's99013',
     
    component: S99013Page,
  },
  {
    path: 's99013t',
     
    component: S99013tPage,
  },
  {
    path: 's99014',
     
    component: S99014Page,
  },
  {
    path: 's99015',
     
    component: S99015Page,
  },
  {
    path: 's99016',
     
    component: S99016Page,
  },
  {
    path: 's99016t',
     
    component: S99016tPage,
  },
  {
    path: 's99017',
     
    component: S99017Page,
  },
  {
    path: 's99017t',
     
    component: S99017tPage,
  },
  {
    path: 's99018',
     
    component: S99018Page,
  },
  {
    path: 's99019',
     
    component: S99019Page,
  },
  {
    path: 's99020',
      
    component: S99020Page,
  },
  {
    path: 's99021',
      
    component: S99021Page,
  }   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }
