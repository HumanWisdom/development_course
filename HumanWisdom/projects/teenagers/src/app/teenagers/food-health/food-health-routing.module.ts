import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S128001Page } from './s128001/s128001.page';
import { S128002Page } from './s128002/s128002.page';
import { S128003Page } from './s128003/s128003.page';
import { S128003tPage } from './s128003t/s128003t.page';
import { S128004Page } from './s128004/s128004.page';
import { S128005Page } from './s128005/s128005.page';

import { S128006Page } from './s128006/s128006.page';
import { S128007Page } from './s128007/s128007.page';

import { S128008Page } from './s128008/s128008.page';

import { S128009Page } from './s128009/s128009.page';
import { S128010Page } from './s128010/s128010.page';
import { S128010tPage } from './s128010t/s128010t.page';
import { S128011Page } from './s128011/s128011.page';
import { S128012Page } from './s128012/s128012.page';
import { S128013Page } from './s128013/s128013.page';
import { S128014Page } from './s128014/s128014.page';
import { S128015Page } from './s128015/s128015.page';
import { S128016Page } from './s128016/s128016.page';
import { S128017Page } from './s128017/s128017.page';
import { S128018Page } from './s128018/s128018.page';
import { S128019Page } from './s128019/s128019.page';
import { S128020Page } from './s128020/s128020.page';

import { S128021Page } from './s128021/s128021.page';
import { S128022Page } from './s128022/s128022.page';
import { S128023Page } from './s128023/s128023.page';

import { S128024Page } from './s128024/s128024.page';
import { S128025Page } from './s128025/s128025.page';
import { S128026Page } from './s128026/s128026.page';
import { S128027Page } from './s128027/s128027.page';
import { S128028Page } from './s128028/s128028.page';

import { S128029Page } from './s128029/s128029.page';
import { S128030Page } from './s128030/s128030.page';
import { S128031Page } from './s128031/s128031.page';
import { S128031tPage } from './s128031t/s128031t.page';
import { S128032Page } from './s128032/s128032.page';
import { S128032tPage } from './s128032t/s128032t.page';
import { S128033Page } from './s128033/s128033.page';
import { S128034Page } from './s128034/s128034.page';

import { S128035Page } from './s128035/s128035.page';
import { S128036Page } from './s128036/s128036.page';

import { S128037Page } from './s128037/s128037.page';
import { S128038Page } from './s128038/s128038.page';
import { S128039Page } from './s128039/s128039.page';
import { S128039tPage } from './s128039t/s128039t.page';
import { S128040Page } from './s128040/s128040.page';

import { S128041Page } from './s128041/s128041.page';
import { S128042Page } from './s128042/s128042.page';
import { S128043Page } from './s128043/s128043.page';
import { S128044Page } from './s128044/s128044.page';
import { S128045Page } from './s128045/s128045.page';

import { S128046Page } from './s128046/s128046.page';
import { S128047Page } from './s128047/s128047.page';
import { S128048Page } from './s128048/s128048.page';
import { S128049Page } from './s128049/s128049.page';
import { S128050Page } from './s128050/s128050.page';

import { S128051Page } from './s128051/s128051.page';
import { S128052Page } from './s128052/s128052.page';
import { S128053Page } from './s128053/s128053.page';
import { S128054Page } from './s128054/s128054.page';
import { S128055Page } from './s128055/s128055.page';
import { S128056Page } from './s128056/s128056.page';
import { S128057Page } from './s128057/s128057.page';
import { S128058Page } from './s128058/s128058.page';

import { S128059Page } from './s128059/s128059.page';
import { S128060Page } from './s128060/s128060.page';

import { S128061Page } from './s128061/s128061.page';
import { S128062Page } from './s128062/s128062.page';
import { S128063Page } from './s128063/s128063.page';
import { S128064Page } from './s128064/s128064.page';
import { S128065Page } from './s128065/s128065.page';
import { S128065tPage } from './s128065t/s128065t.page';
import { S128066Page } from './s128066/s128066.page';
import { S128066p1Page } from './s128066p1/s128066p1.page';
import { S128067Page } from './s128067/s128067.page';
import { S128067tPage } from './s128067t/s128067t.page';
import { S128068Page } from './s128068/s128068.page';
import { S128069Page } from './s128069/s128069.page';
import { S128070Page } from './s128070/s128070.page';
import { S128070tPage } from './s128070t/s128070t.page';
import { S128071Page } from './s128071/s128071.page';
import { S128071tPage } from './s128071t/s128071t.page';
import { S128072Page } from './s128072/s128072.page';

import { S128073Page } from './s128073/s128073.page';
import { S128074Page } from './s128074/s128074.page';
import { S128075Page } from './s128075/s128075.page';
import { S128076Page } from './s128076/s128076.page';
import { S128077Page } from './s128077/s128077.page';
import { S128078Page } from './s128078/s128078.page';
import { S128079Page } from './s128079/s128079.page';
import { S128080Page } from './s128080/s128080.page';

const routes: Routes = [
  {
    path: '', 
 canActivate: [ActiveGuard],
    component: S128001Page,
  },  
  {
    path: 's128001',  canActivate: [ActiveGuard],
    component: S128001Page,
  },
  {
    path: 's128002', 
 canActivate: [ActiveGuard],
    component: S128002Page,
  },
  {
    path: 's128003', 
 canActivate: [ActiveGuard],
    component: S128003Page,
  },
  {
    path: 's128003t' ,
     canActivate: [ActiveGuard],
    component: S128003tPage,
  },
  {
    path: 's128004', 
     canActivate: [ActiveGuard],
    component: S128004Page,
  },
  {
    path: 's128005', 
     canActivate: [ActiveGuard],
    component: S128005Page,
  },
 
  {
    path: 's128006', 
     canActivate: [ActiveGuard],
    component: S128006Page,
  },
  {
    path: 's128007', 
     canActivate: [ActiveGuard],
    component: S128007Page,
  },
 
  {
    path: 's128008', 
     canActivate: [ActiveGuard],
    component: S128008Page,
  },
 
  {
    path: 's128009', 
     canActivate: [ActiveGuard],
    component: S128009Page,
  },
  {
    path: 's128010', 
     canActivate: [ActiveGuard],
    component: S128010Page,
  },
 
  {
    path: 's128010t' ,
     canActivate: [ActiveGuard],
    component: S128010tPage,
  },
 
  {
    path: 's128011', 
     canActivate: [ActiveGuard],
    component: S128011Page,
  },
  {
    path: 's128012', 
     canActivate: [ActiveGuard],
    component: S128012Page,
  },
  {
    path: 's128013', 
     canActivate: [ActiveGuard],
    component: S128013Page,
  },
  {
    path: 's128014', 
     canActivate: [ActiveGuard],
    component: S128014Page,
  },
  {
    path: 's128015', 
     canActivate: [ActiveGuard],
    component: S128015Page,
  },
  {
    path: 's128016', 
     canActivate: [ActiveGuard],
    component: S128016Page,
  },
  {
    path: 's128017', 
     canActivate: [ActiveGuard],
    component: S128017Page,
  },
  {
    path: 's128018', 
     canActivate: [ActiveGuard],
    component: S128018Page,
  },
  {
    path: 's128019', 
     canActivate: [ActiveGuard],
    component: S128019Page,
  },
  {
    path: 's128020', 
     canActivate: [ActiveGuard],
    component: S128020Page,
  },
 
  {
    path: 's128021', 
     canActivate: [ActiveGuard],
    component: S128021Page,
  },
  {
    path: 's128022', 
     canActivate: [ActiveGuard],
    component: S128022Page,
  },
  {
    path: 's128023', 
     canActivate: [ActiveGuard],
    component: S128023Page,
  },
 
  {
    path: 's128024', 
     canActivate: [ActiveGuard],
    component: S128024Page,
  },
  {
    path: 's128025', 
     canActivate: [ActiveGuard],
    component: S128025Page,
  },
  {
    path: 's128026', 
     canActivate: [ActiveGuard],
    component: S128026Page,
  },
  {
    path: 's128027', 
     canActivate: [ActiveGuard],
    component: S128027Page,
  },
  {
    path: 's128028', 
     canActivate: [ActiveGuard],
    component: S128028Page,
  },
 
  {
    path: 's128029', 
     canActivate: [ActiveGuard],
    component: S128029Page,
  },
  {
    path: 's128030', 
     canActivate: [ActiveGuard],
    component: S128030Page,
  },
  {
    path: 's128031', 
     canActivate: [ActiveGuard],
    component: S128031Page,
  },
  {
    path: 's128031t' ,
     canActivate: [ActiveGuard],
    component: S128031tPage,
  },
  {
    path: 's128032', 
     canActivate: [ActiveGuard],
    component: S128032Page,
  },
  {
    path: 's128032t', 
     canActivate: [ActiveGuard],
    component: S128032tPage,
  },
  {
    path: 's128033', 
     canActivate: [ActiveGuard],
    component: S128033Page,
  },
  {
    path: 's128034', 
     canActivate: [ActiveGuard],
    component: S128034Page,
  },
  
  {
    path: 's128035', 
     canActivate: [ActiveGuard],
    component: S128035Page,
  },
  {
    path: 's128036', 
     canActivate: [ActiveGuard],
    component: S128036Page,
  },
 
  {
    path: 's128037', 
     canActivate: [ActiveGuard],
    component: S128037Page,
  },
  {
    path: 's128038', 
     canActivate: [ActiveGuard],
    component: S128038Page,
  },
  {
    path: 's128039', 
     canActivate: [ActiveGuard],
    component: S128039Page,
  },
  {
    path: 's128039t' ,
     canActivate: [ActiveGuard],
    component: S128039tPage,
  },
  {
    path: 's128040', 
     canActivate: [ActiveGuard],
    component: S128040Page,
  },
 
  {
    path: 's128041', 
     canActivate: [ActiveGuard],
    component: S128041Page,
  },
  {
    path: 's128042', 
     canActivate: [ActiveGuard],
    component: S128042Page,
  },
  {
    path: 's128043', 
     canActivate: [ActiveGuard],
    component: S128043Page,
  },
  {
    path: 's128044', 
     canActivate: [ActiveGuard],
    component: S128044Page,
  },
  {
    path: 's128045', 
     canActivate: [ActiveGuard],
    component: S128045Page,
  },
 
  {
    path: 's128046', 
     canActivate: [ActiveGuard],
    component: S128046Page,
  },
  {
    path: 's128047', 
     canActivate: [ActiveGuard],
    component: S128047Page,
  },
  {
    path: 's128048', 
     canActivate: [ActiveGuard],
    component: S128048Page,
  },
  {
    path: 's128049', 
     canActivate: [ActiveGuard],
    component: S128049Page,
  },
  {
    path: 's128050', 
     canActivate: [ActiveGuard],
    component: S128050Page,
  },
 
  {
    path: 's128051', 
     canActivate: [ActiveGuard],
    component: S128051Page,
  },
  {
    path: 's128052', 
     canActivate: [ActiveGuard],
    component: S128052Page,
  },
  {
    path: 's128053', 
     canActivate: [ActiveGuard],
    component: S128053Page,
  },
  {
    path: 's128054', 
     canActivate: [ActiveGuard],
    component: S128054Page,
  },
  {
    path: 's128055', 
     canActivate: [ActiveGuard],
    component: S128055Page,
  },
  {
    path: 's128056', 
     canActivate: [ActiveGuard],
    component: S128056Page,
  },
  {
    path: 's128057', 
     canActivate: [ActiveGuard],
    component: S128057Page,
  },
  {
    path: 's128058', 
     canActivate: [ActiveGuard],
    component: S128058Page,
  },
 
  {
    path: 's128059', 
     canActivate: [ActiveGuard],
    component: S128059Page,
  },
  {
    path: 's128060', 
     canActivate: [ActiveGuard],
    component: S128060Page,
  },
  
  {
    path: 's128061', 
     canActivate: [ActiveGuard],
    component: S128061Page,
  },
  {
    path: 's128062', 
     canActivate: [ActiveGuard],
    component: S128062Page,
  },
  {
    path: 's128063', 
     canActivate: [ActiveGuard],
    component: S128063Page,
  },
  {
    path: 's128064', 
     canActivate: [ActiveGuard],
    component: S128064Page,
  },
  {
    path: 's128065', 
     canActivate: [ActiveGuard],
    component: S128065Page,
  },
  {
    path: 's128065t', 
     canActivate: [ActiveGuard],
    component: S128065tPage,
  },
  {
    path: 's128066', 
     canActivate: [ActiveGuard],
    component: S128066Page,
  },
  {
    path: 's128066p1', 
     canActivate: [ActiveGuard],
    component: S128066p1Page,
  },
  {
    path: 's128067', 
     canActivate: [ActiveGuard],
    component: S128067Page,
  },
  {
    path: 's128067t' ,
     canActivate: [ActiveGuard],
    component: S128067tPage,
  },
  {
    path: 's128068', 
     canActivate: [ActiveGuard],
    component: S128068Page,
  },
  {
    path: 's128069', 
     canActivate: [ActiveGuard],
    component: S128069Page,
  },
  {
    path: 's128070', 
     canActivate: [ActiveGuard],
    component: S128070Page,
  },
  {
    path: 's128070t', 
     canActivate: [ActiveGuard],
    component: S128070tPage,
  },
  {
    path: 's128071', 
     canActivate: [ActiveGuard],
    component: S128071Page,
  },
  {
    path: 's128071t' ,
     canActivate: [ActiveGuard],
    component: S128071tPage,
  },
  {
    path: 's128072', 
     canActivate: [ActiveGuard],
    component: S128072Page,
  },
 
  {
    path: 's128073', 
     canActivate: [ActiveGuard],
    component: S128073Page,
  },
  {
    path: 's128074', 
     canActivate: [ActiveGuard],
    component: S128074Page,
  },
  {
    path: 's128075', 
     canActivate: [ActiveGuard],
    component: S128075Page,
  },
  {
    path: 's128076', 
     canActivate: [ActiveGuard],
    component: S128076Page,
  },
  {
    path: 's128077', 
     canActivate: [ActiveGuard],
    component: S128077Page,
  },
  {
    path: 's128078', 
     canActivate: [ActiveGuard],
    component: S128078Page,
  },
  {
    path: 's128079', 
     canActivate: [ActiveGuard],
    component: S128079Page,
  },
  {
    path: 's128080', 
     canActivate: [ActiveGuard],
    component: S128080Page,
  },
 
 
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodHealthRoutingModule { }
