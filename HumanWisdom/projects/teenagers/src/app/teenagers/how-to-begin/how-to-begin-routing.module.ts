import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S96001Page } from './s96001/s96001.page';
import { S96002Page } from './s96002/s96002.page';
import { S96003Page } from './s96003/s96003.page';
import { S96004Page } from './s96004/s96004.page';
import { S96005Page } from './s96005/s96005.page';
import { S96006Page } from './s96006/s96006.page';
import { S96006tPage } from './s96006t/s96006t.page';
import { S96007Page } from './s96007/s96007.page';
import { S96008Page } from './s96008/s96008.page';
import { S96009Page } from './s96009/s96009.page';
import { S96010Page } from './s96010/s96010.page';
import { S96010tPage } from './s96010t/s96010t.page';
import { S96011Page } from './s96011/s96011.page';
import { S96012Page } from './s96012/s96012.page';
import { S96013Page } from './s96013/s96013.page';
import { S96014Page } from './s96014/s96014.page';
import { S96015Page } from './s96015/s96015.page';
import { S96015tPage } from './s96015t/s96015t.page';
import { S96016Page } from './s96016/s96016.page';
import { S96017Page } from './s96017/s96017.page';
import { S96018Page } from './s96018/s96018.page';
import { S96019Page } from './s96019/s96019.page';
import { S96020Page } from './s96020/s96020.page';
import { S96021Page } from './s96021/s96021.page';
import { S96022Page } from './s96022/s96022.page';
import { S96022tPage } from './s96022t/s96022t.page';
import { S96023Page } from './s96023/s96023.page';
import { S96024Page } from './s96024/s96024.page';
import { S96025Page } from './s96025/s96025.page';
import { S96026Page } from './s96026/s96026.page';
import { S96027Page } from './s96027/s96027.page';
import { S96028Page } from './s96028/s96028.page';

const routes: Routes = [
  {
    path: '',    
     component: S96001Page,
  },  
  {
    path: 's96001',
       
    component: S96001Page,
  },
  {
    path: 's96002',
       
    component: S96002Page,
  },
  {
    path: 's96003',
       
    component: S96003Page,
  },
  {
    path: 's96004',
       
    component: S96004Page,
  },
  {
    path: 's96005',
       
    component: S96005Page,
  },
  {
    path: 's96006',
       
    component: S96006Page,
  },
  {
    path: 's96006t',
       
    component: S96006tPage,
  },
  {
    path: 's96007',
       
    component: S96007Page,
  },
  {
    path: 's96008',
       
    component: S96008Page,
  },
  {
    path: 's96009',
       
    component: S96009Page,
  },
  {
    path: 's96010',
       
    component: S96010Page,
  },
  {
    path: 's96010t',
       
    component: S96010tPage,
  },
  {
    path: 's96011',
       
    component: S96011Page,
  },
  {
    path: 's96012',
       
    component: S96012Page,
  },
  {
    path: 's96013',
       
    component: S96013Page,
  },
  {
    path: 's96014',
       
    component: S96014Page,
  },
  {
    path: 's96015',
       
    component: S96015Page,
  },
  {
    path: 's96015t',
       
    component: S96015tPage,
  },
  {
    path: 's96016',
       
    component: S96016Page,
  },
  {
    path: 's96017',
       
    component: S96017Page,
  },
  {
    path: 's96018',
       
    component: S96018Page,
  },
  {
    path: 's96019',
       
    component: S96019Page,
  },
  {
    path: 's96020',
       
    component: S96020Page,
  },
  {
    path: 's96021',
       
    component: S96021Page,
  },
  {
    path: 's96022',
       
    component: S96022Page,
  },
  {
    path: 's96022t',
       
    component: S96022tPage,
  },
  {
    path: 's96023',
       
    component: S96023Page,
  },
  {
    path: 's96024',
       
    component: S96024Page,
  },
  {
    path: 's96025',
       
    component: S96025Page,
  },
  {
    path: 's96026',
       
    component: S96026Page,
  },
  {
    path: 's96027',
       
    component: S96027Page,
  },
  {
    path: 's96028',
       
    component: S96028Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowToBeginRoutingModule { }
