import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S21001Page } from './s21001/s21001.page';  
import { S21002Page } from './s21002/s21002.page';  
import { S21003Page } from './s21003/s21003.page';  
import { S21003tPage } from './s21003t/s21003t.page';  
import { S21004Page } from './s21004/s21004.page';  
import { S21005Page } from './s21005/s21005.page';  
import { S21006Page } from './s21006/s21006.page';  
import { S21006tPage } from './s21006t/s21006t.page';  
import { S21007Page } from './s21007/s21007.page';  
import { S21008Page } from './s21008/s21008.page';  
import { S21009Page } from './s21009/s21009.page';  
import { S21010Page } from './s21010/s21010.page';  
import { S21011Page } from './s21011/s21011.page'; 
import { S21012Page } from './s21012/s21012.page';  
import { S21013Page } from './s21013/s21013.page';  
import { S21014Page } from './s21014/s21014.page';  
import { S21015Page } from './s21015/s21015.page';  
import { S21016Page } from './s21016/s21016.page';  
import { S21017Page } from './s21017/s21017.page';  
import { S21017tPage } from './s21017t/s21017t.page';  
import { S21018Page } from './s21018/s21018.page'; 
import { S21019Page } from './s21019/s21019.page';  
import { S21020Page } from './s21020/s21020.page';
import { S21020tPage } from './s21020t/s21020t.page';  
import { S21021Page } from './s21021/s21021.page';  
import { S21022Page } from './s21022/s21022.page';  
import { S21023Page } from './s21023/s21023.page';  
import { S21024Page } from './s21024/s21024.page';  
import { S21025Page } from './s21025/s21025.page';  
import { S21026Page } from './s21026/s21026.page'; 
import { S21026tPage } from './s21026t/s21026t.page'; 
import { S21027Page } from './s21027/s21027.page';  
import { S21028Page } from './s21028/s21028.page';  
import { S21029Page } from './s21029/s21029.page';  
import { S21030Page } from './s21030/s21030.page';  
import { S21031Page } from './s21031/s21031.page';  
import { S21032Page } from './s21032/s21032.page'; 
import { S21032tPage } from './s21032t/s21032t.page';  
import { S21033Page } from './s21033/s21033.page';  
import { S21034Page } from './s21034/s21034.page';  
import { S21035Page } from './s21035/s21035.page';  
import { S21036Page } from './s21036/s21036.page';  
import { S21037Page } from './s21037/s21037.page';  
import { S21038Page } from './s21038/s21038.page';  
import { S21039Page } from './s21039/s21039.page';  
import { S21040Page } from './s21040/s21040.page';  
import { S21041Page } from './s21041/s21041.page';  
import { S21042Page } from './s21042/s21042.page';  
import { S21043Page } from './s21043/s21043.page';  
import { S21043p1Page } from './s21043p1/s21043p1.page';  
import { S21043p2Page } from './s21043p2/s21043p2.page'; 
import { S21043p3Page } from './s21043p3/s21043p3.page'; 
import { S21043p4Page } from './s21043p4/s21043p4.page'; 
import { S21043p5Page } from './s21043p5/s21043p5.page'; 
import { S21043p6Page } from './s21043p6/s21043p6.page'; 
import { S21043p7Page } from './s21043p7/s21043p7.page'; 
import { S21044Page } from './s21044/s21044.page'; 
import { S21044tPage } from './s21044t/s21044t.page';  
import { S21045Page } from './s21045/s21045.page';  
import { S21046Page } from './s21046/s21046.page';  
import { S21047Page } from './s21047/s21047.page';  
import { S21048Page } from './s21048/s21048.page';  
import { S21048tPage } from './s21048t/s21048t.page';  
import { S21049Page } from './s21049/s21049.page';  
import { S21050Page } from './s21050/s21050.page';  
import { S21051Page } from './s21051/s21051.page';  
import { S21052Page } from './s21052/s21052.page';  
import { S21053Page } from './s21053/s21053.page'; 
import { S21053tPage } from './s21053t/s21053t.page';   
import { S21054Page } from './s21054/s21054.page';  
import { S21055Page } from './s21055/s21055.page';  
import { S21055tPage } from './s21055t/s21055t.page';  
import { S21056Page } from './s21056/s21056.page';  
import { S21057Page } from './s21057/s21057.page';  
import { S21058Page } from './s21058/s21058.page';  
import { S21059Page } from './s21059/s21059.page'; 
import { S21059tPage } from './s21059t/s21059t.page';   
import { S21060Page } from './s21060/s21060.page'; 
import { S21061Page } from './s21061/s21061.page';   
import { S21061p1Page } from './s21061p1/s21061p1.page'; 
import { S21061p2Page } from './s21061p2/s21061p2.page'; 
import { S21061p3Page } from './s21061p3/s21061p3.page'; 
import { S21061p4Page } from './s21061p4/s21061p4.page'; 
import { S21061p5Page } from './s21061p5/s21061p5.page';  
import { S21062Page } from './s21062/s21062.page';  
import { S21063Page } from './s21063/s21063.page'; 
import { S21063tPage } from './s21063t/s21063t.page';   
import { S21064Page } from './s21064/s21064.page';  
import { S21065Page } from './s21065/s21065.page';  
import { S21066Page } from './s21066/s21066.page';  
import { S21066p1Page } from './s21066p1/s21066p1.page';  
import { S21066p2Page } from './s21066p2/s21066p2.page';  
import { S21066p3Page } from './s21066p3/s21066p3.page';  
import { S21066p4Page } from './s21066p4/s21066p4.page';  
import { S21067Page } from './s21067/s21067.page';  
import { S21068Page } from './s21068/s21068.page';  

import { IdentityRoutingModule } from './identity-routing.module';

@NgModule({
  declarations: [
    S21001Page ,
    S21002Page ,
    S21003Page ,
    S21003tPage ,
    S21004Page ,
    S21005Page ,
    S21006Page ,
    S21006tPage ,
    S21007Page ,
    S21008Page ,
    S21009Page ,
    S21010Page ,
    S21011Page ,
    S21012Page ,
    S21013Page ,
    S21014Page ,
    S21015Page ,
    S21016Page ,
    S21017Page ,
    S21017tPage ,
    S21018Page ,
    S21019Page ,
    S21020Page ,
    S21020tPage ,
    S21021Page ,
    S21022Page ,
    S21023Page ,
    S21024Page ,
    S21025Page ,
    S21026Page ,
    S21026tPage ,
    S21027Page ,
    S21028Page ,
    S21029Page ,
    S21030Page ,
    S21031Page ,
    S21032Page ,
    S21032tPage ,
    S21033Page ,
    S21034Page ,
    S21035Page ,
    S21036Page ,
    S21037Page ,
    S21038Page ,
    S21039Page ,
    S21040Page ,
    S21041Page ,
    S21042Page ,
    S21043Page ,
    S21043p1Page ,
    S21043p2Page ,
    S21043p3Page ,
    S21043p4Page ,
    S21043p5Page ,
    S21043p6Page ,
    S21043p7Page ,
   
    S21044Page ,
    S21044tPage ,
    S21045Page ,
    S21046Page ,
    S21047Page ,
   
    S21048Page ,
    S21048tPage ,
    S21049Page ,
    S21050Page ,
    S21051Page ,
    S21052Page ,
    S21053Page ,
    S21053tPage ,
    S21054Page ,
    S21055Page ,
    S21055tPage ,
    S21056Page ,
    S21057Page ,
    S21058Page ,
    S21059Page ,
    S21059tPage ,
    S21060Page ,
    S21061Page ,
    S21061p1Page ,
    S21061p2Page ,
    S21061p3Page ,
    S21061p4Page ,
    S21061p5Page ,
    S21062Page ,
    S21063Page ,
    S21063tPage ,
    S21064Page ,
    S21065Page ,
    S21066Page ,
    S21066p1Page ,
    S21066p2Page ,
    S21066p3Page ,
    S21066p4Page ,
    S21067Page ,
    S21068Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IdentityRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class IdentityModule { }
