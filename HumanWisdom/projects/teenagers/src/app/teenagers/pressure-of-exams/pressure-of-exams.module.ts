import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import { S139001Page } from './s139001/s139001.page';  
import { S139002Page } from './s139002/s139002.page';  
import { S139002tPage } from './s139002t/s139002t.page';  
import { S139003Page } from './s139003/s139003.page';  
import { S139004Page } from './s139004/s139004.page';  
import { S139005Page } from './s139005/s139005.page';  
import { S139006Page } from './s139006/s139006.page';  
import { S139007Page } from './s139007/s139007.page';  
import { S139007tPage } from './s139007t/s139007t.page'; 
import { S139008Page } from './s139008/s139008.page';  
import { S139009Page } from './s139009/s139009.page';  
import { S139009tPage } from './s139009t/s139009t.page';  
import { S139010Page } from './s139010/s139010.page';  
import { S139011Page } from './s139011/s139011.page'; 
import { S139012Page } from './s139012/s139012.page';  
import { S139013Page } from './s139013/s139013.page'; 
import { S139014Page } from './s139014/s139014.page';  
import { S139015Page } from './s139015/s139015.page';  
import { S139016Page } from './s139016/s139016.page';  
import { S139017Page } from './s139017/s139017.page';  
import { S139017tPage } from './s139017t/s139017t.page';  
import { S139018Page } from './s139018/s139018.page'; 
import { S139019Page } from './s139019/s139019.page';  
import { S139020Page } from './s139020/s139020.page';  
import { S139021Page } from './s139021/s139021.page';  
import { S139022Page } from './s139022/s139022.page';  
import { S139023Page } from './s139023/s139023.page';  
import { S139024Page } from './s139024/s139024.page';  
import { S139025Page } from './s139025/s139025.page';  
import { S139026Page } from './s139026/s139026.page';
import { S139027Page } from './s139027/s139027.page';  
import { S139028Page } from './s139028/s139028.page';  
import { S139029Page } from './s139029/s139029.page';  
import { S139030Page } from './s139030/s139030.page'; 
import { S139030tPage } from './s139030t/s139030t.page';   
import { S139031Page } from './s139031/s139031.page';  
import { S139032Page } from './s139032/s139032.page';  
import { S139033Page } from './s139033/s139033.page';  
import { S139034Page } from './s139034/s139034.page';  
import { S139035Page } from './s139035/s139035.page';  
import { S139036Page } from './s139036/s139036.page';  
import { S139037Page } from './s139037/s139037.page';  
import { S139038Page } from './s139038/s139038.page';
import { S139039Page } from './s139039/s139039.page';
import { S139040Page } from './s139040/s139040.page';
import { S139041Page } from './s139041/s139041.page';
import { S139042Page } from './s139042/s139042.page';
import { S139043Page } from './s139043/s139043.page';
import { S139043tPage } from './s139043t/s139043t.page';
import { S139044Page } from './s139044/s139044.page';
import { S139045Page } from './s139045/s139045.page';
import { S139046Page } from './s139046/s139046.page';
import { S139047Page } from './s139047/s139047.page';
import { S139048Page } from './s139048/s139048.page';
import { S139049Page } from './s139049/s139049.page';
import { S139050Page } from './s139050/s139050.page';
import { S139050tPage } from './s139050t/s139050t.page';
import { S139051Page } from './s139051/s139051.page';
import { S139052Page } from './s139052/s139052.page';
import { S139053Page } from './s139053/s139053.page';
import { S139054Page } from './s139054/s139054.page';

import { PressureOfExamsRoutingModule } from './pressure-of-exams-routing.module';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S139001Page,
    S139002Page,
    S139002tPage,
    S139003Page,
    S139004Page,
    S139005Page,
    S139006Page,
    S139007Page,
    S139007tPage,
    S139008Page,
    S139009Page,
    S139009tPage,
    S139010Page,
    S139011Page,
    S139012Page,
    S139013Page,
    S139014Page,   
    S139015Page,
    S139016Page,    
    S139017Page,
    S139017tPage,
    S139018Page,
    S139019Page,
    S139020Page,
    S139021Page,
    S139022Page,
    S139023Page,
    S139024Page,
    S139025Page,
    S139026Page,
    S139027Page,
    S139028Page,
    S139029Page,
    S139030Page,
    S139030tPage,
    S139031Page,
    S139032Page,
    S139033Page,
    S139034Page,
    S139035Page,
    S139036Page,
    S139037Page,
    S139038Page,
    S139039Page,
    S139040Page,
    S139041Page,
    S139042Page,
    S139043Page,
    S139043tPage,
    S139044Page,
    S139045Page,
    S139046Page,
    S139047Page,
    S139048Page,
    S139049Page,
    S139050Page,
    S139050tPage,
    S139051Page,
    S139052Page,
    S139053Page,
    S139054Page,
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PressureOfExamsRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class PressureOfExamsModule { }
