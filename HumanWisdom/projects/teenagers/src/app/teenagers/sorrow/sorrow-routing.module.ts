import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S60001Page } from './s60001/s60001.page';  
import { S60002Page } from './s116002/s116002.page';  
import { S60003Page } from './s116003/s116003.page';  
import { S60004Page } from './s60004/s60004.page';  
import { S60004tPage } from './s116004t/s116004t.page';  
import { S60005Page } from './s116005/s116005.page';  
import { S60006Page } from './s116006/s116006.page';  
import { S60007Page } from './s116007/s116007.page';  
import { S60008Page } from './s116008/s116008.page';  
import { S60009Page } from './s116009/s60009.page';  
import { S60010Page } from './s116010/s60010.page';  
import { S60011Page } from './s116011/s60011.page';  
import { S60012Page } from './s116012/s60012.page';  
import { S60013Page } from './s116013/s60013.page';  
import { S60014Page } from './s116014/s60014.page';  
import { S60015Page } from './s116015/s60015.page';  
import { S60016Page } from './s116016/s60016.page';  
import { S60017Page } from './s116017/s60017.page';  
import { S60018Page } from './s116018/s60018.page'; 
import { S60019Page } from './s116019/s60019.page';  
import { S60020Page } from './s116020/s60020.page';  
import { S60021Page } from './s116021/s60021.page';  
import { S60022Page } from './s116022/s60022.page';  
import { S60023Page } from './s116023/s60023.page';  
import { S60024Page } from './s116024/s60024.page';  
import { S60025Page } from './s116025/s60025.page';  
import { S60026Page } from './s116026/s60026.page';  
import { S60027Page } from './s116027/s60027.page';
import { S60028Page } from './s116028/s60028.page';  
import { S60029Page } from './s116029/s60029.page';  
import { S60030Page } from './s116030/s60030.page';  
import { S60031Page } from './s116031/s60031.page';  
import { S60032Page } from './s116032/s60032.page';  
import { S60033Page } from './s116033/s60033.page';  
import { S60034Page } from './s116034/s60034.page';  
import { S60035Page } from './s116035/s60035.page';  
import { S60036Page } from './s116036/s60036.page';  
import { S60037Page } from './s116037/s60037.page';  
import { S60038Page } from './s116038/s60038.page';  
import { S60039Page } from './s116039/s60039.page';  
import { S60040Page } from './s116040/s60040.page';  
import { S60041Page } from './s116041/s60041.page';  
import { S60042Page } from './s116042/s60042.page';  
import { S60043Page } from './s116043/s60043.page';  
import { S60044Page } from './s116044/s116044.page';  
import { S60045Page } from './s116045/s116045.page';  
import { S60045tPage } from './s116045t/s116045t.page';  
import { S60046Page } from './s116046/s116046.page';  
import { S60047Page } from './s116047/s116047.page';  
import { S60048Page } from './s116048/s116048.page'; 
import { S60048tPage } from './s116048t/s116048t.page';  
import { S60049Page } from './s116050/s116050.page';  
import { S60050Page } from './s116051/s116051.page';  
import { S60051Page } from './s116052/s116052.page';  
import { S60052Page } from './s116053/s116053.page'; 
import { S60052tPage } from './s116053t/s116053t.page';  
import { S60053Page } from './s116054/s116054.page';  
import { S60054Page } from './s116055/s116055.page';  
import { S60055Page } from './s116056/s116056.page';  
import { S60056Page } from './s116057/s116057.page';
import { S60056tPage } from './s116057t/s116057t.page';  
import { S60057Page } from './s116058/s116058.page';
import { S60058Page } from './s116059/s116059.page';  
import { S60059Page } from './s60059/s60059.page'; 
import { S60059tPage } from './s60059t/s60059t.page';  
import { S60060Page } from './s60060/s60060.page';  
import { S60061Page } from './s60061/s60061.page';  
import { S60062Page } from './s116060/s116060.page';  
import { S60062tPage } from './s116060t/s116060t.page';  
import { S60063Page } from './s116061/s116061.page';  
import { S60064Page } from './s116062/s116062.page';  
import { S60065Page } from './s116063/s116063.page';  
import { S60066Page } from './s116064/s116064.page';  
import { S60067Page } from './s116065/s116065.page';  
import { S60068Page } from './s116066/s60068.page';  
import { S60069Page } from './s116067/s60069.page';  
import { S60069tPage } from './s116067t/s60069t.page';  
import { S60070Page } from './s116068/s60070.page';  
import { S60071Page } from './s116069/s60071.page';  
import { S60072Page } from './s116070/s60072.page';  
import { S60073Page } from './s116071/s60073.page';  
import { S60074Page } from './s116072/s60074.page';  
import { S60074tPage } from './s116072t/s60074t.page'; 
import { S60075Page } from './s116073/s60075.page'; 
import { S60075tPage } from './s116073t/s60075t.page';  
import { S60076Page } from './s116074/s60076.page';  
import { S60077Page } from './s116075/s60077.page';  
import { S60077tPage } from './s116075t/s60077t.page';  
import { S60078Page } from './s116076/s60078.page';  
import { S60078tPage } from './s116076t/s60078t.page';  
import { S60079Page } from './s116077/s60079.page';  
import { S60080Page } from './s116078/s60080.page';    
import { S60081Page } from './s116079/s60081.page';  
import { S60082Page } from './s116081/s60082.page'; 
import { S60082tPage } from './s116081t/s60082t.page';  
import { S60083Page } from './s116082/s60083.page';  
import { S60084Page } from './s116083/s60084.page';  
import { S60085Page } from './s116084/s60085.page';  
import { S60085tPage } from './s116084t/s60085t.page'; 
import { S60086Page } from './s116085/s60086.page';  
import { S60087Page } from './s116086/s60087.page'; 
import { S60087tPage } from './s116086t/s60087t.page';  
import { S60088Page } from './s116087/s60088.page';  
import { S60089Page } from './s116088/s60089.page';  
import { S60089tPage } from './s116088t/s60089t.page';  
import { S60090Page } from './s116089/s60090.page';  
import { S60091Page } from './s116090/s60091.page';
import { S60091tPage } from './s116090t/s60091t.page';  
import { S60092Page } from './s116091/s60092.page';  
import { S60092tPage } from './s116091t/s60092t.page';  
import { S60093Page } from './s116092/s60093.page';  
import { S60094Page } from './s116093/s60094.page';  
import { S60095Page } from './s116094/s60095.page';  
import { S60096Page } from './s116095/s60096.page';  
import { S60097Page } from './s116096/s60097.page';  
import { S60098Page } from './s116097/s60098.page';  
import { S60099Page } from './s116098/s60099.page';  
import { S60100Page } from './s116099/s60100.page';  
import { S60101Page } from './s116100/s60101.page';  
import { S60102Page } from './s116101/s60102.page';  
import { S60103Page } from './s116102/s60103.page';  
import { S60104Page } from './s116103/s60104.page';  
import { S60105Page } from './s116104/s60105.page';  
import { S60106Page } from './s116105/s60106.page';  
import { S60107Page } from './s116106/s60107.page';  
import { S60108Page } from './s116107/s60108.page';  
import { S60109Page } from './s116108/s60109.page';  
import { S60110Page } from './s116109/s60110.page';  
import { S60111Page } from './s116110/s60111.page';  
import { S60112Page } from './s116111/s60112.page';  

const routes: Routes = [
  {
    path: '',   
    component: S60001Page,
  },
  {
    path: 's60001',   
    component: S60001Page,
  },
  {
    path: 's60002',   
   canActivate:[ActiveGuard],  
    component: S60002Page,
  },
  {
    path: 's60003',   
   canActivate:[ActiveGuard],  
    component: S60003Page,
  },
  {
    path: 's60004',   
   canActivate:[ActiveGuard],  
    component: S60004Page,
  },
  {
    path: 's60004t',   
   canActivate:[ActiveGuard],  
    component: S60004tPage,
  },
  {
    path: 's60005',   
   canActivate:[ActiveGuard],  
    component: S60005Page,
  },
  {
    path: 's60006',   
   canActivate:[ActiveGuard],  
    component: S60006Page,
  },
 
  {
    path: 's60007',   
   canActivate:[ActiveGuard],  
    component: S60007Page,
  },
  {
    path: 's60008',   
   canActivate:[ActiveGuard],  
    component: S60008Page,
  },
  {
    path: 's60009',   
   canActivate:[ActiveGuard],  
    component: S60009Page,
  },
  {
    path: 's60010',   
   canActivate:[ActiveGuard],  
    component: S60010Page,
  },
  {
    path: 's60011',   
   canActivate:[ActiveGuard],  
    component: S60011Page,
  },
  {
    path: 's60012',   
   canActivate:[ActiveGuard],  
    component: S60012Page,
  },
  {
    path: 's60013',   
   canActivate:[ActiveGuard],  
    component: S60013Page,
  },
  {
    path: 's60014',   
   canActivate:[ActiveGuard],  
    component: S60014Page,
  },
  
  {
    path: 's60015',   
   canActivate:[ActiveGuard],  
    component: S60015Page,
  },
  {
    path: 's60016',   
   canActivate:[ActiveGuard],  
    component: S60016Page,
  },
  {
    path: 's60017',   
   canActivate:[ActiveGuard],  
    component: S60017Page,
  },
  {
    path: 's60018',   
   canActivate:[ActiveGuard],  
    component: S60018Page,
  },
 
  {
    path: 's60019',   
   canActivate:[ActiveGuard],  
    component: S60019Page,
  },
  {
    path: 's60020',   
   canActivate:[ActiveGuard],  
    component: S60020Page,
  },
  {
    path: 's60021',   
   canActivate:[ActiveGuard],  
    component: S60021Page,
  },
  {
    path: 's60022',   
   canActivate:[ActiveGuard],  
    component: S60022Page,
  },
  {
    path: 's60023',   
   canActivate:[ActiveGuard],  
    component: S60023Page,
  },
  {
    path: 's60024',   
   canActivate:[ActiveGuard],  
    component: S60024Page,
  },  
  {
    path: 's60025',   
   canActivate:[ActiveGuard],  
    component: S60025Page,
  },
  {
    path: 's60026',   
   canActivate:[ActiveGuard],  
    component: S60026Page,
  },
  {
    path: 's60027',   
   canActivate:[ActiveGuard],  
    component: S60027Page,
  }, 
  {
    path: 's60028',   
   canActivate:[ActiveGuard],  
    component: S60028Page,
  },
  {
    path: 's60029',   
   canActivate:[ActiveGuard],  
    component: S60029Page,
  },
  {
    path: 's60030',   
   canActivate:[ActiveGuard],  
    component: S60030Page,
  }, 
  {
    path: 's60031',   
   canActivate:[ActiveGuard],  
    component: S60031Page,
  },
  {
    path: 's60032',   
   canActivate:[ActiveGuard],  
    component: S60032Page,
  },
  {
    path: 's60033',   
   canActivate:[ActiveGuard],  
    component: S60033Page,
  },  
  {
    path: 's60034',   
   canActivate:[ActiveGuard],  
    component: S60034Page,
  },  
  {
    path: 's60035',   
   canActivate:[ActiveGuard],  
    component: S60035Page,
  }, 
  {
    path: 's60036',   
   canActivate:[ActiveGuard],  
    component: S60036Page,
  },  
  {
    path: 's60037',   
   canActivate:[ActiveGuard],  
    component: S60037Page,
  }, 
  {
    path: 's60038',   
   canActivate:[ActiveGuard],  
    component: S60038Page,
  }, 
  {
    path: 's60039',   
   canActivate:[ActiveGuard],  
    component: S60039Page,
  },
  {
    path: 's60040',   
   canActivate:[ActiveGuard],  
    component: S60040Page,
  },
  {
    path: 's60041',   
   canActivate:[ActiveGuard],  
    component: S60041Page,
  },
  {
    path: 's60042',   
   canActivate:[ActiveGuard],  
    component: S60042Page,
  },
  {
    path: 's60043',   
   canActivate:[ActiveGuard],  
    component: S60043Page,
  },
  {
    path: 's60044',   
   canActivate:[ActiveGuard],  
    component: S60044Page,
  },
  {
    path: 's60045',   
   canActivate:[ActiveGuard],  
    component: S60045Page,
  },
  {
    path: 's60045t',   
   canActivate:[ActiveGuard],  
    component: S60045tPage,
  },
  {
    path: 's60046',   
   canActivate:[ActiveGuard],  
    component: S60046Page,
  },
  {
    path: 's60047',   
   canActivate:[ActiveGuard],  
    component: S60047Page,
  },  
  {
    path: 's60048',   
   canActivate:[ActiveGuard],  
    component: S60048Page,
  },
  {
    path: 's60048t',   
   canActivate:[ActiveGuard],  
    component: S60048tPage,
  },
  {
    path: 's60049',   
   canActivate:[ActiveGuard],  
    component: S60049Page,
  },
  {
    path: 's60050',   
   canActivate:[ActiveGuard],  
    component: S60050Page,
  },
  {
    path: 's60051',   
   canActivate:[ActiveGuard],  
    component: S60051Page,
  }, 
  {
    path: 's60052',   
   canActivate:[ActiveGuard],  
    component: S60052Page,
  },
  {
    path: 's60052t',   
   canActivate:[ActiveGuard],  
    component: S60052tPage,
  },
  {
    path: 's60053',   
   canActivate:[ActiveGuard],  
    component: S60053Page,
  },
  {
    path: 's60054',   
   canActivate:[ActiveGuard],  
    component: S60054Page,
  },
  {
    path: 's60055',   
   canActivate:[ActiveGuard],  
    component: S60055Page,
  },
  {
    path: 's60056',   
   canActivate:[ActiveGuard],  
    component: S60056Page,
  },
  {
    path: 's60056t',   
   canActivate:[ActiveGuard],  
    component: S60056tPage,
  },
  {
    path: 's60057',   
   canActivate:[ActiveGuard],  
    component: S60057Page,
  }, 
  {
    path: 's60058',   
   canActivate:[ActiveGuard],  
    component: S60058Page,
  },
  {
    path: 's60059',   
   canActivate:[ActiveGuard],  
    component: S60059Page,
  },
  {
    path: 's60059t',   
   canActivate:[ActiveGuard],  
    component: S60059tPage,
  },
  {
    path: 's60060',   
   canActivate:[ActiveGuard],  
    component: S60060Page,
  },
  {
    path: 's60061',   
   canActivate:[ActiveGuard],  
    component: S60061Page,
  },
  {
    path: 's60062',   
   canActivate:[ActiveGuard],  
    component: S60062Page,
  },
  {
    path: 's60062t',   
   canActivate:[ActiveGuard],  
    component: S60062tPage,
  },
  {
    path: 's60063',   
   canActivate:[ActiveGuard],  
    component: S60063Page,
  },
  {
    path: 's60064',   
   canActivate:[ActiveGuard],  
    component: S60064Page,
  },
  {
    path: 's60065',   
   canActivate:[ActiveGuard],  
    component: S60065Page,
  }, 
  {
    path: 's60066',   
   canActivate:[ActiveGuard],  
    component: S60066Page,
  },
  {
    path: 's60067',   
   canActivate:[ActiveGuard],  
    component: S60067Page,
  }, 
  {
    path: 's60068',   
   canActivate:[ActiveGuard],  
    component: S60068Page,
  },  
  {
    path: 's60069',   
   canActivate:[ActiveGuard],  
    component: S60069Page,
  },
  {
    path: 's60069t',   
   canActivate:[ActiveGuard],  
    component: S60069tPage,
  },
  {
    path: 's60070',   
   canActivate:[ActiveGuard],  
    component: S60070Page,
  },
  {
    path: 's60071',   
   canActivate:[ActiveGuard],  
    component: S60071Page,
  },
  {
    path: 's60072',   
   canActivate:[ActiveGuard],  
    component: S60072Page,
  },
  {
    path: 's60073',   
   canActivate:[ActiveGuard],  
    component: S60073Page,
  },
  {
    path: 's60074',   
   canActivate:[ActiveGuard],  
    component: S60074Page,
  },
  {
    path: 's60074t',   
   canActivate:[ActiveGuard],  
    component: S60074tPage,
  },
  {
    path: 's60075',   
   canActivate:[ActiveGuard],  
    component: S60075Page,
  },
  {
    path: 's60075t',   
   canActivate:[ActiveGuard],  
    component: S60075tPage,
  },
  {
    path: 's60076',   
   canActivate:[ActiveGuard],  
    component: S60076Page,
  }, 
  {
    path: 's60077',   
   canActivate:[ActiveGuard],  
    component: S60077Page,
  },
  {
    path: 's60077t',   
   canActivate:[ActiveGuard],  
    component: S60077tPage,
  },
  {
    path: 's60078',   
   canActivate:[ActiveGuard],  
    component: S60078Page,
  },
  {
    path: 's60078t',   
   canActivate:[ActiveGuard],  
    component: S60078tPage,
  },
  {
    path: 's60079',   
   canActivate:[ActiveGuard],  
    component: S60079Page,
  },
  {
    path: 's60080',   
   canActivate:[ActiveGuard],  
    component: S60080Page,
  }, 
  {
    path: 's60081',   
   canActivate:[ActiveGuard],  
    component: S60081Page,
  },
  {
    path: 's60082',   
   canActivate:[ActiveGuard],  
    component: S60082Page,
  },
  {
    path: 's60082t',   
   canActivate:[ActiveGuard],  
    component: S60082tPage,
  },  
  {
    path: 's60083',   
   canActivate:[ActiveGuard],  
    component: S60083Page,
  },
  {
    path: 's60084',   
   canActivate:[ActiveGuard],  
    component: S60084Page,
  },
  {
    path: 's60085',   
   canActivate:[ActiveGuard],  
    component: S60085Page,
  },
  {
    path: 's60085t',   
   canActivate:[ActiveGuard],  
    component: S60085tPage,
  }, 
  {
    path: 's60086',   
   canActivate:[ActiveGuard],  
    component: S60086Page,
  }, 
  {
    path: 's60087',   
   canActivate:[ActiveGuard],  
    component: S60087Page,
  },
  {
    path: 's60087t',   
   canActivate:[ActiveGuard],  
    component: S60087tPage,
  },
  {
    path: 's60088',   
   canActivate:[ActiveGuard],  
    component: S60088Page,
  },
  {
    path: 's60089',   
   canActivate:[ActiveGuard],  
    component: S60089Page,
  },
  {
    path: 's60089t',   
   canActivate:[ActiveGuard],  
    component: S60089tPage,
  },
  {
    path: 's60090',   
   canActivate:[ActiveGuard],  
    component: S60090Page,
  }, 
  {
    path: 's60091',   
   canActivate:[ActiveGuard],  
    component: S60091Page,
  },
  {
    path: 's60091t',   
   canActivate:[ActiveGuard],  
    component: S60091tPage,
  },
  {
    path: 's60092',   
   canActivate:[ActiveGuard],  
    component: S60092Page,
  },
  {
    path: 's60092t',   
   canActivate:[ActiveGuard],  
    component: S60092tPage,
  },
  {
    path: 's60093',   
   canActivate:[ActiveGuard],  
    component: S60093Page,
  },
  {
    path: 's60094',   
   canActivate:[ActiveGuard],  
    component: S60094Page,
  }, 
  {
    path: 's60095',   
   canActivate:[ActiveGuard],  
    component: S60095Page,
  },  
  {
    path: 's60096',   
   canActivate:[ActiveGuard],  
    component: S60096Page,
  },  
  {
    path: 's60097',   
   canActivate:[ActiveGuard],  
    component: S60097Page,
  },
  {
    path: 's60098',   
   canActivate:[ActiveGuard],  
    component: S60098Page,
  },
  {
    path: 's60099',   
   canActivate:[ActiveGuard],  
    component: S60099Page,
  }, 
  {
    path: 's60100',   
   canActivate:[ActiveGuard],  
    component: S60100Page,
  },  
  {
    path: 's60101',   
   canActivate:[ActiveGuard],  
    component: S60101Page,
  },
  {
    path: 's60102',   
   canActivate:[ActiveGuard],  
    component: S60102Page,
  },
  {
    path: 's60103',   
   canActivate:[ActiveGuard],  
    component: S60103Page,
  },
  {
    path: 's60104',   
   canActivate:[ActiveGuard],  
    component: S60104Page,
  },
  {
    path: 's60105',   
   canActivate:[ActiveGuard],  
    component: S60105Page,
  },
  {
    path: 's60106',   
   canActivate:[ActiveGuard],  
    component: S60106Page,
  },
  {
    path: 's60107',   
   canActivate:[ActiveGuard],  
    component: S60107Page,
  }, 
  {
    path: 's60108',   
   canActivate:[ActiveGuard],  
    component: S60108Page,
  },
  {
    path: 's60109',   
   canActivate:[ActiveGuard],  
    component: S60109Page,
  },
  {
    path: 's60110',   
   canActivate:[ActiveGuard],  
    component: S60110Page,
  },
  {
    path: 's60111',   
   canActivate:[ActiveGuard],  
    component: S60111Page,
  },
  {
    path: 's60112',   
   canActivate:[ActiveGuard],  
    component: S60112Page,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorrowRoutingModule { }

   