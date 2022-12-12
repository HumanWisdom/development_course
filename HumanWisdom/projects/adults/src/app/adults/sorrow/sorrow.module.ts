import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S60001Page } from './s60001/s60001.page';  
import { S60002Page } from './s60002/s60002.page';  
import { S60003Page } from './s60003/s60003.page';  
import { S60004Page } from './s60004/s60004.page';  
import { S60004tPage } from './s60004t/s60004t.page';  
import { S60005Page } from './s60005/s60005.page';  
import { S60006Page } from './s60006/s60006.page';  
import { S60007Page } from './s60007/s60007.page';  
import { S60008Page } from './s60008/s60008.page';  
import { S60009Page } from './s60009/s60009.page';  
import { S60010Page } from './s60010/s60010.page';  
import { S60011Page } from './s60011/s60011.page';  
import { S60012Page } from './s60012/s60012.page';  
import { S60013Page } from './s60013/s60013.page';  
import { S60014Page } from './s60014/s60014.page';  
import { S60015Page } from './s60015/s60015.page';  
import { S60016Page } from './s60016/s60016.page';  
import { S60017Page } from './s60017/s60017.page';  
import { S60018Page } from './s60018/s60018.page'; 
import { S60019Page } from './s60019/s60019.page';  
import { S60020Page } from './s60020/s60020.page';  
import { S60021Page } from './s60021/s60021.page';  
import { S60022Page } from './s60022/s60022.page';  
import { S60023Page } from './s60023/s60023.page';  
import { S60024Page } from './s60024/s60024.page';  
import { S60025Page } from './s60025/s60025.page';  
import { S60026Page } from './s60026/s60026.page';  
import { S60027Page } from './s60027/s60027.page';
import { S60028Page } from './s60028/s60028.page';  
import { S60029Page } from './s60029/s60029.page';  
import { S60030Page } from './s60030/s60030.page';  
import { S60031Page } from './s60031/s60031.page';  
import { S60032Page } from './s60032/s60032.page';  
import { S60033Page } from './s60033/s60033.page';  
import { S60034Page } from './s60034/s60034.page';  
import { S60035Page } from './s60035/s60035.page';  
import { S60036Page } from './s60036/s60036.page';  
import { S60037Page } from './s60037/s60037.page';  
import { S60038Page } from './s60038/s60038.page';  
import { S60039Page } from './s60039/s60039.page';  
import { S60040Page } from './s60040/s60040.page';  
import { S60041Page } from './s60041/s60041.page';  
import { S60042Page } from './s60042/s60042.page';  
import { S60043Page } from './s60043/s60043.page';  
import { S60044Page } from './s60044/s60044.page';  
import { S60045Page } from './s60045/s60045.page';  
import { S60045tPage } from './s60045t/s60045t.page';  
import { S60046Page } from './s60046/s60046.page';  
import { S60047Page } from './s60047/s60047.page';  
import { S60048Page } from './s60048/s60048.page'; 
import { S60048tPage } from './s60048t/s60048t.page';  
import { S60049Page } from './s60049/s60049.page';  
import { S60050Page } from './s60050/s60050.page';  
import { S60051Page } from './s60051/s60051.page';  
import { S60052Page } from './s60052/s60052.page'; 
import { S60052tPage } from './s60052t/s60052t.page';  
import { S60053Page } from './s60053/s60053.page';  
import { S60054Page } from './s60054/s60054.page';  
import { S60055Page } from './s60055/s60055.page';  
import { S60056Page } from './s60056/s60056.page';
import { S60056tPage } from './s60056t/s60056t.page';  
import { S60057Page } from './s60057/s60057.page';
import { S60058Page } from './s60058/s60058.page';  
import { S60059Page } from './s60059/s60059.page'; 
import { S60059tPage } from './s60059t/s60059t.page';  
import { S60060Page } from './s60060/s60060.page';  
import { S60061Page } from './s60061/s60061.page';  
import { S60062Page } from './s60062/s60062.page';  
import { S60062tPage } from './s60062t/s60062t.page';  
import { S60063Page } from './s60063/s60063.page';  
import { S60064Page } from './s60064/s60064.page';  
import { S60065Page } from './s60065/s60065.page';  
import { S60066Page } from './s60066/s60066.page';  
import { S60067Page } from './s60067/s60067.page';  
import { S60068Page } from './s60068/s60068.page';  
import { S60069Page } from './s60069/s60069.page';  
import { S60069tPage } from './s60069t/s60069t.page';  
import { S60070Page } from './s60070/s60070.page';  
import { S60071Page } from './s60071/s60071.page';  
import { S60072Page } from './s60072/s60072.page';  
import { S60073Page } from './s60073/s60073.page';  
import { S60074Page } from './s60074/s60074.page';  
import { S60074tPage } from './s60074t/s60074t.page'; 
import { S60075Page } from './s60075/s60075.page'; 
import { S60075tPage } from './s60075t/s60075t.page';  
import { S60076Page } from './s60076/s60076.page';  
import { S60077Page } from './s60077/s60077.page';  
import { S60077tPage } from './s60077t/s60077t.page';  
import { S60078Page } from './s60078/s60078.page';  
import { S60078tPage } from './s60078t/s60078t.page';  
import { S60079Page } from './s60079/s60079.page';  
import { S60080Page } from './s60080/s60080.page';    
import { S60081Page } from './s60081/s60081.page';  
import { S60082Page } from './s60082/s60082.page'; 
import { S60082tPage } from './s60082t/s60082t.page';  
import { S60083Page } from './s60083/s60083.page';  
import { S60084Page } from './s60084/s60084.page';  
import { S60085Page } from './s60085/s60085.page';  
import { S60085tPage } from './s60085t/s60085t.page'; 
import { S60086Page } from './s60086/s60086.page';  
import { S60087Page } from './s60087/s60087.page'; 
import { S60087tPage } from './s60087t/s60087t.page';  
import { S60088Page } from './s60088/s60088.page';  
import { S60089Page } from './s60089/s60089.page';  
import { S60089tPage } from './s60089t/s60089t.page';  
import { S60090Page } from './s60090/s60090.page';  
import { S60091Page } from './s60091/s60091.page';
import { S60091tPage } from './s60091t/s60091t.page';  
import { S60092Page } from './s60092/s60092.page';  
import { S60092tPage } from './s60092t/s60092t.page';  
import { S60093Page } from './s60093/s60093.page';  
import { S60094Page } from './s60094/s60094.page';  
import { S60095Page } from './s60095/s60095.page';  
import { S60096Page } from './s60096/s60096.page';  
import { S60097Page } from './s60097/s60097.page';  
import { S60098Page } from './s60098/s60098.page';  
import { S60099Page } from './s60099/s60099.page';  
import { S60100Page } from './s60100/s60100.page';  
import { S60101Page } from './s60101/s60101.page';  
import { S60102Page } from './s60102/s60102.page';  
import { S60103Page } from './s60103/s60103.page';  
import { S60104Page } from './s60104/s60104.page';  
import { S60105Page } from './s60105/s60105.page';  
import { S60106Page } from './s60106/s60106.page';  
import { S60107Page } from './s60107/s60107.page';  
import { S60108Page } from './s60108/s60108.page';  
import { S60109Page } from './s60109/s60109.page';  
import { S60110Page } from './s60110/s60110.page';  
import { S60111Page } from './s60111/s60111.page';  
import { S60112Page } from './s60112/s60112.page';  

import { SorrowRoutingModule } from './sorrow-routing.module';

@NgModule({
  declarations: [
    S60001Page ,
    S60002Page ,
    S60003Page ,
    S60004Page ,
    S60004tPage ,
    S60005Page ,
    S60006Page ,    
    S60007Page ,
    S60008Page ,
    S60009Page ,
    S60010Page ,
    S60011Page ,
    S60012Page ,
    S60013Page ,
    S60014Page ,
    S60015Page ,
    S60016Page ,
    S60017Page ,
    S60017Page ,
    S60018Page ,    
    S60019Page ,
    S60020Page ,
    S60021Page ,
    S60022Page ,
    S60023Page ,
    S60024Page ,    
    S60025Page ,
    S60026Page ,
    S60027Page ,   
    S60028Page ,
    S60029Page ,
    S60030Page ,    
    S60031Page ,
    S60032Page ,
    S60033Page ,    
    S60034Page ,
    S60035Page ,   
    S60036Page ,    
    S60037Page ,   
    S60038Page ,    
    S60039Page ,
    S60040Page ,
    S60041Page ,
    S60042Page ,
    S60043Page ,
    S60044Page ,
    S60045Page ,
    S60045tPage ,
    S60046Page ,
    S60047Page ,
    S60048Page ,
    S60048tPage ,
    S60049Page ,
    S60050Page ,
    S60051Page ,   
    S60052Page ,
    S60052tPage ,
    S60053Page ,
    S60054Page ,
    S60055Page ,
    S60056Page ,
    S60056tPage ,
    S60057Page ,   
    S60058Page ,
    S60059Page ,
    S60059tPage ,
    S60060Page ,
    S60061Page ,
    S60062Page ,
    S60062tPage ,
    S60063Page ,
    S60064Page ,
    S60065Page ,   
    S60066Page ,
    S60067Page ,    
    S60068Page ,
    S60069Page ,
    S60069tPage ,
    S60070Page ,
    S60071Page ,
    S60072Page ,
    S60073Page ,
    S60074Page ,
    S60074tPage ,
    S60075Page ,
    S60075tPage ,
    S60076Page ,
    S60077Page ,
    S60077tPage ,
    S60078Page ,
    S60078tPage ,
    S60079Page ,
    S60080Page ,    
    S60081Page ,
    S60082Page ,
    S60082tPage ,
    S60083Page ,
    S60084Page ,
    S60085Page ,
    S60085tPage ,
    S60086Page ,    
    S60087Page ,
    S60087tPage ,
    S60088Page ,
    S60089Page ,
    S60089tPage ,
    S60090Page ,
    S60091Page ,
    S60091tPage ,
    S60092Page ,
    S60092tPage ,
    S60093Page ,
    S60094Page ,   
    S60095Page ,    
    S60096Page ,    
    S60097Page ,
    S60098Page ,
    S60099Page ,   
    S60100Page ,
    S60101Page ,
    S60102Page ,
    S60103Page ,
    S60104Page ,   
    S60105Page ,
    S60106Page ,
    S60107Page ,   
    S60108Page ,
    S60109Page ,
    S60110Page ,
    S60111Page ,
    S60112Page ,   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SorrowRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class SorrowModule { }
