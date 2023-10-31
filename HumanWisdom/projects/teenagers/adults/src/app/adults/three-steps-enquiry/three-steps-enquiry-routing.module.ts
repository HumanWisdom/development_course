import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S37000Page } from './s37000/s37000.page';
import { S37001Page } from './s37001/s37001.page';
import { S37002Page } from './s37002/s37002.page';
import { S37003Page } from './s37003/s37003.page';
import { S37003tPage } from './s37003t/s37003t.page';
import { S37004Page } from './s37004/s37004.page';
import { S37005Page } from './s37005/s37005.page';
import { S37005tPage } from './s37005t/s37005t.page';
import { S37006Page } from './s37006/s37006.page';
import { S37007Page } from './s37007/s37007.page';
import { S37007tPage } from './s37007t/s37007t.page';
import { S37008Page } from './s37008/s37008.page';
import { S37009Page } from './s37009/s37009.page';
import { S37009tPage } from './s37009t/s37009t.page';
import { S37010Page } from './s37010/s37010.page';
import { S37011Page } from './s37011/s37011.page';
import { S37012Page } from './s37012/s37012.page';
import { S37013Page } from './s37013/s37013.page';
import { S37014Page } from './s37014/s37014.page';
import { S37015Page } from './s37015/s37015.page';
import { S37016Page } from './s37016/s37016.page';
import { S37017Page } from './s37017/s37017.page';
import { S37017p1Page } from './s37017p1/s37017p1.page';
import { S37018Page } from './s37018/s37018.page';

const routes: Routes = [
  {
    path: '',
      component: S37000Page,
  },  
  {
    path: 's37000',
   canActivate:[ActiveGuard],  
    component: S37000Page,
  },   
  {
    path: 's37001',
   canActivate:[ActiveGuard],  
    component: S37001Page,
  },
  {
    path: 's37002',
   canActivate:[ActiveGuard],  
    component: S37002Page,
  },
  {
    path: 's37003',
   canActivate:[ActiveGuard],  
    component: S37003Page,
  },
  {
    path: 's37003t',
   canActivate:[ActiveGuard],  
    component: S37003tPage,
  },
  {
    path: 's37004',
   canActivate:[ActiveGuard],  
    component: S37004Page,
  },
  {
    path: 's37005',
   canActivate:[ActiveGuard],  
    component: S37005Page,
  },
  {
    path: 's37005t',
   canActivate:[ActiveGuard],  
    component: S37005tPage,
  },
  {
    path: 's37006',
   canActivate:[ActiveGuard],  
    component: S37006Page,
  },
  {
    path: 's37007',
   canActivate:[ActiveGuard],  
    component: S37007Page,
  },
  {
    path: 's37007t',
   canActivate:[ActiveGuard],  
    component: S37007tPage,
  },
  {
    path: 's37008',
   canActivate:[ActiveGuard],  
    component: S37008Page,
  },
  {
    path: 's37009',
   canActivate:[ActiveGuard],  
    component: S37009Page,
  },
  {
    path: 's37009t',
   canActivate:[ActiveGuard],  
    component: S37009tPage,
  },
  {
    path: 's37010',
   canActivate:[ActiveGuard],  
    component: S37010Page,
  },
  {
    path: 's37011',
   canActivate:[ActiveGuard],  
    component: S37011Page,
  },
  {
    path: 's37012',
   canActivate:[ActiveGuard],  
    component: S37012Page,
  },
  {
    path: 's37013',
   canActivate:[ActiveGuard],  
    component: S37013Page,
  },
  {
    path: 's37014',
   canActivate:[ActiveGuard],  
    component: S37014Page,
  },
  {
    path: 's37015',
   canActivate:[ActiveGuard],  
    component: S37015Page,
  },
  {
    path: 's37016',
   canActivate:[ActiveGuard],  
    component: S37016Page,
  },
  {
    path: 's37017',
   canActivate:[ActiveGuard],  
    component: S37017Page,
  },
  {
    path: 's37017p1',
   canActivate:[ActiveGuard],  
    component: S37017p1Page,
  },
  {
    path: 's37018',
   canActivate:[ActiveGuard],  
    component: S37018Page,
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeStepsEnquiryRoutingModule { }
