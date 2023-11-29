import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S97001Page } from './s97001/s97001.page';
import { S97002Page } from './s97002/s97002.page';
import { S97003Page } from './s97003/s97003.page';
import { S97004Page } from './s97004/s97004.page';
import { S97004tPage } from './s97004t/s97004t.page';
import { S97005Page } from './s97005/s97005.page';
import { S97006Page } from './s97006/s97006.page';
import { S97006tPage } from './s97006t/s97006t.page';
import { S97007Page } from './s97007/s97007.page';
import { S97008Page } from './s97008/s97008.page';
import { S97008tPage } from './s97008t/s97008t.page';
import { S97009Page } from './s97009/s97009.page';
import { S97010Page } from './s97010/s97010.page';
import { S97010tPage } from './s97010t/s97010t.page';
import { S97011Page } from './s97011/s97011.page';
import { S97012Page } from './s97012/s97012.page';
import { S97013Page } from './s97013/s97013.page';
import { S97014Page } from './s97014/s97014.page';
import { S97015Page } from './s97015/s97015.page';
import { S97016Page } from './s97016/s97016.page';
import { S97017Page } from './s97017/s97017.page';
import { S97018Page } from './s97018/s97018.page';
import { S97018p1Page } from './s97018p1/s97018p1.page';
import { S97019Page } from './s97019/s97019.page';

const routes: Routes = [
  {
    path: '',
      component: S97001Page,
  },  
  {
    path: 's97001',
     
    component: S97001Page,
  },   
  {
    path: 's97002',
     
    component: S97002Page,
  },
  {
    path: 's97003',
     
    component: S97003Page,
  },
  {
    path: 's97004',
     
    component: S97004Page,
  },
  {
    path: 's97004t',
     
    component: S97004tPage,
  },
  {
    path: 's97005',
     
    component: S97005Page,
  },
  {
    path: 's97006',
     
    component: S97006Page,
  },
  {
    path: 's97006t',
     
    component: S97006tPage,
  },
  {
    path: 's97007',
     
    component: S97007Page,
  },
  {
    path: 's97008',
     
    component: S97008Page,
  },
  {
    path: 's97008t',
     
    component: S97008tPage,
  },
  {
    path: 's97009',
     
    component: S97009Page,
  },
  {
    path: 's97010',
     
    component: S97010Page,
  },
  {
    path: 's97010t',
     
    component: S97010tPage,
  },
  {
    path: 's97011',
     
    component: S97011Page,
  },
  {
    path: 's97012',
     
    component: S97012Page,
  },
  {
    path: 's97013',
     
    component: S97013Page,
  },
  {
    path: 's97014',
     
    component: S97014Page,
  },
  {
    path: 's97015',
     
    component: S97015Page,
  },
  {
    path: 's97016',
     
    component: S97016Page,
  },
  {
    path: 's97017',
     
    component: S97017Page,
  },
  {
    path: 's97018',
     
    component: S97018Page,
  },
  {
    path: 's97018p1',
     
    component: S97018p1Page,
  },
  {
    path: 's97019',
     
    component: S97019Page,
  },
 
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeStepsEnquiryRoutingModule { }
