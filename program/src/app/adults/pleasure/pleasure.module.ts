import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';
 
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

import { PleasureRoutingModule } from './pleasure-routing.module';

@NgModule({
  declarations: [
    S20001Page ,
    S20002Page ,
    S20003Page ,    
    S20004Page ,
    S20004tPage ,
    S20005Page ,
    S20005tPage ,
    S20006Page ,
    S20007Page ,
    S20008Page ,
    S20008tPage ,
    S20009Page ,
    S20010Page ,    
    S20011Page ,
    S20012Page ,    
    S20013Page ,
    S20014Page ,   
    S20015Page ,
    S20016Page ,    
    S20017Page ,
    S20018Page ,
    S20019Page ,
    S20019tPage ,
    S20020Page ,
    S20021Page ,
    S20021tPage ,
    S20022Page ,
    S20023Page ,
    S20024Page ,
    S20024tPage ,
    S20025Page ,
    S20026Page ,
    S20027Page ,
    S20027tPage ,
    S20028Page ,
    S20028tPage ,
    S20029Page ,
    S20029tPage ,
    S20030Page ,
    S20031Page ,
    S20032Page ,
    S20033Page ,
    S20034Page ,
    S20035Page ,
    S20036Page ,
    S20036tPage ,
    S20037Page ,
    S20038Page ,
    S20039Page ,
    S20040Page ,
    S20040tPage ,
    S20041Page ,
    S20042Page ,
    S20043Page ,
    S20044Page ,
    S20045Page ,
    S20045tPage ,
    S20046Page ,
    S20047Page ,   
    S20048Page ,
    S20049Page ,
    S20050Page ,
    S20051Page ,
    S20052Page ,
    S20053Page ,
    S20054Page ,
    S20054tPage ,
    S20055Page ,
    S20056Page ,
    S20057Page ,
    S20057tPage ,
    S20058Page ,
    S20058tPage ,
    S20059Page ,
    S20059tPage ,
    S20060Page ,
    S20061Page ,
    S20062Page ,
    S20062tPage ,
    S20063Page ,
    S20063tPage ,
    S20064Page ,
    S20064tPage ,
    S20065Page ,
    S20066Page ,
    S20067Page ,
    S20067tPage ,
    S20068Page ,
    S20069Page ,
    S20070Page ,
    S20070p1Page ,
    S20070p2Page ,
    S20070p3Page ,
    S20070p4Page ,
    S20071Page ,
    S20072Page ,
    S20073Page ,
    S20074Page ,   
    S20075Page ,
    S20076Page ,
    S20077Page ,
    S20078Page ,
    S20079Page ,
    S20080Page ,
    S20081Page ,
    S20082Page ,   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PleasureRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class PleasureModule { }
