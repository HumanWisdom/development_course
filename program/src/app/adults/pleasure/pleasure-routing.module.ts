import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S20001Page } from './s20001/s20001.page';  
import { S20002Page } from './s20002/s20002.page';  
import { S20003Page } from './s20003/s20003.page';  
import { S20004Page } from './s20004/s20004.page';  
import { S20004tPage } from './s20004t/s20004t.page';  
import { S20005Page } from './s20005/s20005.page';  
import { S20005tPage } from './s20005t/s20005t.page';  
import { S20006Page } from './s20006/s20006.page';  
import { S20007Page } from './s20007/s20007.page';  
import { S20008Page } from './s20008/s20008.page';  
import { S20008tPage } from './s20008t/s20008t.page';  
import { S20009Page } from './s20009/s20009.page';  
import { S20010Page } from './s20010/s20010.page';  
import { S20011Page } from './s20011/s20011.page'; 
import { S20012Page } from './s20012/s20012.page';  
import { S20013Page } from './s20013/s20013.page';  
import { S20014Page } from './s20014/s20014.page';  
import { S20015Page } from './s20015/s20015.page';  
import { S20016Page } from './s20016/s20016.page';  
import { S20017Page } from './s20017/s20017.page';  
import { S20018Page } from './s20018/s20018.page'; 
import { S20019Page } from './s20019/s20019.page';  
import { S20019tPage } from './s20019t/s20019t.page';  
import { S20020Page } from './s20020/s20020.page';  
import { S20021Page } from './s20021/s20021.page';  
import { S20021tPage } from './s20021t/s20021t.page';  
import { S20022Page } from './s20022/s20022.page';  
import { S20023Page } from './s20023/s20023.page';  
import { S20024Page } from './s20024/s20024.page';  
import { S20024tPage } from './s20024t/s20024t.page'; 
import { S20025Page } from './s20025/s20025.page';  
import { S20026Page } from './s20026/s20026.page';  
import { S20027Page } from './s20027/s20027.page';  
import { S20027tPage } from './s20027t/s20027t.page';  
import { S20028Page } from './s20028/s20028.page';
import { S20028tPage } from './s20028t/s20028t.page';    
import { S20029Page } from './s20029/s20029.page'; 
import { S20029tPage } from './s20029t/s20029t.page';   
import { S20030Page } from './s20030/s20030.page';  
import { S20031Page } from './s20031/s20031.page';  
import { S20032Page } from './s20032/s20032.page';  
import { S20033Page } from './s20033/s20033.page';  
import { S20034Page } from './s20034/s20034.page';  
import { S20035Page } from './s20035/s20035.page';  
import { S20036Page } from './s20036/s20036.page';  
import { S20036tPage } from './s20036t/s20036t.page';  
import { S20037Page } from './s20037/s20037.page';  
import { S20038Page } from './s20038/s20038.page';  
import { S20039Page } from './s20039/s20039.page';  
import { S20040Page } from './s20040/s20040.page';
import { S20040tPage } from './s20040t/s20040t.page';  
import { S20041Page } from './s20041/s20041.page';  
import { S20042Page } from './s20042/s20042.page';  
import { S20043Page } from './s20043/s20043.page';  
import { S20044Page } from './s20044/s20044.page';  
import { S20045Page } from './s20045/s20045.page'; 
import { S20045tPage } from './s20045t/s20045t.page'; 
import { S20046Page } from './s20046/s20046.page';  
import { S20047Page } from './s20047/s20047.page';  
import { S20048Page } from './s20048/s20048.page';  
import { S20049Page } from './s20049/s20049.page';  
import { S20050Page } from './s20050/s20050.page';  
import { S20051Page } from './s20051/s20051.page';  
import { S20052Page } from './s20052/s20052.page';  
import { S20053Page } from './s20053/s20053.page';  
import { S20054Page } from './s20054/s20054.page';  
import { S20054tPage } from './s20054t/s20054t.page';  
import { S20055Page } from './s20055/s20055.page';  
import { S20056Page } from './s20056/s20056.page';  
import { S20057Page } from './s20057/s20057.page';
import { S20057tPage } from './s20057t/s20057t.page';    
import { S20058Page } from './s20058/s20058.page';  
import { S20058tPage } from './s20058t/s20058t.page';  
import { S20059Page } from './s20059/s20059.page';
import { S20059tPage } from './s20059t/s20059t.page';    
import { S20060Page } from './s20060/s20060.page';  
import { S20061Page } from './s20061/s20061.page';  
import { S20062Page } from './s20062/s20062.page'; 
import { S20062tPage } from './s20062t/s20062t.page';  
import { S20063Page } from './s20063/s20063.page';  
import { S20063tPage } from './s20063t/s20063t.page';  
import { S20064Page } from './s20064/s20064.page'; 
import { S20064tPage } from './s20064t/s20064t.page';   
import { S20065Page } from './s20065/s20065.page';  
import { S20066Page } from './s20066/s20066.page';  
import { S20067Page } from './s20067/s20067.page';  
import { S20067tPage } from './s20067t/s20067t.page';  
import { S20068Page } from './s20068/s20068.page';  
import { S20069Page } from './s20069/s20069.page';  
import { S20070Page } from './s20070/s20070.page'; 
import { S20070p1Page } from './s20070p1/s20070p1.page';  
import { S20070p2Page } from './s20070p2/s20070p2.page';  
import { S20070p3Page } from './s20070p3/s20070p3.page';  
import { S20070p4Page } from './s20070p4/s20070p4.page';  
import { S20071Page } from './s20071/s20071.page';  
import { S20072Page } from './s20072/s20072.page';  
import { S20073Page } from './s20073/s20073.page';  
import { S20074Page } from './s20074/s20074.page'; 
import { S20075Page } from './s20075/s20075.page';  
import { S20076Page } from './s20076/s20076.page';  
import { S20077Page } from './s20077/s20077.page';  
import { S20078Page } from './s20078/s20078.page';  
import { S20079Page } from './s20079/s20079.page';  
import { S20080Page } from './s20080/s20080.page';  
import { S20081Page } from './s20081/s20081.page';  
import { S20082Page } from './s20082/s20082.page';  

const routes: Routes = [
  {
    path: '',   
     component: S20001Page,
  },
  {
    path: 's20001',   
     canActivate:[ActiveGuard],  
    component: S20001Page,
  },
  {
    path: 's20002',   
     canActivate:[ActiveGuard],  
    component: S20002Page,
  },
  {
    path: 's20003',   
     canActivate:[ActiveGuard],  
    component: S20003Page,
  }, 
  {
    path: 's20004',   
     canActivate:[ActiveGuard],  
    component: S20004Page,
  },
  {
    path: 's20004t',   
     canActivate:[ActiveGuard],  
    component: S20004tPage,
  },
  {
    path: 's20005',   
     canActivate:[ActiveGuard],  
    component: S20005Page,
  },
  {
    path: 's20005t',   
     canActivate:[ActiveGuard],  
    component: S20005tPage,
  },
  {
    path: 's20006',   
     canActivate:[ActiveGuard],  
    component: S20006Page,
  },
  {
    path: 's20007',   
     canActivate:[ActiveGuard],  
    component: S20007Page,
  },
  {
    path: 's20008',   
     canActivate:[ActiveGuard],  
    component: S20008Page,
  },
  {
    path: 's20008t',   
     canActivate:[ActiveGuard],  
    component: S20008tPage,
  },
  {
    path: 's20009',   
     canActivate:[ActiveGuard],  
    component: S20009Page,
  },
  {
    path: 's20010',   
     canActivate:[ActiveGuard],  
    component: S20010Page,
  }, 
  {
    path: 's20011',   
     canActivate:[ActiveGuard],  
    component: S20011Page,
  },
  {
    path: 's20012',   
     canActivate:[ActiveGuard],  
    component: S20012Page,
  }, 
  {
    path: 's20013',   
     canActivate:[ActiveGuard],  
    component: S20013Page,
  },
  {
    path: 's20014',   
     canActivate:[ActiveGuard],  
    component: S20014Page,
  },
  {
    path: 's20015',   
     canActivate:[ActiveGuard],  
    component: S20015Page,
  },
  {
    path: 's20016',   
     canActivate:[ActiveGuard],  
    component: S20016Page,
  },
  {
    path: 's20017',   
     canActivate:[ActiveGuard],  
    component: S20017Page,
  },
  {
    path: 's20018',   
     canActivate:[ActiveGuard],  
    component: S20018Page,
  }, 
  {
    path: 's20019',   
     canActivate:[ActiveGuard],  
    component: S20019Page,
  },
  {
    path: 's20019t',   
     canActivate:[ActiveGuard],  
    component: S20019tPage,
  },
  {
    path: 's20020',   
     canActivate:[ActiveGuard],  
    component: S20020Page,
  },
  {
    path: 's20021',   
     canActivate:[ActiveGuard],  
    component: S20021Page,
  },
  {
    path: 's20021t',   
     canActivate:[ActiveGuard],  
    component: S20021tPage,
  },
  {
    path: 's20022',   
     canActivate:[ActiveGuard],  
    component: S20022Page,
  },
  {
    path: 's20023',   
     canActivate:[ActiveGuard],  
    component: S20023Page,
  },
  {
    path: 's20024',   
     canActivate:[ActiveGuard],  
    component: S20024Page,
  },
  {
    path: 's20024t',   
     canActivate:[ActiveGuard],  
    component: S20024tPage,
  },
  {
    path: 's20025',   
     canActivate:[ActiveGuard],  
    component: S20025Page,
  },
  {
    path: 's20026',   
     canActivate:[ActiveGuard],  
    component: S20026Page,
  },
  {
    path: 's20027',   
     canActivate:[ActiveGuard],  
    component: S20027Page,
  },
  {
    path: 's20027t',   
     canActivate:[ActiveGuard],  
    component: S20027tPage,
  },
  {
    path: 's20028',   
     canActivate:[ActiveGuard],  
    component: S20028Page,
  },
  {
    path: 's20028t',   
     canActivate:[ActiveGuard],  
    component: S20028tPage,
  },
  {
    path: 's20029',   
     canActivate:[ActiveGuard],  
    component: S20029Page,
  },
  {
    path: 's20029t',   
     canActivate:[ActiveGuard],  
    component: S20029tPage,
  },
  {
    path: 's20030',   
     canActivate:[ActiveGuard],  
    component: S20030Page,
  },
  {
    path: 's20031',   
     canActivate:[ActiveGuard],  
    component: S20031Page,
  },
  {
    path: 's20032',   
     canActivate:[ActiveGuard],  
    component: S20032Page,
  },
  {
    path: 's20033',   
     canActivate:[ActiveGuard],  
    component: S20033Page,
  },  
  {
    path: 's20034',   
     canActivate:[ActiveGuard],  
    component: S20034Page,
  },  
  {
    path: 's20035',   
     canActivate:[ActiveGuard],  
    component: S20035Page,
  }, 
  {
    path: 's20036',   
     canActivate:[ActiveGuard],  
    component: S20036Page,
  },
  {
    path: 's20036t',   
     canActivate:[ActiveGuard],  
    component: S20036tPage,
  },
  {
    path: 's20037',   
     canActivate:[ActiveGuard],  
    component: S20037Page,
  }, 
  {
    path: 's20038',   
     canActivate:[ActiveGuard],  
    component: S20038Page,
  },  
  {
    path: 's20039',   
     canActivate:[ActiveGuard],  
    component: S20039Page,
  },
  {
    path: 's20040',   
     canActivate:[ActiveGuard],  
    component: S20040Page,
  },
  {
    path: 's20040t',   
     canActivate:[ActiveGuard],  
    component: S20040tPage,
  },
  {
    path: 's20041',   
     canActivate:[ActiveGuard],  
    component: S20041Page,
  },
  {
    path: 's20042',   
     canActivate:[ActiveGuard],  
    component: S20042Page,
  },
  {
    path: 's20043',   
     canActivate:[ActiveGuard],  
    component: S20043Page,
  },
  {
    path: 's20044',   
     canActivate:[ActiveGuard],  
    component: S20044Page,
  },
  {
    path: 's20045',   
     canActivate:[ActiveGuard],  
    component: S20045Page,
  },
  {
    path: 's20045t',   
     canActivate:[ActiveGuard],  
    component: S20045tPage,
  },
  {
    path: 's20046',   
     canActivate:[ActiveGuard],  
    component: S20046Page,
  },
  {
    path: 's20047',   
     canActivate:[ActiveGuard],  
    component: S20047Page,
  },
  {
    path: 's20048',   
     canActivate:[ActiveGuard],  
    component: S20048Page,
  },
  {
    path: 's20049',   
     canActivate:[ActiveGuard],  
    component: S20049Page,
  },
  {
    path: 's20050',   
     canActivate:[ActiveGuard],  
    component: S20050Page,
  },
  {
    path: 's20051',   
     canActivate:[ActiveGuard],  
    component: S20051Page,
  },  
  {
    path: 's20052',   
     canActivate:[ActiveGuard],  
    component: S20052Page,
  },
  {
    path: 's20053',   
     canActivate:[ActiveGuard],  
    component: S20053Page,
  },
  {
    path: 's20054',   
     canActivate:[ActiveGuard],  
    component: S20054Page,
  },
  {
    path: 's20054t',   
     canActivate:[ActiveGuard],  
    component: S20054tPage,
  },
  {
    path: 's20055',   
     canActivate:[ActiveGuard],  
    component: S20055Page,
  },
  {
    path: 's20056',   
     canActivate:[ActiveGuard],  
    component: S20056Page,
  },
  {
    path: 's20057',   
     canActivate:[ActiveGuard],  
    component: S20057Page,
  },
  {
    path: 's20057t',   
     canActivate:[ActiveGuard],  
    component: S20057tPage,
  },
  {
    path: 's20058',   
     canActivate:[ActiveGuard],  
    component: S20058Page,
  },
  {
    path: 's20058t',   
     canActivate:[ActiveGuard],  
    component: S20058tPage,
  },
  {
    path: 's20059',   
     canActivate:[ActiveGuard],  
    component: S20059Page,
  },
  {
    path: 's20059t',   
     canActivate:[ActiveGuard],  
    component: S20059tPage,
  },
  {
    path: 's20060',   
     canActivate:[ActiveGuard],  
    component: S20060Page,
  },
  {
    path: 's20061',   
     canActivate:[ActiveGuard],  
    component: S20061Page,
  },
  {
    path: 's20062',   
     canActivate:[ActiveGuard],  
    component: S20062Page,
  },
  {
    path: 's20062t',   
     canActivate:[ActiveGuard],  
    component: S20062tPage,
  },
  {
    path: 's20063',   
     canActivate:[ActiveGuard],  
    component: S20063Page,
  },
  {
    path: 's20063t',   
     canActivate:[ActiveGuard],  
    component: S20063tPage,
  }, 
  {
    path: 's20064',   
     canActivate:[ActiveGuard],  
    component: S20064Page,
  },
  {
    path: 's20064t',   
     canActivate:[ActiveGuard],  
    component: S20064tPage,
  },
  {
    path: 's20065',   
     canActivate:[ActiveGuard],  
    component: S20065Page,
  },
  {
    path: 's20066',   
     canActivate:[ActiveGuard],  
    component: S20066Page,
  },
  {
    path: 's20067',   
     canActivate:[ActiveGuard],  
    component: S20067Page,
  },
  {
    path: 's20067t',   
     canActivate:[ActiveGuard],  
    component: S20067tPage,
  },
  {
    path: 's20068',   
     canActivate:[ActiveGuard],  
    component: S20068Page,
  },  
  {
    path: 's20069',   
     canActivate:[ActiveGuard],  
    component: S20069Page,
  },
  {
    path: 's20070',   
     canActivate:[ActiveGuard],  
    component: S20070Page,
  },
  {
    path: 's20070p1',   
     canActivate:[ActiveGuard],  
    component: S20070p1Page,
  },
  {
    path: 's20070p2',   
     canActivate:[ActiveGuard],  
    component: S20070p2Page,
  },
  {
    path: 's20070p3',   
     canActivate:[ActiveGuard],  
    component: S20070p3Page,
  },
  {
    path: 's20070p4',   
     canActivate:[ActiveGuard],  
    component: S20070p4Page,
  },
  {
    path: 's20071',   
     canActivate:[ActiveGuard],  
    component: S20071Page,
  },
  {
    path: 's20072',   
     canActivate:[ActiveGuard],  
    component: S20072Page,
  },
  {
    path: 's20073',   
     canActivate:[ActiveGuard],  
    component: S20073Page,
  },
  {
    path: 's20074',   
     canActivate:[ActiveGuard],  
    component: S20074Page,
  },  
  {
    path: 's20075',   
     canActivate:[ActiveGuard],  
    component: S20075Page,
  },
  {
    path: 's20076',   
     canActivate:[ActiveGuard],  
    component: S20076Page,
  }, 
  {
    path: 's20077',   
     canActivate:[ActiveGuard],  
    component: S20077Page,
  },
  {
    path: 's20078',   
     canActivate:[ActiveGuard],  
    component: S20078Page,
  },
  {
    path: 's20079',   
     canActivate:[ActiveGuard],  
    component: S20079Page,
  },
  {
    path: 's20080',   
     canActivate:[ActiveGuard],  
    component: S20080Page,
  }, 
  {
    path: 's20081',   
     canActivate:[ActiveGuard],  
    component: S20081Page,
  },
  {
    path: 's20082',   
     canActivate:[ActiveGuard],  
    component: S20082Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PleasureRoutingModule { }
