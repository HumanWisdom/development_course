import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S101001Page } from './s101001/s101001.page';
import { S101002Page } from './s101002/s101002.page';
import { S101003Page } from './s101003/s101003.page';
import { S101004Page } from './s101004/s101004.page';
import { S101004tPage } from './s101004t/s101004t.page';
import { S101005Page } from './s101005/s101005.page';
import { S101006Page } from './s101006/s101006.page';
import { S101006tPage } from './s101006t/s101006t.page';
import { S101007Page } from './s101007/s101007.page';
import { S101007tPage } from './s101007t/s101007t.page';
import { S101008Page } from './s101008/s101008.page';
import { S101009Page } from './s101009/s101009.page'
import { S101010Page } from './s101010/s101010.page';
import { S101010tPage } from './s101010t/s101010t.page';
import { S101011Page } from './s101011/s101011.page';
import { S101012Page } from './s101012/s101012.page';
import { S101013Page } from './s101013/s101013.page';
import { S101014Page } from './s101014/s101014.page';
import { S101014tPage } from './s101014t/s101014t.page';
import { S101015Page } from './s101015/s101015.page';
import { S101015tPage } from './s101015t/s101015t.page';
import { S101016Page } from './s101016/s101016.page';
import { S101017Page } from './s101017/s101017.page';
import { S101018Page } from './s101018/s101018.page';
import { S101019Page } from './s101019/s101019.page';
import { S101020Page } from './s101020/s101020.page';
import { S101021Page } from './s101021/s101021.page';
import { S101022Page } from './s101022/s101022.page';
import { S101023Page } from './s101023/s101023.page';

const routes: Routes = [
  {
    path: '',    
     component: S101001Page,
  },  
  {
    path: 's101001',
      
    component: S101001Page,
  },
  {
    path: 's101002',
      
    component: S101002Page,
  },
  {
    path: 's101003',
      
    component: S101003Page,
  },
  {
    path: 's101004',
      
    component: S101004Page,
  },
  {
    path: 's101004t',
      
    component: S101004tPage,
  },
  {
    path: 's101005',
      
    component: S101005Page,
  },
  {
    path: 's101006',
      
    component: S101006Page,
  },
  {
    path: 's101006t',
      
    component: S101006tPage,
  },
  {
    path: 's101007',
      
    component: S101007Page,
  },
  {
    path: 's101007t',
      
    component: S101007tPage,
  },
  {
    path: 's101008',
      
    component: S101008Page,
  },
  {
    path: 's101009',
      
    component: S101009Page,
  },
  {
    path: 's101010',
      
    component: S101010Page,
  },
  {
    path: 's101010t',
      
    component: S101010tPage,
  },
  {
    path: 's101011',
      
    component: S101011Page,
  },
  {
    path: 's101012',
      
    component: S101012Page,
  },
  {
    path: 's101013',
      
    component: S101013Page,
  },
  {
    path: 's101014',
      
    component: S101014Page,
  },
  {
    path: 's101014t',
      
    component: S101014tPage,
  },
  {
    path: 's101015',
      
    component: S101015Page,
  },
  {
    path: 's101015t',
      
    component: S101015tPage,
  },
  {
    path: 's101016',
      
    component: S101016Page,
  },
  {
    path: 's101017',
      
    component: S101017Page,
  },
  {
    path: 's101018',
      
    component: S101018Page,
  },
  {
    path: 's101019',
      
    component: S101019Page,
  },
  {
    path: 's101020',
      
    component: S101020Page,
  },
  {
    path: 's101021',
      
    component: S101021Page,
  },
  {
    path: 's101022',
      
    component: S101022Page,
  },
  {
    path: 's101023',
      
    component: S101023Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoJudgementRoutingModule { }
