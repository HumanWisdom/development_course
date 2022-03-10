import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S433Page } from './s433/s433.page';
import { S434Page } from './s434/s434.page';
import { S435Page } from './s435/s435.page';
import { S435tPage } from './s435t/s435t.page';
import { S436Page } from './s436/s436.page';
import { S437Page } from './s437/s437.page';
import { S438Page } from './s438/s438.page';
import { S439Page } from './s439/s439.page';
import { S440Page } from './s440/s440.page';
import { S441Page } from './s441/s441.page';
import { S441tPage } from './s441t/s441t.page';
import { S442Page } from './s442/s442.page';
import { S443Page } from './s443/s443.page';
import { S444Page } from './s444/s444.page';
import { S445Page } from './s445/s445.page';
import { S446Page } from './s446/s446.page';
import { S447Page } from './s447/s447.page';
import { S448Page } from './s448/s448.page';
import { S448p1Page } from './s448p1/s448p1.page';
import { S448p2Page } from './s448p2/s448p2.page';
import { S448p3Page } from './s448p3/s448p3.page';
import { S448p4Page } from './s448p4/s448p4.page';
import { S448p5Page } from './s448p5/s448p5.page';
import { S448p6Page } from './s448p6/s448p6.page';
import { S449Page } from './s449/s449.page';
import { S450Page } from './s450/s450.page';
import { S451Page } from './s451/s451.page';
import { S452Page } from './s452/s452.page';
import { S453Page } from './s453/s453.page';
import { S454Page } from './s454/s454.page';
import { S455Page } from './s455/s455.page';
import { S456Page } from './s456/s456.page';
import { S457Page } from './s457/s457.page';
import { S457tPage } from './s457t/s457t.page';
import { S458Page } from './s458/s458.page';
import { S459Page } from './s459/s459.page';
import { S460Page } from './s460/s460.page';
import { S461Page } from './s461/s461.page';
import { S462Page } from './s462/s462.page';
import { S463Page } from './s463/s463.page';
import { S464Page } from './s464/s464.page';
import { S465Page } from './s465/s465.page';
import { S466Page } from './s466/s466.page';
import { S467Page } from './s467/s467.page';
import { S468Page } from './s468/s468.page';
import { S469Page } from './s469/s469.page';
import { S470Page } from './s470/s470.page';
import { S471Page } from './s471/s471.page';
import { S472Page } from './s472/s472.page';
import { S473Page } from './s473/s473.page';
import { S474Page } from './s474/s474.page';
import { S475Page } from './s475/s475.page';
import { S476Page } from './s476/s476.page';
import { S477Page } from './s477/s477.page';
import { S478Page } from './s478/s478.page';
import { S479Page } from './s479/s479.page';
import { S480Page } from './s480/s480.page';
import { S481Page } from './s481/s481.page';
import { S482Page } from './s482/s482.page';
import { S483Page } from './s483/s483.page';
import { S483p1Page } from './s483p1/s483p1.page';
import { S483p2Page } from './s483p2/s483p2.page';
import { S483p3Page } from './s483p3/s483p3.page';
import { S483p4Page } from './s483p4/s483p4.page';
import { S484Page } from './s484/s484.page';
import { S485Page } from './s485/s485.page';

const routes: Routes = [
  {
    path: '',
     component: S433Page,
  },  
  {
    path: 's433',
    canActivate:[ActiveGuard],  
    component: S433Page,
  },  
  {
    path: 's434',
    canActivate:[ActiveGuard],  
    component: S434Page,
  },
  {
    path: 's435',
    canActivate:[ActiveGuard],  
    component: S435Page,
  },
  {
    path: 's435t',
    canActivate:[ActiveGuard],  
    component: S435tPage,
  },
  {
    path: 's436',
    canActivate:[ActiveGuard],  
    component: S436Page,
  },
  {
    path: 's437',
    canActivate:[ActiveGuard],  
    component: S437Page,
  },
  {
    path: 's438',
    canActivate:[ActiveGuard],  
    component: S438Page,
  },
  {
    path: 's439',
    canActivate:[ActiveGuard],  
    component: S439Page,
  },
  {
    path: 's440',
    canActivate:[ActiveGuard],  
    component: S440Page,
  },
  {
    path: 's441',
    canActivate:[ActiveGuard],  
    component: S441Page,
  },
  {
    path: 's441t',
    canActivate:[ActiveGuard],  
    component: S441tPage,
  },
  {
    path: 's442',
    canActivate:[ActiveGuard],  
    component: S442Page,
  },
  {
    path: 's443',
    canActivate:[ActiveGuard],  
    component: S443Page,
  },
  {
    path: 's444',
    canActivate:[ActiveGuard],  
    component: S444Page,
  },
  {
    path: 's445',
    canActivate:[ActiveGuard],  
    component: S445Page,
  },
  {
    path: 's446',
    canActivate:[ActiveGuard],  
    component: S446Page,
  },
  {
    path: 's447',
    canActivate:[ActiveGuard],  
    component: S447Page,
  },
  {
    path: 's448',
    canActivate:[ActiveGuard],  
    component: S448Page,
  },
  {
    path: 's448p1',
    canActivate:[ActiveGuard],  
    component: S448p1Page,
  },
  {
    path: 's448p2',
    canActivate:[ActiveGuard],  
    component: S448p2Page,
  },
  {
    path: 's448p3',
    canActivate:[ActiveGuard],  
    component: S448p3Page,
  },
  {
    path: 's448p4',
    canActivate:[ActiveGuard],  
    component: S448p4Page,
  },
  {
    path: 's448p5',
    canActivate:[ActiveGuard],  
    component: S448p5Page,
  },
  {
    path: 's448p6',
    canActivate:[ActiveGuard],  
    component: S448p6Page,
  },
  {
    path: 's449',
    canActivate:[ActiveGuard],  
    component: S449Page,
  },
  {
    path: 's450',
    canActivate:[ActiveGuard],  
    component: S450Page,
  },
  {
    path: 's451',
    canActivate:[ActiveGuard],  
    component: S451Page,
  },
  {
    path: 's452',
    canActivate:[ActiveGuard],  
    component: S452Page,
  },
  {
    path: 's453',
    canActivate:[ActiveGuard],  
    component: S453Page,
  },
  {
    path: 's454',
    canActivate:[ActiveGuard],  
    component: S454Page,
  },
  {
    path: 's455',
    canActivate:[ActiveGuard],  
    component: S455Page,
  },
  {
    path: 's456',
    canActivate:[ActiveGuard],  
    component: S456Page,
  },
  {
    path: 's457',
    canActivate:[ActiveGuard],  
    component: S457Page,
  },
  {
    path: 's457t',
    canActivate:[ActiveGuard],  
    component: S457tPage,
  },
  {
    path: 's458',
    canActivate:[ActiveGuard],  
    component: S458Page,
  },
  {
    path: 's459',
    canActivate:[ActiveGuard],  
    component: S459Page,
  },
  {
    path: 's460',
    canActivate:[ActiveGuard],  
    component: S460Page,
  },
  {
    path: 's461',
    canActivate:[ActiveGuard],  
    component: S461Page,
  },
  {
    path: 's462',
    canActivate:[ActiveGuard],  
    component: S462Page,
  },
  {
    path: 's463',
    canActivate:[ActiveGuard],  
    component: S463Page,
  },
  {
    path: 's464',
    canActivate:[ActiveGuard],  
    component: S464Page,
  },
  {
    path: 's465',
    canActivate:[ActiveGuard],  
    component: S465Page,
  },
  {
    path: 's466',
    canActivate:[ActiveGuard],  
    component: S466Page,
  },
  {
    path: 's467',
    canActivate:[ActiveGuard],  
    component: S467Page,
  },
  {
    path: 's468',
    canActivate:[ActiveGuard],  
    component: S468Page,
  },
  {
    path: 's469',
    canActivate:[ActiveGuard],  
    component: S469Page,
  },
  {
    path: 's470',
    canActivate:[ActiveGuard],  
    component: S470Page,
  },
  {
    path: 's471',
    canActivate:[ActiveGuard],  
    component: S471Page,
  },
  {
    path: 's472',
    canActivate:[ActiveGuard],  
    component: S472Page,
  },
  {
    path: 's473',
    canActivate:[ActiveGuard],  
    component: S473Page,
  },
  {
    path: 's474',
    canActivate:[ActiveGuard],  
    component: S474Page,
  },
  {
    path: 's475',
    canActivate:[ActiveGuard],  
    component: S475Page,
  },
  {
    path: 's476',
    canActivate:[ActiveGuard],  
    component: S476Page,
  },
  {
    path: 's477',
    canActivate:[ActiveGuard],  
    component: S477Page,
  },
  {
    path: 's478',
    canActivate:[ActiveGuard],  
    component: S478Page,
  },
  {
    path: 's479',
    canActivate:[ActiveGuard],  
    component: S479Page,
  },   
  {
    path: 's480',
    canActivate:[ActiveGuard],  
    component: S480Page,
  },
  {
    path: 's481',
    canActivate:[ActiveGuard],  
    component: S481Page,
  },
  {
    path: 's482',
    canActivate:[ActiveGuard],  
    component: S482Page,
  },
  {
    path: 's483',
    canActivate:[ActiveGuard],  
    component: S483Page,
  },
  {
    path: 's483p1',
    canActivate:[ActiveGuard],  
    component: S483p1Page,
  },
  {
    path: 's483p2',
    canActivate:[ActiveGuard],  
    component: S483p2Page,
  },
  {
    path: 's483p3',
    canActivate:[ActiveGuard],  
    component: S483p3Page,
  },
  {
    path: 's483p4',
    canActivate:[ActiveGuard],  
    component: S483p4Page,
  },
  {
    path: 's484',
    canActivate:[ActiveGuard],  
    component: S484Page,
  },
  {
    path: 's485',
    canActivate:[ActiveGuard],  
    component: S485Page,
  }, 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfEsteemRoutingModule { }
