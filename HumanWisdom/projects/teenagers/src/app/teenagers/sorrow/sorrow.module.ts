import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

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
import { S60092Page } from './s116091/s116091.page';  
import { S60092tPage } from './s116091t/s116091t.page';  
import { S60093Page } from './s116092/s116092.page';  
import { S60094Page } from './s116093/s116093.page';  
import { S60095Page } from './s116094/s116094.page';  
import { S60096Page } from './s116095/s60096.page';  
import { S60097Page } from './s116096/s116096.page';  
import { S60098Page } from './s116097/s116097.page';  
import { S60099Page } from './s116098/s116098.page';  
import { S60100Page } from './s116099/s116099.page';  
import { S60101Page } from './s116100/s116100.page';  
import { S60102Page } from './s116101/s116101.page';  
import { S60103Page } from './s116102/s116102.page';  
import { S60104Page } from './s116103/s116103.page';  
import { S60105Page } from './s116104/s116104.page';  
import { S60106Page } from './s116105/s116105.page';  
import { S60107Page } from './s116106/s116106.page';  
import { S60108Page } from './s116107/s116107.page';  
import { S60109Page } from './s116108/s116108.page';  
import { S60110Page } from './s116109/s116109.page';  
import { S60111Page } from './s116110/s116110.page';  
import { S60112Page } from './s116111/s116111.page';  

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
