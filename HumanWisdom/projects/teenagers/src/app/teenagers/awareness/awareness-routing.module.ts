import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard'


import { S100001Page } from './s100001/s100001.page';
import { S100002Page } from './s100002/s100002.page';
import { S100003Page } from './s100003/s100003.page';
import { S100004Page } from './s100004/s100004.page';
import { S100005Page } from './s100005/s100005.page';
import { S100005tPage } from './s100005t/s100005t.page';
import { S100006Page } from './s100006/s100006.page';
import { S100006tPage } from './s100006t/s100006t.page';
import { S100007Page } from './s100007/s100007.page';
import { S100007tPage } from './s100007t/s100007t.page';
import { S100008Page } from './s100008/s100008.page';
import { S100008tPage } from './s100008t/s100008t.page';
import { S100009Page } from './s100009/s100009.page';
import { S100010Page } from './s100010/s100010.page';
import { S100010tPage } from './s100010t/s100010t.page';
import { S100011Page } from './s100011/s100011.page';
import { S100012Page } from './s100012/s100012.page';
import { S100012tPage } from './s100012t/s100012t.page';
import { S100013Page } from './s100013/s100013.page';
import { S100014Page } from './s100014/s100014.page';
import { S100015Page } from './s100015/s100015.page';
import { S100015tPage } from './s100015t/s100015t.page';
import { S100016Page } from './s100016/s100016.page';
import { S100016tPage } from './s100016t/s100016t.page';
import { S100017Page } from './s100017/s100017.page';
import { S100018Page } from './s100018/s100018.page';
import { S100019Page } from './s100019/s100019.page';
import { S100020Page } from './s100020/s100020.page';
import { S100021Page } from './s100021/s100021.page';
import { S100022Page } from './s100022/s100022.page';
import { S100023Page } from './s100023/s100023.page';
import { S100024Page } from './s100024/s100024.page';
import { S100025Page } from './s100025/s100025.page';
import { S100026Page } from './s100026/s100026.page';
import { S100027Page } from './s100027/s100027.page';
import { S100028Page } from './s100028/s100028.page';

const routes: Routes = [
  {
    path: '',    
    component: S100001Page,
  },  
  {
    path: 's100001',
       
    component: S100001Page,
  },
  {
    path: 's100002',
       
    component: S100002Page,
  },
  {
    path: 's100003',
       
    component: S100003Page,
  },
  {
    path: 's100004',
       
    component: S100004Page,
  },
  {
    path: 's100005',
       
    component: S100005Page,
  },
  {
    path: 's100005t',
       
    component: S100005tPage,
  },
  {
    path: 's100006',
       
    component: S100006Page,
  },
  {
    path: 's100006t',
       
    component: S100006tPage,
  },
  {
    path: 's100007',
       
    component: S100007Page,
  },
  {
    path: 's100007t',
       
    component: S100007tPage,
  },
  {
    path: 's100008',
       
    component: S100008Page,
  },
  {
    path: 's100008t',
       
    component: S100008tPage,
  },
  {
    path: 's100009',
       
    component: S100009Page,
  },
  {
    path: 's100010',
       
    component: S100010Page,
  },
  {
    path: 's100010t',
       
    component: S100010tPage,
  },
  {
    path: 's100011',
       
    component: S100011Page,
  },
  {
    path: 's100012',
       
    component: S100012Page,
  },
  {
    path: 's100012t',
       
    component: S100012tPage,
  },
  {
    path: 's100013',
       
    component: S100013Page,
  },
  {
    path: 's100014',
       
    component: S100014Page,
  },
  {
    path: 's100015',
       
    component: S100015Page,
  },
  {
    path: 's100015t',
       
    component: S100015tPage,
  },
  {
    path: 's100016',
       
    component: S100016Page,
  },
  {
    path: 's100016t',
       
    component: S100016tPage,
  },
  {
    path: 's100017',
       
    component: S100017Page,
  },
  {
    path: 's100018',
       
    component: S100018Page,
  },
  {
    path: 's100019',
       
    component: S100019Page,
  },
  {
    path: 's100020',
       
    component: S100020Page,
  },
  {
    path: 's100021',
       
    component: S100021Page,
  },
  {
    path: 's100022',
       
    component: S100022Page,
  },
  {
    path: 's100023',
       
    component: S100023Page,
  },
  {
    path: 's100024',
       
    component: S100024Page,
  },
  {
    path: 's100025',
       
    component: S100025Page,
  },
  {
    path: 's100026',
       
    component: S100026Page,
  },
  {
    path: 's100027',
       
    component: S100027Page,
  },
  {
    path: 's100028',
       
    component: S100028Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwarenessRoutingModule { }
