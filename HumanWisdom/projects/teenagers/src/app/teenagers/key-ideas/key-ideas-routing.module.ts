import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S83001Page } from './s83001/s83001.page';
import { S83002Page } from './s83002/s83002.page';
import { S83003Page } from './s83003/s83003.page';
import { S83004Page } from './s83004/s83004.page';
import { S83005Page } from './s83005/s83005.page';
import { S83005tPage } from './s83005t/s83005t.page';
import { S83006Page } from './s83006/s83006.page';
import { S83007Page } from './s83007/s83007.page';
import { S83008Page } from './s83008/s83008.page';
import { S83009Page } from './s83009/s83009.page';
import { S83010Page } from './s83010/s83010.page';
import { S83010tPage } from './s83010t/s83010t.page';
import { S83011Page } from './s83011/s83011.page';
import { S83011tPage } from './s83011t/s83011t.page';
import { S83012Page } from './s83012/s83012.page';
import { S83013Page } from './s83013/s83013.page';
import { S83013tPage } from './s83013t/s83013t.page';
import { S83014Page } from './s83014/s83014.page';
import { S83015Page } from './s83015/s83015.page';
import { S83016Page } from './s83016/s83016.page';
import { S83017Page } from './s83017/s83017.page';
import { S83017tPage } from './s83017t/s83017t.page';
import { S83018Page } from './s83018/s83018.page';
import { S83019Page } from './s83019/s83019.page';
import { S83020Page } from './s83020/s83020.page';
import { S83021Page } from './s83021/s83021.page';
import { S83022Page } from './s83022/s83022.page';
import { S83022tPage } from './s83022t/s83022t.page';
import { S83023Page } from './s83023/s83023.page';
import { S83024Page } from './s83024/s83024.page';
import { S83025Page } from './s83025/s83025.page';
import { S83026Page } from './s83026/s83026.page';
import { S83026tPage } from './s83026t/s83026t.page';
import { S83027Page } from './s83027/s83027.page';
import { S83028Page } from './s83028/s83028.page';
import { S83029Page } from './s83029/s83029.page';
import { S83030Page } from './s83030/s83030.page';
import { S83031Page } from './s83031/s83031.page';
import { S83032Page } from './s83032/s83032.page';
import { S83033Page } from './s83033/s83033.page';
import { S83034Page } from './s83034/s83034.page';
import { S83035Page } from './s83035/s83035.page';
import { S83036Page } from './s83036/s83036.page';
import { S83037Page } from './s83037/s83037.page';

const routes: Routes = [
  {
    path: '',    
    component: S83001Page,
  },  
  {
    path: 's83001',
    component: S83001Page,
  },
  {
    path: 's83002',
    component: S83002Page,
  },
  {
    path: 's83003',
    component: S83003Page,
  },
  {
    path: 's83004',
    component: S83004Page,
  },
  {
    path: 's83005',
    component: S83005Page,
  },
  {
    path: 's83005t',
    component: S83005tPage,
  },
  {
    path: 's83006',
    component: S83006Page,
  },
  {
    path: 's83007',
    component: S83007Page,
  },
  {
    path: 's83008',
    component: S83008Page,
  },
  {
    path: 's83009',
    component: S83009Page,
  },
  {
    path: 's83010',
    component: S83010Page,
  },
  {
    path: 's83010t',
    component: S83010tPage,
  },
  {
    path: 's83011',
    component: S83011Page,
  },
  {
    path: 's83011t',
    component: S83011tPage,
  },
  {
    path: 's83012',
    component: S83012Page,
  },
  {
    path: 's83013',
    component: S83013Page,
  },
  {
    path: 's83013t',
    component: S83013tPage,
  },
  {
    path: 's83014',
    component: S83014Page,
  },
  {
    path: 's83015',
    component: S83015Page,
  },
  {
    path: 's83016',
    component: S83016Page,
  },
  {
    path: 's83017',
    component: S83017Page,
  },
  {
    path: 's83017t',
    component: S83017tPage,
  },
  {
    path: 's83018',
    component: S83018Page,
  },
  {
    path: 's83019',
    component: S83019Page,
  },
  {
    path: 's83020',
    component: S83020Page,
  },
  {
    path: 's83021',
    component: S83021Page,
  },
  {
    path: 's83022',
    component: S83022Page,
  },
  {
    path: 's83022t',
    component: S83022tPage,
  },
  {
    path: 's83023',
    component: S83023Page,
  },
  {
    path: 's83024',
    component: S83024Page,
  },
  {
    path: 's83025',
    component: S83025Page,
  },
  {
    path: 's83026',
    component: S83026Page,
  },
  {
    path: 's83026t',
    component: S83026tPage,
  },
  {
    path: 's83027',
    component: S83027Page,
  },
  {
    path: 's83028',
    component: S83028Page,
  },
  {
    path: 's83029',
    component: S83029Page,
  },
  {
    path: 's83030',
    component: S83030Page,
  },
  {
    path: 's83031',
    component: S83031Page,
  },
  {
    path: 's83032',
    component: S83032Page,
  },
  {
    path: 's83033',
    component: S83033Page,
  },
  {
    path: 's83034',
    component: S83034Page,
  },
  {
    path: 's83035',
    component: S83035Page,
  },
  {
    path: 's83036',
    component: S83036Page,
  },
  {
    path: 's83037',
    component: S83037Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyIdeasRoutingModule { }
