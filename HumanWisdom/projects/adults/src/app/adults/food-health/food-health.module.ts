import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S46001Page } from './s46001/s46001.page';  
import { S46002Page } from './s46002/s46002.page';  
import { S46003Page } from './s46003/s46003.page';  
import { S46003tPage } from './s46003t/s46003t.page';  
import { S46004Page } from './s46004/s46004.page';  
import { S46005Page } from './s46005/s46005.page';  
import { S46006Page } from './s46006/s46006.page';  
import { S46007Page } from './s46007/s46007.page';  
import { S46008Page } from './s46008/s46008.page';  
import { S46009Page } from './s46009/s46009.page';  
import { S46010Page } from './s46010/s46010.page';  
import { S46011Page } from './s46011/s46011.page'; 
import { S46011tPage } from './s46011t/s46011t.page'; 
import { S46012Page } from './s46012/s46012.page';  
import { S46013Page } from './s46013/s46013.page';  
import { S46014Page } from './s46014/s46014.page';  
import { S46015Page } from './s46015/s46015.page';  
import { S46016Page } from './s46016/s46016.page';  
import { S46017Page } from './s46017/s46017.page';  
import { S46018Page } from './s46018/s46018.page'; 
import { S46019Page } from './s46019/s46019.page';  
import { S46020Page } from './s46020/s46020.page';  
import { S46021Page } from './s46021/s46021.page';  
import { S46022Page } from './s46022/s46022.page';  
import { S46023Page } from './s46023/s46023.page';  
import { S46024Page } from './s46024/s46024.page';  
import { S46025Page } from './s46025/s46025.page';  
import { S46026Page } from './s46026/s46026.page';  
import { S46027Page } from './s46027/s46027.page';  
import { S46028Page } from './s46028/s46028.page';  
import { S46029Page } from './s46029/s46029.page';  
import { S46030Page } from './s46030/s46030.page';  
import { S46031Page } from './s46031/s46031.page';  
import { S46031tPage } from './s46031t/s46031t.page';  
import { S46032Page } from './s46032/s46032.page';  
import { S46033Page } from './s46033/s46033.page';  
import { S46034Page } from './s46034/s46034.page';  
import { S46035Page } from './s46035/s46035.page';  
import { S46036Page } from './s46036/s46036.page';  
import { S46037Page } from './s46037/s46037.page';  
import { S46038Page } from './s46038/s46038.page';  
import { S46038tPage } from './s46038t/s46038t.page';  
import { S46039Page } from './s46039/s46039.page';  
import { S46040Page } from './s46040/s46040.page';  
import { S46041Page } from './s46041/s46041.page';  
import { S46042Page } from './s46042/s46042.page';  
import { S46043Page } from './s46043/s46043.page';  
import { S46044Page } from './s46044/s46044.page';  
import { S46045Page } from './s46045/s46045.page';  
import { S46046Page } from './s46046/s46046.page';  
import { S46047Page } from './s46047/s46047.page';  
import { S46048Page } from './s46048/s46048.page';  
import { S46049Page } from './s46049/s46049.page';  
import { S46050Page } from './s46050/s46050.page';  
import { S46051Page } from './s46051/s46051.page';  
import { S46052Page } from './s46052/s46052.page';  
import { S46053Page } from './s46053/s46053.page';  
import { S46054Page } from './s46054/s46054.page';  
import { S46055Page } from './s46055/s46055.page';  
import { S46056Page } from './s46056/s46056.page';  
import { S46057Page } from './s46057/s46057.page';  
import { S46058Page } from './s46058/s46058.page';  
import { S46059Page } from './s46059/s46059.page';  
import { S46060Page } from './s46060/s46060.page';  
import { S46061Page } from './s46061/s46061.page';  
import { S46062Page } from './s46062/s46062.page';  
import { S46063Page } from './s46063/s46063.page';  
import { S46064Page } from './s46064/s46064.page'; 
import { S46064tPage } from './s46064t/s46064t.page';   
import { S46065Page } from './s46065/s46065.page';  
import { S46065p1Page } from './s46065p1/s46065p1.page';  
import { S46066Page } from './s46066/s46066.page';  
import { S46066tPage } from './s46066t/s46066t.page';  
import { S46067Page } from './s46067/s46067.page';  
import { S46068Page } from './s46068/s46068.page';  
import { S46069Page } from './s46069/s46069.page'; 
import { S46069tPage } from './s46069t/s46069t.page';   
import { S46070Page } from './s46070/s46070.page';  
import { S46070tPage } from './s46070t/s46070t.page';  
import { S46071Page } from './s46071/s46071.page';  
import { S46072Page } from './s46072/s46072.page';  
import { S46073Page } from './s46073/s46073.page';  
import { S46074Page } from './s46074/s46074.page'; 
import { S46075Page } from './s46075/s46075.page';  
import { S46076Page } from './s46076/s46076.page';  
import { S46077Page } from './s46077/s46077.page';  
import { S46078Page } from './s46078/s46078.page';  
import { S46079Page } from './s46079/s46079.page';  

import { FoodHealthRoutingModule } from './food-health-routing.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  declarations: [
    S46001Page ,
    S46002Page ,
    S46003Page ,
    S46003tPage ,
    S46004Page ,
    S46005Page ,
    S46006Page ,
    S46007Page ,
    S46008Page ,
    S46009Page ,
    S46010Page ,    
    S46011Page ,
    S46011tPage ,
    S46012Page ,   
    S46013Page ,
    S46014Page ,   
    S46015Page ,
    S46016Page ,    
    S46017Page ,
    S46018Page ,
    S46019Page ,
    S46020Page ,
    S46021Page ,
    S46022Page ,
    S46023Page ,
    S46024Page ,
    S46025Page ,
    S46026Page ,
    S46027Page ,
    S46028Page ,
    S46029Page ,
    S46030Page ,
    S46031Page ,
    S46031tPage ,
    S46032Page ,
    S46033Page ,
    S46034Page ,
    S46035Page ,
    S46036Page ,
    S46037Page ,
    S46038Page ,
    S46038tPage ,
    S46039Page ,
    S46040Page ,
    S46041Page ,
    S46042Page ,
    S46043Page ,
    S46044Page ,
    S46045Page ,
    S46046Page ,
    S46047Page ,    
    S46048Page ,
    S46049Page ,
    S46050Page ,
    S46051Page ,
    S46052Page ,
    S46053Page ,
    S46054Page ,
    S46055Page ,
    S46056Page ,
    S46057Page ,
    S46058Page ,
    S46059Page ,
    S46060Page ,
    S46061Page ,
    S46062Page ,
    S46063Page ,
    S46064Page ,
    S46064tPage ,
    S46065Page ,
    S46065p1Page ,
    S46066Page ,
    S46066tPage ,
    S46067Page ,
    S46068Page ,
    S46069Page ,
    S46069tPage ,
    S46070Page ,
    S46070tPage ,
    S46071Page ,   
    S46072Page ,
    S46073Page ,
    S46074Page ,    
    S46075Page ,
    S46076Page ,
    S46077Page ,
    S46078Page ,
    S46079Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FoodHealthRoutingModule,
    NgxCircularPlayerModule    
  ],
  providers:[
    AdultsService
  ]
})
export class FoodHealthModule { }
