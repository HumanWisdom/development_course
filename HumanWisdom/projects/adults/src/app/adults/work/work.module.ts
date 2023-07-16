import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

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
import { S58088Page } from './s58088/s58088.page';  
import { S58081p1Page } from './s58081p1/s58081p1.page';    
import { S58081p2Page } from './s58081p2/s58081p2.page';    
import { S58081p3Page } from './s58081p3/s58081p3.page';    
import { S58081p4Page } from './s58081p4/s58081p4.page';    
import { S58081p5Page } from './s58081p5/s58081p5.page';    
import { S58081p6Page } from './s58081p6/s58081p6.page';    

import { WorkRoutingModule } from './work-routing.module';

@NgModule({
  declarations: [
    S58001Page ,
    S58002Page ,
    S58003Page ,
    S58003tPage ,
    S58004Page ,
    S58005Page ,
    S58006Page ,
    S58007Page ,
    S58008Page ,
    S58009Page ,
    S58010Page ,
    S58010tPage ,
    S58011Page ,
    S58012Page ,
    S58013Page ,
    S58013tPage ,
    S58014Page ,   
    S58015Page ,
    S58016Page ,    
    S58017Page ,
    S58018Page ,
    S58019Page ,
    S58020Page ,
    S58021Page ,
    S58022Page ,
    S58023Page ,
    S58024Page ,
    S58025Page ,
    S58025tPage ,
    S58026Page ,
    S58026p1Page ,
    S58027Page ,
    S58028Page ,
    S58029Page ,
    S58030Page ,
    S58031Page ,
    S58032Page ,
    S58033Page ,
    S58034Page ,
    S58035Page ,
    S58036Page ,
    S58037Page ,
    S58038Page ,
    S58039Page ,
    S58040Page ,
    S58041Page ,
    S58042Page ,
    S58043Page ,
    S58044Page ,
    S58045Page ,
    S58046Page ,
    S58047Page ,   
    S58048Page ,
    S58049Page ,
    S58050Page ,
    S58051Page ,
    S58051tPage ,
    S58052Page ,
    S58053Page ,
    S58054Page ,
    S58055Page ,
    S58056Page ,
    S58057Page ,
    S58057tPage ,
    S58058Page ,
    S58059Page ,
    S58060Page ,
    S58060tPage ,
    S58061Page ,
    S58062Page ,
    S58063Page ,
    S58064Page ,
    S58065Page ,
    S58066Page ,
    S58067Page ,
    S58068Page ,
    S58068tPage ,
    S58069Page ,
    S58070Page ,
    S58070tPage ,
    S58071Page ,
    S58072Page ,
    S58073Page ,
    S58074Page ,    
    S58075Page ,
    S58076Page ,
    S58077Page ,
    S58078Page ,
    S58079Page ,
    S58080Page ,
    S58081Page ,
    S58082Page ,
    S58083Page ,
    S58084Page ,
    S58085Page ,
    S58086Page ,
    S58087Page ,
    S58087p1Page ,
    S58087p2Page ,
    S58087p3Page ,
    S58088Page , 
    S58081p1Page,   
    S58081p2Page,   
    S58081p3Page,   
    S58081p4Page,   
    S58081p5Page,   
    S58081p6Page,   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WorkRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class WorkModule { }
