import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S58001Page } from './s58001/s58001.page';  
import { S58002Page } from './s58002/s58002.page';  
import { S58003Page } from './s58003/s58003.page';  
import { S58003tPage } from './s58003t/s58003t.page';  
import { S58004Page } from './s58004/s58004.page';  
import { S58005Page } from './s58005/s58005.page';  
import { S58006Page } from './s58006/s58006.page';  
import { S58007Page } from './s58007/s58007.page';  
import { S58008Page } from './s58008/s58008.page';  
import { S58009Page } from './s58009/s58009.page';  
import { S58010Page } from './s58010/s58010.page';  
import { S58010tPage } from './s58010t/s58010t.page';  
import { S58011Page } from './s58011/s58011.page'; 
import { S58012Page } from './s58012/s58012.page';  
import { S58013Page } from './s58013/s58013.page'; 
import { S58013tPage } from './s58013t/s58013t.page';   
import { S58014Page } from './s58014/s58014.page';  
import { S58015Page } from './s58015/s58015.page';  
import { S58016Page } from './s58016/s58016.page';  
import { S58017Page } from './s58017/s58017.page';  
import { S58018Page } from './s58018/s58018.page'; 
import { S58019Page } from './s58019/s58019.page';  
import { S58020Page } from './s58020/s58020.page';  
import { S58021Page } from './s58021/s58021.page';  
import { S58022Page } from './s58022/s58022.page';  
import { S58023Page } from './s58023/s58023.page';  
import { S58024Page } from './s58024/s58024.page';  
import { S58025Page } from './s58025/s58025.page';  
import { S58025tPage } from './s58025t/s58025t.page';  
import { S58026Page } from './s58026/s58026.page';
import { S58026p1Page } from './s58026p1/s58026p1.page';    
import { S58027Page } from './s58027/s58027.page';  
import { S58028Page } from './s58028/s58028.page';  
import { S58029Page } from './s58029/s58029.page';  
import { S58030Page } from './s58030/s58030.page';  
import { S58031Page } from './s58031/s58031.page';  
import { S58032Page } from './s58032/s58032.page';  
import { S58033Page } from './s58033/s58033.page';  
import { S58034Page } from './s58034/s58034.page';  
import { S58035Page } from './s58035/s58035.page';  
import { S58036Page } from './s58036/s58036.page';  
import { S58037Page } from './s58037/s58037.page';  
import { S58038Page } from './s58038/s58038.page';  
import { S58039Page } from './s58039/s58039.page';  
import { S58040Page } from './s58040/s58040.page';  
import { S58041Page } from './s58041/s58041.page';  
import { S58042Page } from './s58042/s58042.page';  
import { S58043Page } from './s58043/s58043.page';  
import { S58044Page } from './s58044/s58044.page';  
import { S58045Page } from './s58045/s58045.page';  
import { S58046Page } from './s58046/s58046.page';  
import { S58047Page } from './s58047/s58047.page';  
import { S58048Page } from './s58048/s58048.page';  
import { S58049Page } from './s58049/s58049.page';  
import { S58050Page } from './s58050/s58050.page';  
import { S58051Page } from './s58051/s58051.page';  
import { S58051tPage } from './s58051t/s58051t.page';  
import { S58052Page } from './s58052/s58052.page';  
import { S58053Page } from './s58053/s58053.page';  
import { S58054Page } from './s58054/s58054.page';  
import { S58055Page } from './s58055/s58055.page';  
import { S58056Page } from './s58056/s58056.page';  
import { S58057Page } from './s58057/s58057.page';
import { S58057tPage } from './s58057t/s58057t.page';  
import { S58058Page } from './s58058/s58058.page';  
import { S58059Page } from './s58059/s58059.page';  
import { S58060Page } from './s58060/s58060.page';  
import { S58060tPage } from './s58060t/s58060t.page';  
import { S58061Page } from './s58061/s58061.page';  
import { S58062Page } from './s58062/s58062.page';  
import { S58063Page } from './s58063/s58063.page';  
import { S58064Page } from './s58064/s58064.page';  
import { S58065Page } from './s58065/s58065.page';  
import { S58066Page } from './s58066/s58066.page';  
import { S58067Page } from './s58067/s58067.page';  
import { S58068Page } from './s58068/s58068.page';
import { S58068tPage } from './s58068t/s58068t.page';    
import { S58069Page } from './s58069/s58069.page';  
import { S58070Page } from './s58070/s58070.page'; 
import { S58070tPage } from './s58070t/s58070t.page';   
import { S58071Page } from './s58071/s58071.page';  
import { S58072Page } from './s58072/s58072.page';  
import { S58073Page } from './s58073/s58073.page';  
import { S58074Page } from './s58074/s58074.page'; 
import { S58075Page } from './s58075/s58075.page';  
import { S58076Page } from './s58076/s58076.page';  
import { S58077Page } from './s58077/s58077.page';  
import { S58078Page } from './s58078/s58078.page';  
import { S58079Page } from './s58079/s58079.page';  
import { S58080Page } from './s58080/s58080.page';  
import { S58081Page } from './s58081/s58081.page';  
import { S58082Page } from './s58082/s58082.page';  
import { S58083Page } from './s58083/s58083.page';  
import { S58084Page } from './s58084/s58084.page';  
import { S58085Page } from './s58085/s58085.page';  
import { S58086Page } from './s58086/s58086.page';  
import { S58087Page } from './s58087/s58087.page'; 
import { S58087p1Page } from './s58087p1/s58087p1.page'; 
import { S58087p2Page } from './s58087p2/s58087p2.page'; 
import { S58087p3Page } from './s58087p3/s58087p3.page';  
import { S58087p4Page } from './s58087p4/s58087p4.page';  
import { S58088Page } from './s58088/s58088.page';  
import { S58081p1Page } from './s58081p1/s58081p1.page';    
import { S58081p2Page } from './s58081p2/s58081p2.page';    
import { S58081p3Page } from './s58081p3/s58081p3.page';    
import { S58081p4Page } from './s58081p4/s58081p4.page';    
import { S58081p5Page } from './s58081p5/s58081p5.page';    
import { S58081p6Page } from './s58081p6/s58081p6.page';    

const routes: Routes = [
  {
    path: '',   
     component: S58001Page,
  },
  {
    path: 's58001',   
    canActivate:[ActiveGuard],  
    component: S58001Page,
  },
  {
    path: 's58002',   
    canActivate:[ActiveGuard],  
    component: S58002Page,
  },
  {
    path: 's58003',   
    canActivate:[ActiveGuard],  
    component: S58003Page,
  },
  {
    path: 's58003t',   
    canActivate:[ActiveGuard],  
    component: S58003tPage,
  },
  {
    path: 's58004',   
    canActivate:[ActiveGuard],  
    component: S58004Page,
  },
  {
    path: 's58005',   
    canActivate:[ActiveGuard],  
    component: S58005Page,
  },
  {
    path: 's58006',   
    canActivate:[ActiveGuard],  
    component: S58006Page,
  },
  {
    path: 's58007',   
    canActivate:[ActiveGuard],  
    component: S58007Page,
  },
  {
    path: 's58008',   
    canActivate:[ActiveGuard],  
    component: S58008Page,
  },
  {
    path: 's58009',   
    canActivate:[ActiveGuard],  
    component: S58009Page,
  },
  {
    path: 's58010',   
    canActivate:[ActiveGuard],  
    component: S58010Page,
  },
  {
    path: 's58010t',   
    canActivate:[ActiveGuard],  
    component: S58010tPage,
  },
  {
    path: 's58011',   
    canActivate:[ActiveGuard],  
    component: S58011Page,
  },
  {
    path: 's58012',   
    canActivate:[ActiveGuard],  
    component: S58012Page,
  }, 
  {
    path: 's58013',   
    canActivate:[ActiveGuard],  
    component: S58013Page,
  },
  {
    path: 's58013t',   
    canActivate:[ActiveGuard],  
    component: S58013tPage,
  },
  {
    path: 's58014',   
    canActivate:[ActiveGuard],  
    component: S58014Page,
  },
  {
    path: 's58015',   
    canActivate:[ActiveGuard],  
    component: S58015Page,
  },
  {
    path: 's58016',   
    canActivate:[ActiveGuard],  
    component: S58016Page,
  },
  {
    path: 's58017',   
    canActivate:[ActiveGuard],  
    component: S58017Page,
  },
  {
    path: 's58018',   
    canActivate:[ActiveGuard],  
    component: S58018Page,
  }, 
  {
    path: 's58019',   
    canActivate:[ActiveGuard],  
    component: S58019Page,
  },
  {
    path: 's58020',   
    canActivate:[ActiveGuard],  
    component: S58020Page,
  },
  {
    path: 's58021',   
    canActivate:[ActiveGuard],  
    component: S58021Page,
  },
  {
    path: 's58022',   
    canActivate:[ActiveGuard],  
    component: S58022Page,
  },
  {
    path: 's58023',   
    canActivate:[ActiveGuard],  
    component: S58023Page,
  },
  {
    path: 's58024',   
    canActivate:[ActiveGuard],  
    component: S58024Page,
  },
  {
    path: 's58025',   
    canActivate:[ActiveGuard],  
    component: S58025Page,
  },
  {
    path: 's58025t',   
    canActivate:[ActiveGuard],  
    component: S58025tPage,
  },
  {
    path: 's58026',   
    canActivate:[ActiveGuard],  
    component: S58026Page,
  },
  {
    path: 's58026p1',   
    canActivate:[ActiveGuard],  
    component: S58026p1Page,
  },
  {
    path: 's58027',   
    canActivate:[ActiveGuard],  
    component: S58027Page,
  },
  {
    path: 's58028',   
    canActivate:[ActiveGuard],  
    component: S58028Page,
  },
  {
    path: 's58029',   
    canActivate:[ActiveGuard],  
    component: S58029Page,
  },
  {
    path: 's58030',   
    canActivate:[ActiveGuard],  
    component: S58030Page,
  },
  {
    path: 's58031',   
    canActivate:[ActiveGuard],  
    component: S58031Page,
  },
  {
    path: 's58032',   
    canActivate:[ActiveGuard],  
    component: S58032Page,
  },
  {
    path: 's58033',   
    canActivate:[ActiveGuard],  
    component: S58033Page,
  },  
  {
    path: 's58034',   
    canActivate:[ActiveGuard],  
    component: S58034Page,
  },  
  {
    path: 's58035',   
    canActivate:[ActiveGuard],  
    component: S58035Page,
  }, 
  {
    path: 's58036',   
    canActivate:[ActiveGuard],  
    component: S58036Page,
  },
  {
    path: 's58037',   
    canActivate:[ActiveGuard],  
    component: S58037Page,
  }, 
  {
    path: 's58038',   
    canActivate:[ActiveGuard],  
    component: S58038Page,
  },  
  {
    path: 's58039',   
    canActivate:[ActiveGuard],  
    component: S58039Page,
  },
  {
    path: 's58040',   
    canActivate:[ActiveGuard],  
    component: S58040Page,
  },
  {
    path: 's58041',   
    canActivate:[ActiveGuard],  
    component: S58041Page,
  },
  {
    path: 's58042',   
    canActivate:[ActiveGuard],  
    component: S58042Page,
  },
  {
    path: 's58043',   
    canActivate:[ActiveGuard],  
    component: S58043Page,
  },
  {
    path: 's58044',   
    canActivate:[ActiveGuard],  
    component: S58044Page,
  },
  {
    path: 's58045',   
    canActivate:[ActiveGuard],  
    component: S58045Page,
  },
  {
    path: 's58046',   
    canActivate:[ActiveGuard],  
    component: S58046Page,
  },
  {
    path: 's58047',   
    canActivate:[ActiveGuard],  
    component: S58047Page,
  },
  {
    path: 's58048',   
    canActivate:[ActiveGuard],  
    component: S58048Page,
  },
  {
    path: 's58049',   
    canActivate:[ActiveGuard],  
    component: S58049Page,
  },
  {
    path: 's58050',   
    canActivate:[ActiveGuard],  
    component: S58050Page,
  },
  {
    path: 's58051',   
    canActivate:[ActiveGuard],  
    component: S58051Page,
  },
  {
    path: 's58051t',   
    canActivate:[ActiveGuard],  
    component: S58051tPage,
  },  
  {
    path: 's58052',   
    canActivate:[ActiveGuard],  
    component: S58052Page,
  },
  {
    path: 's58053',   
    canActivate:[ActiveGuard],  
    component: S58053Page,
  },
  {
    path: 's58054',   
    canActivate:[ActiveGuard],  
    component: S58054Page,
  },
  {
    path: 's58055',   
    canActivate:[ActiveGuard],  
    component: S58055Page,
  },
  {
    path: 's58056',   
    canActivate:[ActiveGuard],  
    component: S58056Page,
  },
  {
    path: 's58057',   
    canActivate:[ActiveGuard],  
    component: S58057Page,
  },
  {
    path: 's58057t',   
    canActivate:[ActiveGuard],  
    component: S58057tPage,
  },
  {
    path: 's58058',   
    canActivate:[ActiveGuard],  
    component: S58058Page,
  },
  {
    path: 's58059',   
    canActivate:[ActiveGuard],  
    component: S58059Page,
  },
  {
    path: 's58060',   
    canActivate:[ActiveGuard],  
    component: S58060Page,
  },
  {
    path: 's58060t',   
    canActivate:[ActiveGuard],  
    component: S58060tPage,
  },
  {
    path: 's58061',   
    canActivate:[ActiveGuard],  
    component: S58061Page,
  },
  {
    path: 's58062',   
    canActivate:[ActiveGuard],  
    component: S58062Page,
  },
  {
    path: 's58063',   
    canActivate:[ActiveGuard],  
    component: S58063Page,
  },
  {
    path: 's58064',   
    canActivate:[ActiveGuard],  
    component: S58064Page,
  },
  {
    path: 's58065',   
    canActivate:[ActiveGuard],  
    component: S58065Page,
  },
  {
    path: 's58066',   
    canActivate:[ActiveGuard],  
    component: S58066Page,
  },
  {
    path: 's58067',   
    canActivate:[ActiveGuard],  
    component: S58067Page,
  },
  {
    path: 's58068',   
    canActivate:[ActiveGuard],  
    component: S58068Page,
  },
  {
    path: 's58068t',   
    canActivate:[ActiveGuard],  
    component: S58068tPage,
  },  
  {
    path: 's58069',   
    canActivate:[ActiveGuard],  
    component: S58069Page,
  },
  {
    path: 's58070',   
    canActivate:[ActiveGuard],  
    component: S58070Page,
  },
  {
    path: 's58070t',   
    canActivate:[ActiveGuard],  
    component: S58070tPage,
  },
  {
    path: 's58071',   
    canActivate:[ActiveGuard],  
    component: S58071Page,
  },
  {
    path: 's58072',   
    canActivate:[ActiveGuard],  
    component: S58072Page,
  },
  {
    path: 's58073',   
    canActivate:[ActiveGuard],  
    component: S58073Page,
  },
  {
    path: 's58074',   
    canActivate:[ActiveGuard],  
    component: S58074Page,
  },  
  {
    path: 's58075',   
    canActivate:[ActiveGuard],  
    component: S58075Page,
  },
  {
    path: 's58076',   
    canActivate:[ActiveGuard],  
    component: S58076Page,
  }, 
  {
    path: 's58077',   
    canActivate:[ActiveGuard],  
    component: S58077Page,
  },
  {
    path: 's58078',   
    canActivate:[ActiveGuard],  
    component: S58078Page,
  },
  {
    path: 's58079',   
    canActivate:[ActiveGuard],  
    component: S58079Page,
  },
  {
    path: 's58080',   
    canActivate:[ActiveGuard],  
    component: S58080Page,
  }, 
  {
    path: 's58081',   
    canActivate:[ActiveGuard],  
    component: S58081Page,
  },
  {
    path: 's58082',   
    canActivate:[ActiveGuard],  
    component: S58082Page,
  },  
  {
    path: 's58083',   
    canActivate:[ActiveGuard],  
    component: S58083Page,
  },
  {
    path: 's58084',   
    canActivate:[ActiveGuard],  
    component: S58084Page,
  },
  {
    path: 's58085',   
    canActivate:[ActiveGuard],  
    component: S58085Page,
  },
  {
    path: 's58086',   
    canActivate:[ActiveGuard],  
    component: S58086Page,
  },
  {
    path: 's58087',   
    canActivate:[ActiveGuard],  
    component: S58087Page,
  },
  {
    path: 's58087p1',   
    canActivate:[ActiveGuard],  
    component: S58087p1Page,
  },
  {
    path: 's58087p2',   
    canActivate:[ActiveGuard],  
    component: S58087p2Page,
  },
  {
    path: 's58087p3',   
    canActivate:[ActiveGuard],  
    component: S58087p3Page,
  },
  {
    path: 's58087p4',   
    canActivate:[ActiveGuard],  
    component: S58087p4Page,
  },
  {
    path: 's58088',   
    canActivate:[ActiveGuard],  
    component: S58088Page,
  },
  {
    path: 's58081p1',
    canActivate:[ActiveGuard],  
    component: S58081p1Page,
  },
  {
    path: 's58081p2',
    canActivate:[ActiveGuard],  
    component: S58081p2Page,
  },
  {
    path: 's58081p3',
    canActivate:[ActiveGuard],  
    component: S58081p3Page,
  },
  {
    path: 's58081p4',
    canActivate:[ActiveGuard],  
    component: S58081p4Page,
  },
  {
    path: 's58081p5',
    canActivate:[ActiveGuard],  
    component: S58081p5Page,
  },
  {
    path: 's58081p6',
    canActivate:[ActiveGuard],  
    component: S58081p6Page,
  },
 

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
