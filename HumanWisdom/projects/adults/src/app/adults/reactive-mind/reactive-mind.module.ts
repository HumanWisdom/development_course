import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S54001Page } from './s54001/s54001.page';  
import { S54002Page } from './s54002/s54002.page';  
import { S54003Page } from './s54003/s54003.page';  
import { S54003tPage } from './s54003t/s54003t.page';  
import { S54004Page } from './s54004/s54004.page';  
import { S54005Page } from './s54005/s54005.page';  
import { S54006Page } from './s54006/s54006.page';  
import { S54007Page } from './s54007/s54007.page';  
import { S54008Page } from './s54008/s54008.page';  
import { S54009Page } from './s54009/s54009.page';  
import { S54010Page } from './s54010/s54010.page';  
import { S54010tPage } from './s54010t/s54010t.page';  
import { S54011Page } from './s54011/s54011.page'; 
import { S54012Page } from './s54012/s54012.page';  
import { S54012tPage } from './s54012t/s54012t.page';  
import { S54013Page } from './s54013/s54013.page';  
import { S54014Page } from './s54014/s54014.page';  
import { S54014tPage } from './s54014t/s54014t.page';  
import { S54015Page } from './s54015/s54015.page';  
import { S54016Page } from './s54016/s54016.page';  
import { S54017Page } from './s54017/s54017.page';  
import { S54018Page } from './s54018/s54018.page'; 
import { S54019Page } from './s54019/s54019.page';  
import { S54020Page } from './s54020/s54020.page';  
import { S54021Page } from './s54021/s54021.page';  
import { S54022Page } from './s54022/s54022.page';  
import { S54023Page } from './s54023/s54023.page';  
import { S54024Page } from './s54024/s54024.page';  
import { S54025Page } from './s54025/s54025.page';  
import { S54026Page } from './s54026/s54026.page';  
import { S54027Page } from './s54027/s54027.page';  
import { S54028Page } from './s54028/s54028.page';  
import { S54029Page } from './s54029/s54029.page';  
import { S54030Page } from './s54030/s54030.page';  
import { S54031Page } from './s54031/s54031.page';  
import { S54032Page } from './s54032/s54032.page';  
import { S54033Page } from './s54033/s54033.page';  
import { S54034Page } from './s54034/s54034.page';  
import { S54035Page } from './s54035/s54035.page';  
import { S54036Page } from './s54036/s54036.page';  
import { S54037Page } from './s54037/s54037.page';  
import { S54038Page } from './s54038/s54038.page';  
import { S54039Page } from './s54039/s54039.page';  
import { S54040Page } from './s54040/s54040.page';  
import { S54041Page } from './s54041/s54041.page';  
import { S54042Page } from './s54042/s54042.page';  
import { S54043Page } from './s54043/s54043.page';  
import { S54044Page } from './s54044/s54044.page';  
import { S54045Page } from './s54045/s54045.page';  
import { S54046Page } from './s54046/s54046.page';  
import { S54047Page } from './s54047/s54047.page';  
import { S54047tPage } from './s54047t/s54047t.page';  
import { S54048Page } from './s54048/s54048.page';  
import { S54049Page } from './s54049/s54049.page';  
import { S54050Page } from './s54050/s54050.page';  
import { S54051Page } from './s54051/s54051.page';  
import { S54052Page } from './s54052/s54052.page';  
import { S54053Page } from './s54053/s54053.page';  
import { S54054Page } from './s54054/s54054.page';  
import { S54055Page } from './s54055/s54055.page';  
import { S54056Page } from './s54056/s54056.page';  
import { S54057Page } from './s54057/s54057.page';  
import { S54058Page } from './s54058/s54058.page';  
import { S54059Page } from './s54059/s54059.page';  
import { S54060Page } from './s54060/s54060.page';  
import { S54061Page } from './s54061/s54061.page';  
import { S54062Page } from './s54062/s54062.page';  
import { S54063Page } from './s54063/s54063.page';  
import { S54064Page } from './s54064/s54064.page';  
import { S54065Page } from './s54065/s54065.page';  
import { S54066Page } from './s54066/s54066.page';  
import { S54067Page } from './s54067/s54067.page';  
import { S54068Page } from './s54068/s54068.page';  
import { S54069Page } from './s54069/s54069.page';  
import { S54070Page } from './s54070/s54070.page';  
import { S54071Page } from './s54071/s54071.page';  
import { S54072Page } from './s54072/s54072.page';  
import { S54073Page } from './s54073/s54073.page';  
import { S54074Page } from './s54074/s54074.page'; 
import { S54074tPage } from './s54074t/s54074t.page';  
import { S54075Page } from './s54075/s54075.page';  
import { S54076Page } from './s54076/s54076.page';  
import { S54077Page } from './s54077/s54077.page';  
import { S54078Page } from './s54078/s54078.page';  
import { S54079Page } from './s54079/s54079.page';  
import { S54080Page } from './s54080/s54080.page';  
import { S54081Page } from './s54081/s54081.page';  
import { S54082Page } from './s54082/s54082.page';  
import { S54083Page } from './s54083/s54083.page';  
import { S54084Page } from './s54084/s54084.page';  

import { ReactiveMindRoutingModule } from './reactive-mind-routing.module';

@NgModule({
  declarations: [
    S54001Page ,
    S54002Page ,
    S54003Page ,
    S54003tPage ,
    S54004Page ,
    S54005Page ,
    S54006Page ,
    S54007Page ,
    S54008Page ,
    S54009Page ,
    S54010Page ,
    S54010tPage ,
    S54011Page ,
    S54012Page ,
    S54012tPage ,
    S54013Page ,
    S54014Page ,
    S54014tPage ,
    S54015Page ,
    S54016Page ,
    
    S54017Page ,
    S54018Page ,
    S54019Page ,
    S54020Page ,
    S54021Page ,
    S54022Page ,
    S54023Page ,
    S54024Page ,
    S54025Page ,
    S54026Page ,
    S54027Page ,
    S54028Page ,
    S54029Page ,
    S54030Page ,
    S54031Page ,
    S54032Page ,
    S54033Page ,
    S54034Page ,
    S54035Page ,
    S54036Page ,
    S54037Page ,
    S54038Page ,
    S54039Page ,
    S54040Page ,
    S54041Page ,
    S54042Page ,
    S54043Page ,
    S54044Page ,
    S54045Page ,
    S54046Page ,
    S54047Page ,
    S54047tPage ,
    S54048Page ,
    S54049Page ,
    S54050Page ,
    S54051Page ,
    S54052Page ,
    S54053Page ,
    S54054Page ,
    S54055Page ,
    S54056Page ,
    S54057Page ,
    S54058Page ,
    S54059Page ,
    S54060Page ,
    S54061Page ,
    S54062Page ,
    S54063Page ,
    S54064Page ,
    S54065Page ,
    S54066Page ,
    S54067Page ,
    S54068Page ,
    S54069Page ,
    S54070Page ,
    S54071Page ,
    S54072Page ,
    S54073Page ,
    S54074Page ,
    S54074tPage ,
    S54075Page ,
    S54076Page ,
    S54077Page ,
    S54078Page ,
    S54079Page ,
    S54080Page ,
    S54081Page ,
    S54082Page ,
    S54083Page ,
    S54084Page ,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveMindRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class ReactiveMindModule { }
