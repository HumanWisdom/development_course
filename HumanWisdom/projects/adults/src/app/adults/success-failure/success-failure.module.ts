import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { SuccessFailureRoutingModule } from './success-failure-routing.module';

import { S48001Page } from './s48001/s48001.page';
import { S48002Page } from './s48002/s48002.page';
import { S48003Page } from './s48003/s48003.page';
import { S48003tPage } from './s48003t/s48003t.page';
import { S48004Page } from './s48004/s48004.page';
import { S48005Page } from './s48005/s48005.page';
import { S48006Page } from './s48006/s48006.page';
import { S48006tPage } from './s48006t/s48006t.page';
import { S48007Page } from './s48007/s48007.page';
import { S48008Page } from './s48008/s48008.page';
import { S48009Page } from './s48009/s48009.page';
import { S48010Page } from './s48010/s48010.page';
import { S48011Page } from './s48011/s48011.page';
import { S48012Page } from './s48012/s48012.page';
import { S48013Page } from './s48013/s48013.page';
import { S48014Page } from './s48014/s48014.page';
import { S48015Page } from './s48015/s48015.page';
import { S48016Page } from './s48016/s48016.page';
import { S48017Page } from './s48017/s48017.page';
import { S48018Page } from './s48018/s48018.page';
import { S48019Page } from './s48019/s48019.page';
import { S48019tPage } from './s48019t/s48019t.page';
import { S48020Page } from './s48020/s48020.page';
import { S48021Page } from './s48021/s48021.page';
import { S48022Page } from './s48022/s48022.page';
import { S48023Page } from './s48023/s48023.page';
import { S48024Page } from './s48024/s48024.page';
import { S48025Page } from './s48025/s48025.page';
import { S48026Page } from './s48026/s48026.page';
import { S48027Page } from './s48027/s48027.page';
import { S48027tPage } from './s48027t/s48027t.page';
import { S48028Page } from './s48028/s48028.page';
import { S48029Page } from './s48029/s48029.page';
import { S48030Page } from './s48030/s48030.page';
import { S48031Page } from './s48031/s48031.page';
import { S48032Page } from './s48032/s48032.page';
import { S48033Page } from './s48033/s48033.page';
import { S48033tPage } from './s48033t/s48033t.page';
import { S48034Page } from './s48034/s48034.page';
import { S48035Page } from './s48035/s48035.page';
import { S48036Page } from './s48036/s48036.page';
import { S48037Page } from './s48037/s48037.page';
import { S48038Page } from './s48038/s48038.page';
import { S48039Page } from './s48039/s48039.page';
import { S48040Page } from './s48040/s48040.page';
import { S48041Page } from './s48041/s48041.page';
import { S48042Page } from './s48042/s48042.page';
import { S48043Page } from './s48043/s48043.page';
import { S48044Page } from './s48044/s48044.page';
import { S48045Page } from './s48045/s48045.page';
import { S48046Page } from './s48046/s48046.page';
import { S48047Page } from './s48047/s48047.page';
import { S48048Page } from './s48048/s48048.page';
import { S48049Page } from './s48049/s48049.page';
import { S48050Page } from './s48050/s48050.page';
import { S48050tPage } from './s48050t/s48050t.page';
import { S48051Page } from './s48051/s48051.page';
import { S48051tPage } from './s48051t/s48051t.page';
import { S48052Page } from './s48052/s48052.page';
import { S48053Page } from './s48053/s48053.page';
import { S48054Page } from './s48054/s48054.page';
import { S48055Page } from './s48055/s48055.page';
import { S48056Page } from './s48056/s48056.page';
import { S48057Page } from './s48057/s48057.page';
import { S48058Page } from './s48058/s48058.page';
import { S48058tPage } from './s48058t/s48058t.page';
import { S48059Page } from './s48059/s48059.page';
import { S48060Page } from './s48060/s48060.page';
import { S48061Page } from './s48061/s48061.page';
import { S48061tPage } from './s48061t/s48061t.page';
import { S48062Page } from './s48062/s48062.page';
import { S48063Page } from './s48063/s48063.page';
import { S48063tPage } from './s48063t/s48063t.page';
import { S48064Page } from './s48064/s48064.page';
import { S48065Page } from './s48065/s48065.page';
import { S48065tPage } from './s48065t/s48065t.page';
import { S48066Page } from './s48066/s48066.page';
import { S48067Page } from './s48067/s48067.page';
import { S48068Page } from './s48068/s48068.page';
import { S48068tPage } from './s48068t/s48068t.page';
import { S48069Page } from './s48069/s48069.page';
import { S48070Page } from './s48070/s48070.page';
import { S48071Page } from './s48071/s48071.page';
import { S48071tPage } from './s48071t/s48071t.page';
import { S48072Page } from './s48072/s48072.page';
import { S48073Page } from './s48073/s48073.page';
import { S48073tPage } from './s48073t/s48073t.page';
import { S48074Page } from './s48074/s48074.page';
import { S48075Page } from './s48075/s48075.page';
import { S48075tPage } from './s48075t/s48075t.page';
import { S48076Page } from './s48076/s48076.page';
import { S48077Page } from './s48077/s48077.page';
import { S48077tPage } from './s48077t/s48077t.page';
import { S48078Page } from './s48078/s48078.page';
import { S48079Page } from './s48079/s48079.page';
import { S48080Page } from './s48080/s48080.page';
import { S48081Page } from './s48081/s48081.page';
import { S48082Page } from './s48082/s48082.page';
import { S48083Page } from './s48083/s48083.page';
import { S48084Page } from './s48084/s48084.page';
import { S48085Page } from './s48085/s48085.page';
import { S48085tPage } from './s48085t/s48085t.page';
import { S48086Page } from './s48086/s48086.page';
import { S48087Page } from './s48087/s48087.page';
import { S48087tPage } from './s48087t/s48087t.page';
import { S48088Page } from './s48088/s48088.page';
import { S48089Page } from './s48089/s48089.page';
import { S48090Page } from './s48090/s48090.page';
import { S48091Page } from './s48091/s48091.page';
import { S48091tPage } from './s48091t/s48091t.page';
import { S48092Page } from './s48092/s48092.page';
import { S48093Page } from './s48093/s48093.page';
import { S48094Page } from './s48094/s48094.page';
import { S48095Page } from './s48095/s48095.page';
import { S48096Page } from './s48096/s48096.page';
import { S48097Page } from './s48097/s48097.page';
import { S48097tPage } from './s48097t/s48097t.page';
import { S48098Page } from './s48098/s48098.page';
import { S48099Page } from './s48099/s48099.page';
import { S48100Page } from './s48100/s48100.page';
import { S48101Page } from './s48101/s48101.page';
import { S48102Page } from './s48102/s48102.page';
import { S48103Page } from './s48103/s48103.page';
import { S48104Page } from './s48104/s48104.page';
import { S48105Page } from './s48105/s48105.page';
import { S48106Page } from './s48106/s48106.page';
import { S48107Page } from './s48107/s48107.page';
import { S48108Page } from './s48108/s48108.page';

@NgModule({
  declarations: [
    S48001Page,
    S48002Page,
    S48003Page,
    S48003tPage,
    S48004Page,    
    S48005Page,
    S48006Page,
    S48006tPage,
    S48007Page,
    S48008Page,
    S48009Page,
    S48010Page,
    S48011Page,
    S48012Page,
    S48013Page,
    S48014Page,
    S48015Page,
    S48016Page,    
    S48017Page,
    S48018Page,
    S48019Page,
    S48019tPage,
    S48020Page,
    S48021Page,
    S48022Page,
    S48023Page,
    S48024Page,
    S48025Page,
    S48026Page,
    S48027Page,
    S48027tPage,
    S48028Page,
    S48029Page,
    S48030Page,
    S48031Page,
    S48032Page,
    S48033Page,
    S48033tPage,
    S48034Page,
    S48035Page,
    S48036Page,
    S48037Page,
    S48038Page,
    S48039Page,
    S48040Page,
    S48041Page,
    S48042Page,
    S48043Page,
    S48044Page,
    S48045Page,
    S48046Page,
    S48047Page,
    S48048Page,
    S48049Page,
    S48050Page,
    S48050tPage,
    S48051Page,
    S48051tPage,
    S48052Page,
    S48053Page,
    S48054Page,
    S48055Page,
    S48056Page,
    S48057Page,
    S48058Page,
    S48058tPage,
    S48059Page,
    S48060Page,    
    S48061Page,
    S48061tPage,
    S48062Page,
    S48063Page,
    S48063tPage,
    S48064Page,
    S48065Page,
    S48065tPage,
    S48066Page,    
    S48067Page,    
    S48068Page,
    S48068tPage,
    S48069Page,
    S48070Page,
    S48071Page,
    S48071tPage,
    S48072Page,
    S48073Page,
    S48073tPage,
    S48074Page,
    S48075Page,
    S48075tPage,
    S48076Page,
    S48077Page,
    S48077tPage,
    S48078Page,
    S48079Page,
    S48080Page,    
    S48081Page,
    S48082Page,
    S48083Page,
    S48084Page,
    S48085Page,
    S48085tPage,
    S48086Page,
    S48087Page,
    S48087tPage,
    S48088Page,
    S48089Page,
    S48090Page,
    S48091Page,
    S48091tPage,
    S48092Page,
    S48093Page,
    S48094Page,
    S48095Page,
    S48096Page,    
    S48097Page,
    S48097tPage,
    S48098Page,
    S48099Page,
    S48100Page,
    S48101Page,
    S48102Page,    
    S48103Page,
    S48104Page,
    S48105Page,
    S48106Page,   
    S48107Page,
    S48108Page,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SuccessFailureRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class SuccessFailureModule { }
