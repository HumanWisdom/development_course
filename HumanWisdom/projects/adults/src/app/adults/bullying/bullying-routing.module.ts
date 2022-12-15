import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S76001Page } from './s76001/s76001.page';  
import { S76002Page } from './s76002/s76002.page';  
import { S76003Page } from './s76003/s76003.page';  
import { S76004Page } from './s76004/s76004.page';  
import { S76005Page } from './s76005/s76005.page';  
import { S76006Page } from './s76006/s76006.page';  
import { S76006tPage } from './s76006t/s76006t.page';  
import { S76007Page } from './s76007/s76007.page';  
import { S76008Page } from './s76008/s76008.page';  
import { S76009Page } from './s76009/s76009.page';  
import { S76009tPage } from './s76009t/s76009t.page';  
import { S76010Page } from './s76010/s76010.page';  
import { S76011Page } from './s76011/s76011.page'; 
import { S76012Page } from './s76012/s76012.page';  
import { S76013Page } from './s76013/s76013.page'; 
import { S76013tPage } from './s76013t/s76013t.page';   
import { S76014Page } from './s76014/s76014.page';  
import { S76014tPage } from './s76014t/s76014t.page';  
import { S76015Page } from './s76015/s76015.page';  
import { S76015tPage } from './s76015t/s76015t.page';
import { S76015p0Page} from './s76015p0/s76015p0.page';    
import { S76016Page } from './s76016/s76016.page';  
import { S76017Page } from './s76017/s76017.page';  
import { S76018Page } from './s76018/s76018.page'; 
import { S76019Page } from './s76019/s76019.page';  
import { S76020Page } from './s76020/s76020.page';  
import { S76020tPage } from './s76020t/s76020t.page';  
import { S76020p0Page} from './s76020p0/s76020p0.page';    
import { S76021Page } from './s76021/s76021.page';  
import { S76021tPage } from './s76021t/s76021t.page';  
import { S76022Page } from './s76022/s76022.page';  
import { S76022tPage } from './s76022t/s76022t.page';  
import { S76023Page } from './s76023/s76023.page';  
import { S76024Page } from './s76024/s76024.page';  
import { S76025Page } from './s76025/s76025.page';  
import { S76026Page } from './s76026/s76026.page';
import { S76027Page } from './s76027/s76027.page';  
import { S76028Page } from './s76028/s76028.page';  
import { S76029Page } from './s76029/s76029.page';  
import { S76030Page } from './s76030/s76030.page';  
import { S76031Page } from './s76031/s76031.page';  
import { S76032Page } from './s76032/s76032.page';  
import { S76032tPage } from './s76032t/s76032t.page';  
import { S76033Page } from './s76033/s76033.page';  
import { S76034Page } from './s76034/s76034.page';  
import { S76035Page } from './s76035/s76035.page';  
import { S76036Page } from './s76036/s76036.page';  
import { S76037Page } from './s76037/s76037.page';  
import { S76037tPage } from './s76037t/s76037t.page';  
import { S76038Page } from './s76038/s76038.page';  
import { S76039Page } from './s76039/s76039.page';  
import { S76040Page } from './s76040/s76040.page';  
import { S76040tPage } from './s76040t/s76040t.page';  
import { S76041Page } from './s76041/s76041.page';  
import { S76042Page } from './s76042/s76042.page';  
import { S76043Page } from './s76043/s76043.page';  
import { S76043tPage } from './s76043t/s76043t.page';  
import { S76044Page } from './s76044/s76044.page';  
import { S76045Page } from './s76045/s76045.page';  
import { S76046Page } from './s76046/s76046.page';  
import { S76046tPage } from './s76046t/s76046t.page';  
import { S76047Page } from './s76047/s76047.page';  
import { S76048Page } from './s76048/s76048.page';  
import { S76049Page } from './s76049/s76049.page';  
import { S76050Page } from './s76050/s76050.page';  
import { S76050tPage } from './s76050t/s76050t.page';  
import { S76051Page } from './s76051/s76051.page';  
import { S76052Page } from './s76052/s76052.page';  
import { S76053Page } from './s76053/s76053.page';  
import { S76053tPage } from './s76053t/s76053t.page';  
import { S76054Page } from './s76054/s76054.page';  
import { S76055Page } from './s76055/s76055.page';  
import { S76056Page } from './s76056/s76056.page';  
import { S76057Page } from './s76057/s76057.page';
import { S76058Page } from './s76058/s76058.page';  
import { S76059Page } from './s76059/s76059.page';  
import { S76060Page } from './s76060/s76060.page';  
import { S76061Page } from './s76061/s76061.page';  
import { S76062Page } from './s76062/s76062.page';  
import { S76062tPage } from './s76062t/s76062t.page';  
import { S76063Page } from './s76063/s76063.page';  
import { S76064Page } from './s76064/s76064.page';  
import { S76065Page } from './s76065/s76065.page';  
import { S76065tPage } from './s76065t/s76065t.page';  
import { S76066Page } from './s76066/s76066.page';  
import { S76067Page } from './s76067/s76067.page';  
import { S76068Page } from './s76068/s76068.page';
import { S76069Page } from './s76069/s76069.page';  
import { S76069tPage } from './s76069t/s76069t.page';  
import { S76070Page } from './s76070/s76070.page'; 
import { S76071Page } from './s76071/s76071.page';  
import { S76072Page } from './s76072/s76072.page';  
import { S76073Page } from './s76073/s76073.page';  
import { S76074Page } from './s76074/s76074.page'; 
import { S76075Page } from './s76075/s76075.page';  
import { S76076Page } from './s76076/s76076.page';  
import { S76077Page } from './s76077/s76077.page';  
import { S76078Page } from './s76078/s76078.page';  
import { S76078tPage } from './s76078t/s76078t.page';  
import { S76079Page } from './s76079/s76079.page';  
import { S76080Page } from './s76080/s76080.page';  
import { S76080tPage } from './s76080t/s76080t.page';  
import { S76081Page } from './s76081/s76081.page';  
import { S76082Page } from './s76082/s76082.page';  
import { S76082tPage } from './s76082t/s76082t.page';  
import { S76083Page } from './s76083/s76083.page';  
import { S76084Page } from './s76084/s76084.page';  
import { S76085Page } from './s76085/s76085.page';  
import { S76086Page } from './s76086/s76086.page';  
import { S76087Page } from './s76087/s76087.page';  
import { S76088Page } from './s76088/s76088.page';  
import { S76089Page } from './s76089/s76089.page';  
import { S76090Page } from './s76090/s76090.page';  
import { S76091Page } from './s76091/s76091.page';  
import { S76092Page } from './s76092/s76092.page';  
import { S76093Page } from './s76093/s76093.page';  

const routes: Routes = [
  {
    path: '',   
     component: S76001Page,
  },
  {
    path: 's76001',   
    canActivate:[ActiveGuard],  
    component: S76001Page,
  },
  {
    path: 's76002',   
    canActivate:[ActiveGuard],  
    component: S76002Page,
  },
  {
    path: 's76003',   
    canActivate:[ActiveGuard],  
    component: S76003Page,
  },
  {
    path: 's76004',   
    canActivate:[ActiveGuard],  
    component: S76004Page,
  },
  {
    path: 's76005',   
    canActivate:[ActiveGuard],  
    component: S76005Page,
  },
  {
    path: 's76006',   
    canActivate:[ActiveGuard],  
    component: S76006Page,
  },
  {
    path: 's76006t',   
    canActivate:[ActiveGuard],  
    component: S76006tPage,
  },
  {
    path: 's76007',   
    canActivate:[ActiveGuard],  
    component: S76007Page,
  },
  {
    path: 's76008',   
    canActivate:[ActiveGuard],  
    component: S76008Page,
  },
  {
    path: 's76009',   
    canActivate:[ActiveGuard],  
    component: S76009Page,
  },
  {
    path: 's76009t',   
    canActivate:[ActiveGuard],  
    component: S76009tPage,
  },
  {
    path: 's76010',   
    canActivate:[ActiveGuard],  
    component: S76010Page,
  },
  {
    path: 's76011',   
    canActivate:[ActiveGuard],  
    component: S76011Page,
  },
  {
    path: 's76012',   
    canActivate:[ActiveGuard],  
    component: S76012Page,
  }, 
  {
    path: 's76013',   
    canActivate:[ActiveGuard],  
    component: S76013Page,
  },
  {
    path: 's76013t',   
    canActivate:[ActiveGuard],  
    component: S76013tPage,
  },
  {
    path: 's76014',   
    canActivate:[ActiveGuard],  
    component: S76014Page,
  },
  {
    path: 's76014t',   
    canActivate:[ActiveGuard],  
    component: S76014tPage,
  },
  {
    path: 's76015',   
    canActivate:[ActiveGuard],  
    component: S76015Page,
  },
  {
    path: 's76015t',   
    canActivate:[ActiveGuard],  
    component: S76015tPage,
  },
  {
    path: 's76015p0',   
    canActivate:[ActiveGuard],  
    component: S76015p0Page,
  },
  {
    path: 's76016',   
    canActivate:[ActiveGuard],  
    component: S76016Page,
  },
  {
    path: 's76017',   
    canActivate:[ActiveGuard],  
    component: S76017Page,
  },
  {
    path: 's76018',   
    canActivate:[ActiveGuard],  
    component: S76018Page,
  }, 
  {
    path: 's76019',   
    canActivate:[ActiveGuard],  
    component: S76019Page,
  },
  {
    path: 's76020',   
    canActivate:[ActiveGuard],  
    component: S76020Page,
  },
  {
    path: 's76020t',   
    canActivate:[ActiveGuard],  
    component: S76020tPage,
  },
  {
    path: 's76020p0',   
    canActivate:[ActiveGuard],  
    component: S76020p0Page,
  },
  {
    path: 's76021',   
    canActivate:[ActiveGuard],  
    component: S76021Page,
  },
  {
    path: 's76021t',   
    canActivate:[ActiveGuard],  
    component: S76021tPage,
  },
  {
    path: 's76022',   
    canActivate:[ActiveGuard],  
    component: S76022Page,
  },
  {
    path: 's76022t',   
    canActivate:[ActiveGuard],  
    component: S76022tPage,
  },
  {
    path: 's76023',   
    canActivate:[ActiveGuard],  
    component: S76023Page,
  },
  {
    path: 's76024',   
    canActivate:[ActiveGuard],  
    component: S76024Page,
  },
  {
    path: 's76025',   
    canActivate:[ActiveGuard],  
    component: S76025Page,
  },
  {
    path: 's76026',   
    canActivate:[ActiveGuard],  
    component: S76026Page,
  },
  {
    path: 's76027',   
    canActivate:[ActiveGuard],  
    component: S76027Page,
  },
  {
    path: 's76028',   
    canActivate:[ActiveGuard],  
    component: S76028Page,
  },
  {
    path: 's76029',   
    canActivate:[ActiveGuard],  
    component: S76029Page,
  },
  {
    path: 's76030',   
    canActivate:[ActiveGuard],  
    component: S76030Page,
  },
  {
    path: 's76031',   
    canActivate:[ActiveGuard],  
    component: S76031Page,
  },
  {
    path: 's76032',   
    canActivate:[ActiveGuard],  
    component: S76032Page,
  },
  {
    path: 's76032t',   
    canActivate:[ActiveGuard],  
    component: S76032tPage,
  },
  {
    path: 's76033',   
    canActivate:[ActiveGuard],  
    component: S76033Page,
  },  
  {
    path: 's76034',   
    canActivate:[ActiveGuard],  
    component: S76034Page,
  },  
  {
    path: 's76035',   
    canActivate:[ActiveGuard],  
    component: S76035Page,
  }, 
  {
    path: 's76036',   
    canActivate:[ActiveGuard],  
    component: S76036Page,
  },
  {
    path: 's76037',   
    canActivate:[ActiveGuard],  
    component: S76037Page,
  }, 
  {
    path: 's76037t',   
    canActivate:[ActiveGuard],  
    component: S76037tPage,
  }, 
  {
    path: 's76038',   
    canActivate:[ActiveGuard],  
    component: S76038Page,
  },  
  {
    path: 's76039',   
    canActivate:[ActiveGuard],  
    component: S76039Page,
  },
  {
    path: 's76040',   
    canActivate:[ActiveGuard],  
    component: S76040Page,
  },
  {
    path: 's76040t',   
    canActivate:[ActiveGuard],  
    component: S76040tPage,
  },
  {
    path: 's76041',   
    canActivate:[ActiveGuard],  
    component: S76041Page,
  },
  {
    path: 's76042',   
    canActivate:[ActiveGuard],  
    component: S76042Page,
  },
  {
    path: 's76043',   
    canActivate:[ActiveGuard],  
    component: S76043Page,
  },
  {
    path: 's76043t',   
    canActivate:[ActiveGuard],  
    component: S76043tPage,
  },
  {
    path: 's76044',   
    canActivate:[ActiveGuard],  
    component: S76044Page,
  },
  {
    path: 's76045',   
    canActivate:[ActiveGuard],  
    component: S76045Page,
  },
  {
    path: 's76046',   
    canActivate:[ActiveGuard],  
    component: S76046Page,
  },
  {
    path: 's76046t',   
    canActivate:[ActiveGuard],  
    component: S76046tPage,
  },
  {
    path: 's76047',   
    canActivate:[ActiveGuard],  
    component: S76047Page,
  },
  {
    path: 's76048',   
    canActivate:[ActiveGuard],  
    component: S76048Page,
  },
  {
    path: 's76049',   
    canActivate:[ActiveGuard],  
    component: S76049Page,
  },
  {
    path: 's76050',   
    canActivate:[ActiveGuard],  
    component: S76050Page,
  },
  {
    path: 's76050t',   
    canActivate:[ActiveGuard],  
    component: S76050tPage,
  },
  {
    path: 's76051',   
    canActivate:[ActiveGuard],  
    component: S76051Page,
  },
  {
    path: 's76052',   
    canActivate:[ActiveGuard],  
    component: S76052Page,
  },
  {
    path: 's76053',   
    canActivate:[ActiveGuard],  
    component: S76053Page,
  },
  {
    path: 's76053t',   
    canActivate:[ActiveGuard],  
    component: S76053tPage,
  },
  {
    path: 's76054',   
    canActivate:[ActiveGuard],  
    component: S76054Page,
  },
  {
    path: 's76055',   
    canActivate:[ActiveGuard],  
    component: S76055Page,
  },
  {
    path: 's76056',   
    canActivate:[ActiveGuard],  
    component: S76056Page,
  },
  {
    path: 's76057',   
    canActivate:[ActiveGuard],  
    component: S76057Page,
  },
  {
    path: 's76058',   
    canActivate:[ActiveGuard],  
    component: S76058Page,
  },
  {
    path: 's76059',   
    canActivate:[ActiveGuard],  
    component: S76059Page,
  },
  {
    path: 's76060',   
    canActivate:[ActiveGuard],  
    component: S76060Page,
  },
  {
    path: 's76061',   
    canActivate:[ActiveGuard],  
    component: S76061Page,
  },
  {
    path: 's76062',   
    canActivate:[ActiveGuard],  
    component: S76062Page,
  },
  {
    path: 's76062t',   
    canActivate:[ActiveGuard],  
    component: S76062tPage,
  },
  {
    path: 's76063',   
    canActivate:[ActiveGuard],  
    component: S76063Page,
  },
  {
    path: 's76064',   
    canActivate:[ActiveGuard],  
    component: S76064Page,
  },
  {
    path: 's76065',   
    canActivate:[ActiveGuard],  
    component: S76065Page,
  },
  {
    path: 's76065t',   
    canActivate:[ActiveGuard],  
    component: S76065tPage,
  },
  {
    path: 's76066',   
    canActivate:[ActiveGuard],  
    component: S76066Page,
  },
  {
    path: 's76067',   
    canActivate:[ActiveGuard],  
    component: S76067Page,
  },
  {
    path: 's76068',   
    canActivate:[ActiveGuard],  
    component: S76068Page,
  },
  {
    path: 's76069',   
    canActivate:[ActiveGuard],  
    component: S76069Page,
  },
  {
    path: 's76069t',   
    canActivate:[ActiveGuard],  
    component: S76069tPage,
  },
  {
    path: 's76070',   
    canActivate:[ActiveGuard],  
    component: S76070Page,
  },
  {
    path: 's76071',   
    canActivate:[ActiveGuard],  
    component: S76071Page,
  },
  {
    path: 's76072',   
    canActivate:[ActiveGuard],  
    component: S76072Page,
  },
  {
    path: 's76073',   
    canActivate:[ActiveGuard],  
    component: S76073Page,
  },
  {
    path: 's76074',   
    canActivate:[ActiveGuard],  
    component: S76074Page,
  },  
  {
    path: 's76075',   
    canActivate:[ActiveGuard],  
    component: S76075Page,
  },
  {
    path: 's76076',   
    canActivate:[ActiveGuard],  
    component: S76076Page,
  }, 
  {
    path: 's76077',   
    canActivate:[ActiveGuard],  
    component: S76077Page,
  },
  {
    path: 's76078',   
    canActivate:[ActiveGuard],  
    component: S76078Page,
  },
  {
    path: 's76078t',   
    canActivate:[ActiveGuard],  
    component: S76078tPage,
  },
  {
    path: 's76079',   
    canActivate:[ActiveGuard],  
    component: S76079Page,
  },
  {
    path: 's76080',   
    canActivate:[ActiveGuard],  
    component: S76080Page,
  }, 
  {
    path: 's76080t',   
    canActivate:[ActiveGuard],  
    component: S76080tPage,
  }, 
  {
    path: 's76081',   
    canActivate:[ActiveGuard],  
    component: S76081Page,
  },
  {
    path: 's76082',   
    canActivate:[ActiveGuard],  
    component: S76082Page,
  },  
  {
    path: 's76082t',   
    canActivate:[ActiveGuard],  
    component: S76082tPage,
  },  
  {
    path: 's76083',   
    canActivate:[ActiveGuard],  
    component: S76083Page,
  },
  {
    path: 's76084',   
    canActivate:[ActiveGuard],  
    component: S76084Page,
  },
  {
    path: 's76085',   
    canActivate:[ActiveGuard],  
    component: S76085Page,
  },
  {
    path: 's76086',   
    canActivate:[ActiveGuard],  
    component: S76086Page,
  },
  {
    path: 's76087',   
    canActivate:[ActiveGuard],  
    component: S76087Page,
  },
  {
    path: 's76088',   
    canActivate:[ActiveGuard],  
    component: S76088Page,
  },
  {
    path: 's76089',   
    canActivate:[ActiveGuard],  
    component: S76089Page,
  },
  {
    path: 's76090',   
    canActivate:[ActiveGuard],  
    component: S76090Page,
  },
  {
    path: 's76091',   
    canActivate:[ActiveGuard],  
    component: S76091Page,
  },
  {
    path: 's76092',   
    canActivate:[ActiveGuard],  
    component: S76092Page,
  },
  {
    path: 's76093',   
    canActivate:[ActiveGuard],  
    component: S76093Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BullyingRoutingModule { }
