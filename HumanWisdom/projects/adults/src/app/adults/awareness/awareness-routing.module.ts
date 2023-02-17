import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';


import { S39000Page } from './s39000/s39000.page';
import { S39001Page } from './s39001/s39001.page';
import { S39002Page } from './s39002/s39002.page';
import { S39003Page } from './s39003/s39003.page';
import { S39004Page } from './s39004/s39004.page';
import { S39004tPage } from './s39004t/s39004t.page';
import { S39005Page } from './s39005/s39005.page';
import { S39005tPage } from './s39005t/s39005t.page';
import { S39006Page } from './s39006/s39006.page';
import { S39006tPage } from './s39006t/s39006t.page';
import { S39007Page } from './s39007/s39007.page';
import { S39007tPage } from './s39007t/s39007t.page';
import { S39008Page } from './s39008/s39008.page';
import { S39009Page } from './s39009/s39009.page';
import { S39009tPage } from './s39009t/s39009t.page';
import { S39011Page } from './s39011/s39011.page';
import { S39012Page } from './s39012/s39012.page';
import { S39012tPage } from './s39012t/s39012t.page';
import { S39013Page } from './s39013/s39013.page';
import { S39014Page } from './s39014/s39014.page';
import { S39015Page } from './s39015/s39015.page';
import { S39016Page } from './s39016/s39016.page';
import { S39016tPage } from './s39016t/s39016t.page';
import { S39017Page } from './s39017/s39017.page';
import { S39017tPage } from './s39017t/s39017t.page';
import { S39018Page } from './s39018/s39018.page';
import { S39019Page } from './s39019/s39019.page';
import { S39020Page } from './s39020/s39020.page';
import { S39021Page } from './s39021/s39021.page';
import { S39022Page } from './s39022/s39022.page';
import { S39023Page } from './s39023/s39023.page';
import { S39024Page } from './s39024/s39024.page';
import { S39025Page } from './s39025/s39025.page';
import { S39026Page } from './s39026/s39026.page';
import { S39027Page } from './s39027/s39027.page';
import { S39028Page } from './s39028/s39028.page';
import { S39029Page } from './s39029/s39029.page';

const routes: Routes = [
  {
    path: '',    
    component: S39000Page,
  },  
  {
    path: 's39000',
    component: S39000Page,
  },  
  {
    path: 's39001',
     canActivate:[ActiveGuard],  
    component: S39001Page,
  },
  {
    path: 's39002',
     canActivate:[ActiveGuard],  
    component: S39002Page,
  },
  {
    path: 's39003',
     canActivate:[ActiveGuard],  
    component: S39003Page,
  },
  {
    path: 's39004',
     canActivate:[ActiveGuard],  
    component: S39004Page,
  },
  {
    path: 's39004t',
     canActivate:[ActiveGuard],  
    component: S39004tPage,
  },
  {
    path: 's39005',
     canActivate:[ActiveGuard],  
    component: S39005Page,
  },
  {
    path: 's39005t',
     canActivate:[ActiveGuard],  
    component: S39005tPage,
  },
  {
    path: 's39006',
     canActivate:[ActiveGuard],  
    component: S39006Page,
  },
  {
    path: 's39006t',
     canActivate:[ActiveGuard],  
    component: S39006tPage,
  },
  {
    path: 's39007',
     canActivate:[ActiveGuard],  
    component: S39007Page,
  },
  {
    path: 's39007t',
     canActivate:[ActiveGuard],  
    component: S39007tPage,
  },
  {
    path: 's39008',
     canActivate:[ActiveGuard],  
    component: S39008Page,
  },
  {
    path: 's39009',
     canActivate:[ActiveGuard],  
    component: S39009Page,
  },
  {
    path: 's39009t',
     canActivate:[ActiveGuard],  
    component: S39009tPage,
  },
  {
    path: 's39011',
     canActivate:[ActiveGuard],  
    component: S39011Page,
  },
  {
    path: 's39012',
     canActivate:[ActiveGuard],  
    component: S39012Page,
  },
  {
    path: 's39012t',
     canActivate:[ActiveGuard],  
    component: S39012tPage,
  },
  {
    path: 's39013',
     canActivate:[ActiveGuard],  
    component: S39013Page,
  },
  {
    path: 's39014',
     canActivate:[ActiveGuard],  
    component: S39014Page,
  },
  {
    path: 's39015',
     canActivate:[ActiveGuard],  
    component: S39015Page,
  },
  {
    path: 's39016',
     canActivate:[ActiveGuard],  
    component: S39016Page,
  },  
  {
    path: 's39016t',
     canActivate:[ActiveGuard],  
    component: S39016tPage,
  },
  {
    path: 's39017',
     canActivate:[ActiveGuard],  
    component: S39017Page,
  },
  {
    path: 's39017t',
     canActivate:[ActiveGuard],  
    component: S39017tPage,
  },
  {
    path: 's39018',
     canActivate:[ActiveGuard],  
    component: S39018Page,
  },
  {
    path: 's39019',
     canActivate:[ActiveGuard],  
    component: S39019Page,
  },
  {
    path: 's39020',
     canActivate:[ActiveGuard],  
    component: S39020Page,
  },
  {
    path: 's39021',
     canActivate:[ActiveGuard],  
    component: S39021Page,
  },
  {
    path: 's39022',
     canActivate:[ActiveGuard],  
    component: S39022Page,
  },
  {
    path: 's39023',
     canActivate:[ActiveGuard],  
    component: S39023Page,
  },
  {
    path: 's39024',
     canActivate:[ActiveGuard],  
    component: S39024Page,
  },
  {
    path: 's39025',
     canActivate:[ActiveGuard],  
    component: S39025Page,
  },
  {
    path: 's39026',
     canActivate:[ActiveGuard],  
    component: S39026Page,
  },
  {
    path: 's39027',
     canActivate:[ActiveGuard],  
    component: S39027Page,
  },
  {
    path: 's39028',
     canActivate:[ActiveGuard],  
    component: S39028Page,
  },
  {
    path: 's39029',
     canActivate:[ActiveGuard],  
    component: S39029Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwarenessRoutingModule { }
