import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S25001Page } from './s25001/s25001.page';  
import { S25002Page } from './s25002/s25002.page';  
import { S25002p1Page } from './s25002p1/s25002p1.page';  
import { S25003Page } from './s25003/s25003.page'; 
import { S25003tPage } from './s25003t/s25003t.page';  
import { S25004Page } from './s25004/s25004.page';  
import { S25005Page } from './s25005/s25005.page';  
import { S25006Page } from './s25006/s25006.page';  
import { S25007Page } from './s25007/s25007.page';  
import { S25008Page } from './s25008/s25008.page';  
import { S25009Page } from './s25009/s25009.page';  
import { S25010Page } from './s25010/s25010.page';  
import { S25010tPage } from './s25010t/s25010t.page';  
import { S25011Page } from './s25011/s25011.page'; 
import { S25012Page } from './s25012/s25012.page';  
import { S25013Page } from './s25013/s25013.page';  
import { S25014Page } from './s25014/s25014.page';  
import { S25015Page } from './s25015/s25015.page';  
import { S25016Page } from './s25016/s25016.page';  
import { S25017Page } from './s25017/s25017.page';  
import { S25018Page } from './s25018/s25018.page'; 
import { S25019Page } from './s25019/s25019.page';  
import { S25020Page } from './s25020/s25020.page';  
import { S25021Page } from './s25021/s25021.page';  
import { S25021tPage } from './s25021t/s25021t.page';  
import { S25022Page } from './s25022/s25022.page';  
import { S25023Page } from './s25023/s25023.page'; 
import { S25023p1Page } from './s25023p1/s25023p1.page';   
import { S25024Page } from './s25024/s25024.page';  
import { S25024tPage } from './s25024t/s25024t.page';  
import { S25025Page } from './s25025/s25025.page';
import { S25025p1Page } from './s25025p1/s25025p1.page';    
import { S25026Page } from './s25026/s25026.page';  
import { S25027Page } from './s25027/s25027.page'; 
import { S25027tPage } from './s25027t/s25027t.page';   
import { S25028Page } from './s25028/s25028.page';  
import { S25029Page } from './s25029/s25029.page';
import { S25029p1Page } from './s25029p1/s25029p1.page';
import { S25029tPage } from './s25029t/s25029t.page';      
import { S25030Page } from './s25030/s25030.page';  
import { S25030tPage } from './s25030t/s25030t.page';  
import { S25030p1Page } from './s25030p1/s25030p1.page';  
import { S25031Page } from './s25031/s25031.page';  
import { S25032Page } from './s25032/s25032.page'; 
import { S25032tPage } from './s25032t/s25032t.page';   
import { S25033Page } from './s25033/s25033.page';  
import { S25034Page } from './s25034/s25034.page';  
import { S25035Page } from './s25035/s25035.page';  
import { S25036Page } from './s25036/s25036.page';  
import { S25037Page } from './s25037/s25037.page';  
import { S25038Page } from './s25038/s25038.page';  
import { S25039Page } from './s25039/s25039.page';  
import { S25040Page } from './s25040/s25040.page';  
import { S25041Page } from './s25041/s25041.page';  

import { SelfImageRoutingModule } from './self-image-routing.module';

@NgModule({
  declarations: [
    S25001Page ,
    S25002Page ,
    S25002p1Page ,
    S25003Page ,
    S25003tPage ,
    S25004Page ,
    S25005Page ,
    S25006Page ,
    S25007Page ,
    S25008Page ,
    S25009Page ,
    S25010Page ,
    S25010tPage ,
    S25011Page ,
    S25012Page ,
    S25013Page ,
    S25014Page ,
    S25015Page ,
    S25016Page ,
    S25017Page ,
    S25017Page ,
    S25018Page ,
    S25019Page ,
    S25020Page ,
    S25021Page ,
    S25021tPage ,
    S25022Page ,
    S25023Page ,
    S25023p1Page ,
    S25024Page ,
    S25024tPage ,
    S25025Page ,
    S25025p1Page ,
    S25026Page ,
    S25027Page ,
    S25027tPage ,
    S25028Page ,
    S25029Page ,
    S25029p1Page ,
    S25029tPage ,
    S25030Page ,    
    S25030tPage ,
    S25030p1Page ,
    S25031Page ,
    S25032Page ,
    S25032tPage ,
    S25033Page ,
    S25034Page ,
    S25035Page ,
    S25036Page ,
    S25037Page ,
    S25038Page ,
    S25039Page ,
    S25040Page ,
    S25041Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelfImageRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class SelfImageModule { }
