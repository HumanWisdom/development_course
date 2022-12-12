import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S26001Page } from './s26001/s26001.page';
import { S26002Page } from './s26002/s26002.page';
import { S26003Page } from './s26003/s26003.page';
import { S26003tPage } from './s26003t/s26003t.page';
import { S26004Page } from './s26004/s26004.page';
import { S26005Page } from './s26005/s26005.page';
import { S26006Page } from './s26006/s26006.page';
import { S26007Page } from './s26007/s26007.page';
import { S26007tPage } from './s26007t/s26007t.page';
import { S26008Page } from './s26008/s26008.page';
import { S26009Page } from './s26009/s26009.page';
import { S26010Page } from './s26010/s26010.page';
import { S26011Page } from './s26011/s26011.page';
import { S26012Page } from './s26012/s26012.page';
import { S26012tPage } from './s26012t/s26012t.page';
import { S26013Page } from './s26013/s26013.page';
import { S26014Page } from './s26014/s26014.page';
import { S26015Page } from './s26015/s26015.page';
import { S26016Page } from './s26016/s26016.page';
import { S26016tPage } from './s26016t/s26016t.page';
import { S26017Page } from './s26017/s26017.page';
import { S26018Page } from './s26018/s26018.page';
import { S26019Page } from './s26019/s26019.page';
import { S26020Page } from './s26020/s26020.page';
import { S26020tPage } from './s26020t/s26020t.page';
import { S26021Page } from './s26021/s26021.page';
import { S26022Page } from './s26022/s26022.page';
import { S26023Page } from './s26023/s26023.page';
import { S26023tPage } from './s26023t/s26023t.page';
import { S26024Page } from './s26024/s26024.page';
import { S26025Page } from './s26025/s26025.page';
import { S26026Page } from './s26026/s26026.page';
import { S26027Page } from './s26027/s26027.page';
import { S26028Page } from './s26028/s26028.page';
import { S26029Page } from './s26029/s26029.page';

const routes: Routes = [
  {
    path: '',
    component: S26001Page,
  },  
  {
    path: 's26001',
    canActivate:[ActiveGuard],  
    component: S26001Page,
  },
  {
    path: 's26002',
    canActivate:[ActiveGuard],  
    component: S26002Page,
  },
  {
    path: 's26003',
    canActivate:[ActiveGuard],  
    component: S26003Page,
  },
  {
    path: 's26003t',
    canActivate:[ActiveGuard],  
    component: S26003tPage,
  },
  {
    path: 's26004',
    canActivate:[ActiveGuard],  
    component: S26004Page,
  },
  {
    path: 's26005',
    canActivate:[ActiveGuard],  
    component: S26005Page,
  },
  {
    path: 's26006',
    canActivate:[ActiveGuard],  
    component: S26006Page,
  },
  {
    path: 's26007',
    canActivate:[ActiveGuard],  
    component: S26007Page,
  },
  {
    path: 's26007t',
    canActivate:[ActiveGuard],  
    component: S26007tPage,
  },
  {
    path: 's26008',
    canActivate:[ActiveGuard],  
    component: S26008Page,
  },
  {
    path: 's26009',
    canActivate:[ActiveGuard],  
    component: S26009Page,
  },
  {
    path: 's26010',
    canActivate:[ActiveGuard],  
    component: S26010Page,
  },
  {
    path: 's26011',
    canActivate:[ActiveGuard],  
    component: S26011Page,
  },
  {
    path: 's26012',
    canActivate:[ActiveGuard],  
    component: S26012Page,
  },
  {
    path: 's26012t',
    canActivate:[ActiveGuard],  
    component: S26012tPage,
  },
  {
    path: 's26013',
    canActivate:[ActiveGuard],  
    component: S26013Page,
  },
  {
    path: 's26014',
    canActivate:[ActiveGuard],  
    component: S26014Page,
  },
  {
    path: 's26015',
    canActivate:[ActiveGuard],  
    component: S26015Page,
  },
  {
    path: 's26016',
    canActivate:[ActiveGuard],  
    component: S26016Page,
  },
  {
    path: 's26016t',
    canActivate:[ActiveGuard],  
    component: S26016tPage,
  },
  {
    path: 's26017',
    canActivate:[ActiveGuard],  
    component: S26017Page,
  },
  {
    path: 's26018',
    canActivate:[ActiveGuard],  
    component: S26018Page,
  },
  {
    path: 's26019',
    canActivate:[ActiveGuard],  
    component: S26019Page,
  },
  {
    path: 's26020',
    canActivate:[ActiveGuard],  
    component: S26020Page,
  },
  {
    path: 's26020t',
    canActivate:[ActiveGuard],  
    component: S26020tPage,
  },
  {
    path: 's26021',
    canActivate:[ActiveGuard],  
    component: S26021Page,
  },
  {
    path: 's26022',
    canActivate:[ActiveGuard],  
    component: S26022Page,
  },
  {
    path: 's26023',
    canActivate:[ActiveGuard],  
    component: S26023Page,
  },
  {
    path: 's26023t',
    canActivate:[ActiveGuard],  
    component: S26023tPage,
  },
  {
    path: 's26024',
    canActivate:[ActiveGuard],  
    component: S26024Page,
  },
  {
    path: 's26025',
    canActivate:[ActiveGuard],  
    component: S26025Page,
  },
  {
    path: 's26026',
    canActivate:[ActiveGuard],  
    component: S26026Page,
  },
  {
    path: 's26027',
    canActivate:[ActiveGuard],  
    component: S26027Page,
  },
  {
    path: 's26028',
    canActivate:[ActiveGuard],  
    component: S26028Page,
  },
  {
    path: 's26029',
    canActivate:[ActiveGuard],  
    component: S26029Page,
  }, 
  
];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsOfEnquiryRoutingModule { }
