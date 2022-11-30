import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S73001Page } from './s73001/s73001.page';  
import { S73002Page } from './s73002/s73002.page';  
import { S73003Page } from './s73003/s73003.page';  
import { S73004Page } from './s73004/s73004.page'; 
import { S73004tPage } from './s73004t/s73004t.page';  
import { S73005Page } from './s73005/s73005.page';  
import { S73006Page } from './s73006/s73006.page';  
import { S73007Page } from './s73007/s73007.page'; 
import { S73008Page } from './s73008/s73008.page';  
import { S73009Page } from './s73009/s73009.page';  
import { S73010Page } from './s73010/s73010.page';  
import { S73011Page } from './s73011/s73011.page';  
import { S73012Page } from './s73012/s73012.page';  
import { S73013Page } from './s73013/s73013.page';  
import { S73014Page } from './s73014/s73014.page';  
import { S73015Page } from './s73015/s73015.page';  
import { S73016Page } from './s73016/s73016.page';  
import { S73017Page } from './s73017/s73017.page';  
import { S73018Page } from './s73018/s73018.page'; 
import { S73019Page } from './s73019/s73019.page';  
import { S73020Page } from './s73020/s73020.page';  
import { S73021Page } from './s73021/s73021.page';  
import { S73022Page } from './s73022/s73022.page';  
import { S73023Page } from './s73023/s73023.page';  
import { S73024Page } from './s73024/s73024.page';  
import { S73024tPage } from './s73024t/s73024t.page';  
import { S73025Page } from './s73025/s73025.page';  
import { S73026Page } from './s73026/s73026.page';  
import { S73027Page } from './s73027/s73027.page';  
import { S73028Page } from './s73028/s73028.page';
import { S73028tPage } from './s73028t/s73028t.page';    
import { S73029Page } from './s73029/s73029.page';  
import { S73030Page } from './s73030/s73030.page';  
import { S73031Page } from './s73031/s73031.page';  
import { S73031tPage } from './s73031t/s73031t.page';  
import { S73032Page } from './s73032/s73032.page';  
import { S73033Page } from './s73033/s73033.page';  
import { S73034Page } from './s73034/s73034.page';  
import { S73035Page } from './s73035/s73035.page';  
import { S73036Page } from './s73036/s73036.page';  
import { S73037Page } from './s73037/s73037.page'; 
import { S73037tPage } from './s73037t/s73037t.page';   
import { S73038Page } from './s73038/s73038.page';  
import { S73039Page } from './s73039/s73039.page';  
import { S73040Page } from './s73040/s73040.page';  
import { S73041Page } from './s73041/s73041.page';  
import { S73042Page } from './s73042/s73042.page';  
import { S73043Page } from './s73043/s73043.page';  
import { S73044Page } from './s73044/s73044.page';  
import { S73045Page } from './s73045/s73045.page';  
import { S73045tPage } from './s73045t/s73045t.page';  
import { S73046Page } from './s73046/s73046.page';  
import { S73047Page } from './s73047/s73047.page';
import { S73048Page } from './s73048/s73048.page';  
import { S73049Page } from './s73049/s73049.page';  
import { S73050Page } from './s73050/s73050.page';  
import { S73050tPage } from './s73050t/s73050t.page';  
import { S73051Page } from './s73051/s73051.page';  
import { S73052Page } from './s73052/s73052.page'; 
import { S73052tPage } from './s73052t/s73052t.page';   
import { S73053Page } from './s73053/s73053.page';  
import { S73054Page } from './s73054/s73054.page';  
import { S73055Page } from './s73055/s73055.page';  
import { S73056Page } from './s73056/s73056.page';  
import { S73057Page } from './s73057/s73057.page';  
import { S73058Page } from './s73058/s73058.page';  
import { S73058tPage } from './s73058t/s73058t.page';  
import { S73059Page } from './s73059/s73059.page';  
import { S73060Page } from './s73060/s73060.page';  
import { S73060tPage } from './s73060t/s73060t.page';  
import { S73061Page } from './s73061/s73061.page';  
import { S73062Page } from './s73062/s73062.page';  
import { S73063Page } from './s73063/s73063.page';  
import { S73064Page } from './s73064/s73064.page';  
import { S73065Page } from './s73065/s73065.page';  
import { S73066Page } from './s73066/s73066.page'; 
import { S73066tPage } from './s73066t/s73066t.page';  
import { S73067Page } from './s73067/s73067.page';  
import { S73068Page } from './s73068/s73068.page'; 
import { S73069Page } from './s73069/s73069.page'; 
import { S73069tPage } from './s73069t/s73069t.page';  
import { S73070Page } from './s73070/s73070.page';  
import { S73071Page } from './s73071/s73071.page';  
import { S73072Page } from './s73072/s73072.page';  
import { S73072tPage } from './s73072t/s73072t.page';  
import { S73073Page } from './s73073/s73073.page';  
import { S73074Page } from './s73074/s73074.page';  
import { S73075Page } from './s73075/s73075.page';  
import { S73076Page } from './s73076/s73076.page';  
import { S73077Page } from './s73077/s73077.page';  
import { S73078Page } from './s73078/s73078.page'; 
import { S73078tPage } from './s73078t/s73078t.page';  
import { S73079Page } from './s73079/s73079.page';  
import { S73080Page } from './s73080/s73080.page';  
import { S73081Page } from './s73081/s73081.page';  
import { S73081tPage } from './s73081t/s73081t.page';  
import { S73082Page } from './s73082/s73082.page';  
import { S73083Page } from './s73083/s73083.page';  
import { S73084Page } from './s73084/s73084.page';  
import { S73084tPage } from './s73084t/s73084t.page';  
import { S73085Page } from './s73085/s73085.page';  
import { S73086Page } from './s73086/s73086.page';
import { S73086tPage } from './s73086t/s73086t.page';    
import { S73087Page } from './s73087/s73087.page';  
import { S73088Page } from './s73088/s73088.page';
import { S73089Page } from './s73089/s73089.page'; 
import { S73089tPage } from './s73089t/s73089t.page';   
import { S73090Page } from './s73090/s73090.page';  
import { S73091Page } from './s73091/s73091.page'; 
import { S73091tPage } from './s73091t/s73091t.page';  
import { S73092Page } from './s73092/s73092.page';  
import { S73093Page } from './s73093/s73093.page';  
import { S73094Page } from './s73094/s73094.page';  
import { S73095Page } from './s73095/s73095.page'; 
import { S73095tPage } from './s73095t/s73095t.page';  
import { S73096Page } from './s73096/s73096.page';  
import { S73097Page } from './s73097/s73097.page'; 
import { S73097tPage } from './s73097t/s73097t.page';  
import { S73098Page } from './s73098/s73098.page';  
import { S73099Page } from './s73099/s73099.page';  
import { S73100Page } from './s73100/s73100.page';
import { S73101Page } from './s73101/s73101.page';  
import { S73102Page } from './s73102/s73102.page';  
import { S73103Page } from './s73103/s73103.page'; 
import { S73104Page } from './s73104/s73104.page';  
import { S73105Page } from './s73105/s73105.page';  
import { S73106Page } from './s73106/s73106.page'; 
import { S73107Page } from './s73107/s73107.page';  

const routes: Routes = [
  {
    path: '',   
      component: S73001Page,
  },
  {
    path: 's73001',   
    canActivate:[ActiveGuard],  
    component: S73001Page,
  },
  {
    path: 's73002',   
    canActivate:[ActiveGuard],  
    component: S73002Page,
  },
  {
    path: 's73003',   
    canActivate:[ActiveGuard],  
    component: S73003Page,
  },
  {
    path: 's73004',   
    canActivate:[ActiveGuard],  
    component: S73004Page,
  },
  {
    path: 's73004t',   
    canActivate:[ActiveGuard],  
    component: S73004tPage,
  }, 
  {
    path: 's73005',   
    canActivate:[ActiveGuard],  
    component: S73005Page,
  },
  {
    path: 's73006',   
    canActivate:[ActiveGuard],  
    component: S73006Page,
  },
  {
    path: 's73007',   
    canActivate:[ActiveGuard],  
    component: S73007Page,
  },  
  {
    path: 's73008',   
    canActivate:[ActiveGuard],  
    component: S73008Page,
  },
  {
    path: 's73009',   
    canActivate:[ActiveGuard],  
    component: S73009Page,
  },
  {
    path: 's73010',   
    canActivate:[ActiveGuard],  
    component: S73010Page,
  },
  {
    path: 's73011',   
    canActivate:[ActiveGuard],  
    component: S73011Page,
  }, 
  {
    path: 's73012',   
    canActivate:[ActiveGuard],  
    component: S73012Page,
  },
  {
    path: 's73013',   
    canActivate:[ActiveGuard],  
    component: S73013Page,
  }, 
  {
    path: 's73014',   
    canActivate:[ActiveGuard],  
    component: S73014Page,
  },  
  {
    path: 's73015',   
    canActivate:[ActiveGuard],  
    component: S73015Page,
  },
  {
    path: 's73016',   
    canActivate:[ActiveGuard],  
    component: S73016Page,
  },
  {
    path: 's73017',   
    canActivate:[ActiveGuard],  
    component: S73017Page,
  },
  {
    path: 's73018',   
    canActivate:[ActiveGuard],  
    component: S73018Page,
  }, 
  {
    path: 's73019',   
    canActivate:[ActiveGuard],  
    component: S73019Page,
  },
  {
    path: 's73020',   
    canActivate:[ActiveGuard],  
    component: S73020Page,
  },
  {
    path: 's73021',   
    canActivate:[ActiveGuard],  
    component: S73021Page,
  },
  {
    path: 's73022',   
    canActivate:[ActiveGuard],  
    component: S73022Page,
  },
  {
    path: 's73023',   
    canActivate:[ActiveGuard],  
    component: S73023Page,
  },
  {
    path: 's73024',   
    canActivate:[ActiveGuard],  
    component: S73024Page,
  },
  {
    path: 's73024t',   
    canActivate:[ActiveGuard],  
    component: S73024tPage,
  },
  {
    path: 's73025',   
    canActivate:[ActiveGuard],  
    component: S73025Page,
  },
  {
    path: 's73026',   
    canActivate:[ActiveGuard],  
    component: S73026Page,
  },
  {
    path: 's73027',   
    canActivate:[ActiveGuard],  
    component: S73027Page,
  },
  {
    path: 's73028',   
    canActivate:[ActiveGuard],  
    component: S73028Page,
  },
  {
    path: 's73028t',   
    canActivate:[ActiveGuard],  
    component: S73028tPage,
  },
  {
    path: 's73029',   
    canActivate:[ActiveGuard],  
    component: S73029Page,
  },
  {
    path: 's73030',   
    canActivate:[ActiveGuard],  
    component: S73030Page,
  },
  {
    path: 's73031',   
    canActivate:[ActiveGuard],  
    component: S73031Page,
  },
  {
    path: 's73031t',   
    canActivate:[ActiveGuard],  
    component: S73031tPage,
  },
  {
    path: 's73032',   
    canActivate:[ActiveGuard],  
    component: S73032Page,
  },
  {
    path: 's73033',   
    canActivate:[ActiveGuard],  
    component: S73033Page,
  }, 
  {
    path: 's73034',   
    canActivate:[ActiveGuard],  
    component: S73034Page,
  },  
  {
    path: 's73035',   
    canActivate:[ActiveGuard],  
    component: S73035Page,
  },  
  {
    path: 's73036',   
    canActivate:[ActiveGuard],  
    component: S73036Page,
  },
  {
    path: 's73037',   
    canActivate:[ActiveGuard],  
    component: S73037Page,
  },
  {
    path: 's73037t',   
    canActivate:[ActiveGuard],  
    component: S73037tPage,
  }, 
  {
    path: 's73038',   
    canActivate:[ActiveGuard],  
    component: S73038Page,
  },  
  {
    path: 's73039',   
    canActivate:[ActiveGuard],  
    component: S73039Page,
  },
  {
    path: 's73040',   
    canActivate:[ActiveGuard],  
    component: S73040Page,
  }, 
  {
    path: 's73041',   
    canActivate:[ActiveGuard],  
    component: S73041Page,
  },
  {
    path: 's73042',   
    canActivate:[ActiveGuard],  
    component: S73042Page,
  },
  {
    path: 's73043',   
    canActivate:[ActiveGuard],  
    component: S73043Page,
  }, 
  {
    path: 's73044',   
    canActivate:[ActiveGuard],  
    component: S73044Page,
  },
  {
    path: 's73045',   
    canActivate:[ActiveGuard],  
    component: S73045Page,
  },
  {
    path: 's73045t',   
    canActivate:[ActiveGuard],  
    component: S73045tPage,
  },
  {
    path: 's73046',   
    canActivate:[ActiveGuard],  
    component: S73046Page,
  },
  {
    path: 's73047',   
    canActivate:[ActiveGuard],  
    component: S73047Page,
  },
  {
    path: 's73048',   
    canActivate:[ActiveGuard],  
    component: S73048Page,
  },
  {
    path: 's73049',   
    canActivate:[ActiveGuard],  
    component: S73049Page,
  },
  {
    path: 's73050',   
    canActivate:[ActiveGuard],  
    component: S73050Page,
  },
  {
    path: 's73050t',   
    canActivate:[ActiveGuard],  
    component: S73050tPage,
  },
  {
    path: 's73051',   
    canActivate:[ActiveGuard],  
    component: S73051Page,
  }, 
  {
    path: 's73052',   
    canActivate:[ActiveGuard],  
    component: S73052Page,
  },
  {
    path: 's73052t',   
    canActivate:[ActiveGuard],  
    component: S73052tPage,
  },
  {
    path: 's73053',   
    canActivate:[ActiveGuard],  
    component: S73053Page,
  },
  {
    path: 's73054',   
    canActivate:[ActiveGuard],  
    component: S73054Page,
  },
  {
    path: 's73055',   
    canActivate:[ActiveGuard],  
    component: S73055Page,
  },
  {
    path: 's73056',   
    canActivate:[ActiveGuard],  
    component: S73056Page,
  },
  {
    path: 's73057',   
    canActivate:[ActiveGuard],  
    component: S73057Page,
  },
  {
    path: 's73058',   
    canActivate:[ActiveGuard],  
    component: S73058Page,
  },
  {
    path: 's73058t',   
    canActivate:[ActiveGuard],  
    component: S73058tPage,
  },
  {
    path: 's73059',   
    canActivate:[ActiveGuard],  
    component: S73059Page,
  }, 
  {
    path: 's73060',   
    canActivate:[ActiveGuard],  
    component: S73060Page,
  },
  {
    path: 's73060t',   
    canActivate:[ActiveGuard],  
    component: S73060tPage,
  },
  {
    path: 's73061',   
    canActivate:[ActiveGuard],  
    component: S73061Page,
  },
  {
    path: 's73062',   
    canActivate:[ActiveGuard],  
    component: S73062Page,
  },
  {
    path: 's73063',   
    canActivate:[ActiveGuard],  
    component: S73063Page,
  },  
  {
    path: 's73064',   
    canActivate:[ActiveGuard],  
    component: S73064Page,
  },
  {
    path: 's73065',   
    canActivate:[ActiveGuard],  
    component: S73065Page,
  },
  {
    path: 's73066',   
    canActivate:[ActiveGuard],  
    component: S73066Page,
  },
  {
    path: 's73066t',   
    canActivate:[ActiveGuard],  
    component: S73066tPage,
  },
  {
    path: 's73067',   
    canActivate:[ActiveGuard],  
    component: S73067Page,
  },
  {
    path: 's73068',   
    canActivate:[ActiveGuard],  
    component: S73068Page,
  },
  {
    path: 's73069',   
    canActivate:[ActiveGuard],  
    component: S73069Page,
  },
  {
    path: 's73069t',   
    canActivate:[ActiveGuard],  
    component: S73069tPage,
  },
  {
    path: 's73070',   
    canActivate:[ActiveGuard],  
    component: S73070Page,
  },
  {
    path: 's73071',   
    canActivate:[ActiveGuard],  
    component: S73071Page,
  }, 
  {
    path: 's73072',   
    canActivate:[ActiveGuard],  
    component: S73072Page,
  },
  {
    path: 's73072t',   
    canActivate:[ActiveGuard],  
    component: S73072tPage,
  },
  {
    path: 's73073',   
    canActivate:[ActiveGuard],  
    component: S73073Page,
  },
  {
    path: 's73074',   
    canActivate:[ActiveGuard],  
    component: S73074Page,
  }, 
  {
    path: 's73075',   
    canActivate:[ActiveGuard],  
    component: S73075Page,
  },
  {
    path: 's73076',   
    canActivate:[ActiveGuard],  
    component: S73076Page,
  }, 
  {
    path: 's73077',   
    canActivate:[ActiveGuard],  
    component: S73077Page,
  },
  {
    path: 's73078',   
    canActivate:[ActiveGuard],  
    component: S73078Page,
  },
  {
    path: 's73078t',   
    canActivate:[ActiveGuard],  
    component: S73078tPage,
  },
  {
    path: 's73079',   
    canActivate:[ActiveGuard],  
    component: S73079Page,
  },
  {
    path: 's73080',   
    canActivate:[ActiveGuard],  
    component: S73080Page,
  }, 
  {
    path: 's73081',   
    canActivate:[ActiveGuard],  
    component: S73081Page,
  },
  {
    path: 's73081t',   
    canActivate:[ActiveGuard],  
    component: S73081tPage,
  },
  {
    path: 's73082',   
    canActivate:[ActiveGuard],  
    component: S73082Page,
  },  
  {
    path: 's73083',   
    canActivate:[ActiveGuard],  
    component: S73083Page,
  },
  {
    path: 's73084',   
    canActivate:[ActiveGuard],  
    component: S73084Page,
  },
  {
    path: 's73084t',   
    canActivate:[ActiveGuard],  
    component: S73084tPage,
  },
  {
    path: 's73085',   
    canActivate:[ActiveGuard],  
    component: S73085Page,
  }, 
  {
    path: 's73086',   
    canActivate:[ActiveGuard],  
    component: S73086Page,
  },
  {
    path: 's73086t',   
    canActivate:[ActiveGuard],  
    component: S73086tPage,
  },
  {
    path: 's73087',   
    canActivate:[ActiveGuard],  
    component: S73087Page,
  }, 
  {
    path: 's73088',   
    canActivate:[ActiveGuard],  
    component: S73088Page,
  }, 
  {
    path: 's73089',   
    canActivate:[ActiveGuard],  
    component: S73089Page,
  },
  {
    path: 's73089t',   
    canActivate:[ActiveGuard],  
    component: S73089tPage,
  },
  {
    path: 's73090',   
    canActivate:[ActiveGuard],  
    component: S73090Page,
  },
  {
    path: 's73091',   
    canActivate:[ActiveGuard],  
    component: S73091Page,
  },
  {
    path: 's73091t',   
    canActivate:[ActiveGuard],  
    component: S73091tPage,
  },
  {
    path: 's73091t',   
    canActivate:[ActiveGuard],  
    component: S73091tPage,
  },
  {
    path: 's73092',   
    canActivate:[ActiveGuard],  
    component: S73092Page,
  },
  {
    path: 's73093',   
    canActivate:[ActiveGuard],  
    component: S73093Page,
  },
  {
    path: 's73094',   
    canActivate:[ActiveGuard],  
    component: S73094Page,
  },
  {
    path: 's73095',   
    canActivate:[ActiveGuard],  
    component: S73095Page,
  },
  {
    path: 's73095t',   
    canActivate:[ActiveGuard],  
    component: S73095tPage,
  },
  {
    path: 's73096',   
    canActivate:[ActiveGuard],  
    component: S73096Page,
  }, 
  {
    path: 's73097',   
    canActivate:[ActiveGuard],  
    component: S73097Page,
  },
  {
    path: 's73097t',   
    canActivate:[ActiveGuard],  
    component: S73097tPage,
  },
  {
    path: 's73098',   
    canActivate:[ActiveGuard],  
    component: S73098Page,
  },
  {
    path: 's73099',   
    canActivate:[ActiveGuard],  
    component: S73099Page,
  }, 
  {
    path: 's73100',   
    canActivate:[ActiveGuard],  
    component: S73100Page,
  },
  {
    path: 's73101',   
    canActivate:[ActiveGuard],  
    component: S73101Page,
  },
  {
    path: 's73102',   
    canActivate:[ActiveGuard],  
    component: S73102Page,
  },
  {
    path: 's73103',   
    canActivate:[ActiveGuard],  
    component: S73103Page,
  }, 
  {
    path: 's73104',   
    canActivate:[ActiveGuard],  
    component: S73104Page,
  }, 
  {
    path: 's73105',   
    canActivate:[ActiveGuard],  
    component: S73105Page,
  },
  {
    path: 's73106',   
    canActivate:[ActiveGuard],  
    component: S73106Page,
  }, 
  {
    path: 's73107',   
    canActivate:[ActiveGuard],  
    component: S73107Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyRoutingModule { }
