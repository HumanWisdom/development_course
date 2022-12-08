import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S43000Page } from './s43000/s43000.page';
import { S43001Page } from './s43001/s43001.page';
import { S43002Page } from './s43002/s43002.page';
import { S43002tPage } from './s43002t/s43002t.page';
import { S43003Page } from './s43003/s43003.page';
import { S43004Page } from './s43004/s43004.page';
import { S43004tPage } from './s43004t/s43004t.page';
import { S43005Page } from './s43005/s43005.page';
import { S43006Page } from './s43006/s43006.page';
import { S43006tPage } from './s43006t/s43006t.page';
import { S43007Page } from './s43007/s43007.page';
import { S43008Page } from './s43008/s43008.page';
import { S43009Page } from './s43009/s43009.page';
import { S43010Page } from './s43010/s43010.page';
import { S43011Page } from './s43011/s43011.page';
import { S43012Page } from './s43012/s43012.page';
import { S43012tPage } from './s43012t/s43012t.page';
import { S43013Page } from './s43013/s43013.page';
import { S43014Page } from './s43014/s43014.page';
import { S43015Page } from './s43015/s43015.page';
import { S43015tPage } from './s43015t/s43015t.page';
import { S43016Page } from './s43016/s43016.page';
import { S43017Page } from './s43017/s43017.page';
import { S43017tPage } from './s43017t/s43017t.page';
import { S43018Page } from './s43018/s43018.page';
import { S43019Page } from './s43019/s43019.page';
import { S43020Page } from './s43020/s43020.page';
import { S43020tPage } from './s43020t/s43020t.page';
import { S43021Page } from './s43021/s43021.page';
import { S43022Page } from './s43022/s43022.page';
import { S43023Page } from './s43023/s43023.page';
import { S43024Page } from './s43024/s43024.page';
import { S43024tPage } from './s43024t/s43024t.page';
import { S43025Page } from './s43025/s43025.page';
import { S43026Page } from './s43026/s43026.page';
import { S43027Page } from './s43027/s43027.page';
import { S43028Page } from './s43028/s43028.page';
import { S43029Page } from './s43029/s43029.page';
import { S43029p1Page } from './s43029p1/s43029p1.page';
import { S43029p2Page } from './s43029p2/s43029p2.page';
import { S43029p3Page } from './s43029p3/s43029p3.page';
import { S43029p4Page } from './s43029p4/s43029p4.page';
import { S43034Page } from './s43034/s43034.page';
import { S43035Page } from './s43035/s43035.page';

const routes: Routes = [
  {
    path: '',
     component: S43000Page,
  },  
  {
    path: 's43000',
    canActivate:[ActiveGuard],  
    component: S43000Page,
  },   {

    path: 's43001',
    canActivate:[ActiveGuard],  
    component: S43001Page,
  },
  {
    path: 's43002',
    canActivate:[ActiveGuard],  
    component: S43002Page,
  },
  {
    path: 's43002t',
    canActivate:[ActiveGuard],  
    component: S43002tPage,
  },
  {
    path: 's43003',
    canActivate:[ActiveGuard],  
    component: S43003Page,
  },
  {
    path: 's43004',
    canActivate:[ActiveGuard],  
    component: S43004Page,
  },
  {
    path: 's43004t',
    canActivate:[ActiveGuard],  
    component: S43004tPage,
  },
  {
    path: 's43005',
    canActivate:[ActiveGuard],  
    component: S43005Page,
  },
  {
    path: 's43006',
    canActivate:[ActiveGuard],  
    component: S43006Page,
  },
  {
    path: 's43006t',
    canActivate:[ActiveGuard],  
    component: S43006tPage,
  },
  {
    path: 's43007',
    canActivate:[ActiveGuard],  
    component: S43007Page,
  },
  {
    path: 's43008',
    canActivate:[ActiveGuard],  
    component: S43008Page,
  },
  {
    path: 's43009',
    canActivate:[ActiveGuard],  
    component: S43009Page,
  },
  {
    path: 's43010',
    canActivate:[ActiveGuard],  
    component: S43010Page,
  },
  {
    path: 's43011',
    canActivate:[ActiveGuard],  
    component: S43011Page,
  },
  {
    path: 's43012',
    canActivate:[ActiveGuard],  
    component: S43012Page,
  },
  {
    path: 's43012t',
    canActivate:[ActiveGuard],  
    component: S43012tPage,
  },
  {
    path: 's43013',
    canActivate:[ActiveGuard],  
    component: S43013Page,
  },
  {
    path: 's43014',
    canActivate:[ActiveGuard],  
    component: S43014Page,
  },
  {
    path: 's43015',
    canActivate:[ActiveGuard],  
    component: S43015Page,
  },
  {
    path: 's43015t',
    canActivate:[ActiveGuard],  
    component: S43015tPage,
  },
  {
    path: 's43016',
    canActivate:[ActiveGuard],  
    component: S43016Page,
  },
  {
    path: 's43017',
    canActivate:[ActiveGuard],  
    component: S43017Page,
  },
  {
    path: 's43017t',
    canActivate:[ActiveGuard],  
    component: S43017tPage,
  },
  {
    path: 's43018',
    canActivate:[ActiveGuard],  
    component: S43018Page,
  },
  {
    path: 's43019',
    canActivate:[ActiveGuard],  
    component: S43019Page,
  },
  {
    path: 's43020',
    canActivate:[ActiveGuard],  
    component: S43020Page,
  },
  {
    path: 's43020t',
    canActivate:[ActiveGuard],  
    component: S43020tPage,
  },
  {
    path: 's43021',
    canActivate:[ActiveGuard],  
    component: S43021Page,
  },
  {
    path: 's43022',
    canActivate:[ActiveGuard],  
    component: S43022Page,
  },
  {
    path: 's43023',
    canActivate:[ActiveGuard],  
    component: S43023Page,
  },
  {
    path: 's43024',
    canActivate:[ActiveGuard],  
    component: S43024Page,
  },
  {
    path: 's43024t',
    canActivate:[ActiveGuard],  
    component: S43024tPage,
  },
  {
    path: 's43025',
    canActivate:[ActiveGuard],  
    component: S43025Page,
  },
  {
    path: 's43026',
    canActivate:[ActiveGuard],  
    component: S43026Page,
  },
  {
    path: 's43027',
    canActivate:[ActiveGuard],  
    component: S43027Page,
  },
  {
    path: 's43028',
    canActivate:[ActiveGuard],  
    component: S43028Page,
  },
  {
    path: 's43029',
    canActivate:[ActiveGuard],  
    component: S43029Page,
  },
  {
    path: 's43029p1',
    canActivate:[ActiveGuard],  
    component: S43029p1Page,
  },
  {
    path: 's43029p2',
    canActivate:[ActiveGuard],  
    component: S43029p2Page,
  },
  {
    path: 's43029p3',
    canActivate:[ActiveGuard],  
    component: S43029p3Page,
  },
  {
    path: 's43029p4',
    canActivate:[ActiveGuard],  
    component: S43029p4Page,
  },
  {
    path: 's43034',
    canActivate:[ActiveGuard],  
    component: S43034Page,
  },
  {
    path: 's43035',
    canActivate:[ActiveGuard],  
    component: S43035Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObstaclesEnquiryRoutingModule { }
