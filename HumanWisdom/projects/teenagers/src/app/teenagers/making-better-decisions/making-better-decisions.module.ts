import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';  

import { MakingBetterDecisionsRoutingModule } from './making-better-decisions-routing.module';
import { TeenagersService } from '../teenagers.service';
import { S142001Page } from './s142001/s142001.page';
import { S142002Page } from './s142002/s142002.page';
import { S142003Page } from './s142003/s142003.page';
import { S142004Page } from './s142004/s142004.page';
import { S142004tPage } from './s142004t/s142004t.page';
import { S142005Page } from './s142005/s142005.page';
import { S142006Page } from './s142006/s142006.page';
import { S142007Page } from './s142007/s142007.page';
import { S142008Page } from './s142008/s142008.page';
import { S142009Page } from './s142009/s142009.page';
import { S142010Page } from './s142010/s142010.page';
import { S142010tPage } from './s142010t/s142010t.page';
import { S142011Page } from './s142011/s142011.page';
import { S142012Page } from './s142012/s142012.page';
import { S142013Page } from './s142013/s142013.page';
import { S142014Page } from './s142014/s142014.page';
import { S142015Page } from './s142015/s142015.page';
import { S142016Page } from './s142016/s142016.page';
import { S142017Page } from './s142017/s142017.page';
import { S142018Page } from './s142018/s142018.page';
import { S142019Page } from './s142019/s142019.page';
import { S142020Page } from './s142020/s142020.page';
import { S142021Page } from './s142021/s142021.page';
import { S142022Page } from './s142022/s142022.page';
import { S142023Page } from './s142023/s142023.page';
import { S142024Page } from './s142024/s142024.page';
import { S142025Page } from './s142025/s142025.page';
import { S142026Page } from './s142026/s142026.page';
import { S142027Page } from './s142027/s142027.page';
import { S142028Page } from './s142028/s142028.page';
import { S142028tPage } from './s142028t/s142028t.page';
import { S142029Page } from './s142029/s142029.page';
import { S142030Page } from './s142030/s142030.page';
import { S142031Page } from './s142031/s142031.page';
import { S142032Page } from './s142032/s142032.page';
import { S142033Page } from './s142033/s142033.page';
import { S142034Page } from './s142034/s142034.page';
import { S142035Page } from './s142035/s142035.page';
import { S142036Page } from './s142036/s142036.page';
import { S142037Page } from './s142037/s142037.page';
import { S142038Page } from './s142038/s142038.page';
import { S142039Page } from './s142039/s142039.page';
import { S142040Page } from './s142040/s142040.page';
import { S142040tPage } from './s142040t/s142040t.page';
import { S142041Page } from './s142041/s142041.page';
import { S142041tPage } from './s142041t/s142041t.page';
import { S142042Page } from './s142042/s142042.page';
import { S142043Page } from './s142043/s142043.page';
import { S142044Page } from './s142044/s142044.page';
import { S142045Page } from './s142045/s142045.page';
import { S142046Page } from './s142046/s142046.page';
import { S142047Page } from './s142047/s142047.page';
import { S142047tPage } from './s142047t/s142047t.page';
import { S142048Page } from './s142048/s142048.page';
import { S142049Page } from './s142049/s142049.page';
import { S142049tPage } from './s142049t/s142049t.page';
import { S142050Page } from './s142050/s142050.page';
import { S142051Page } from './s142051/s142051.page';
import { S142051tPage } from './s142051t/s142051t.page';
import { S142052Page } from './s142052/s142052.page';
import { S142053Page } from './s142053/s142053.page';
import { S142054Page } from './s142054/s142054.page';
import { S142054tPage } from './s142054t/s142054t.page';
import { S142055Page } from './s142055/s142055.page';
import { S142056Page } from './s142056/s142056.page';
import { S142057Page } from './s142057/s142057.page';
import { S142058Page } from './s142058/s142058.page';
import { S142058tPage } from './s142058t/s142058t.page';
import { S142059Page } from './s142059/s142059.page';
import { S142060Page } from './s142060/s142060.page';
import { S142061Page } from './s142061/s142061.page';
import { S142061tPage } from './s142061t/s142061t.page';
import { S142062Page } from './s142062/s142062.page';
import { S142063Page } from './s142063/s142063.page';
import { S142063tPage } from './s142063t/s142063t.page';
import { S142064Page } from './s142064/s142064.page';
import { S142065Page } from './s142065/s142065.page';
import { S142066Page } from './s142066/s142066.page';
import { S142067Page } from './s142067/s142067.page';
import { S142067tPage } from './s142067t/s142067t.page';
import { S142068Page } from './s142068/s142068.page';
import { S142069Page } from './s142069/s142069.page';
import { S142069tPage } from './s142069t/s142069t.page';
import { S142070Page } from './s142070/s142070.page';
import { S142071Page } from './s142071/s142071.page';
import { S142072Page } from './s142072/s142072.page';
import { S142073Page } from './s142073/s142073.page';
import { S142074Page } from './s142074/s142074.page';
import { S142075Page } from './s142075/s142075.page';
import { S142076Page } from './s142076/s142076.page';
import { S142077Page } from './s142077/s142077.page';
import { S142078Page } from './s142078/s142078.page';
import { S142078tPage } from './s142078t/s142078t.page';
import { S142079Page } from './s142079/s142079.page';
import { S142080Page } from './s142080/s142080.page';
import { S142080tPage } from './s142080t/s142080t.page';
import { S142081Page } from './s142081/s142081.page';
import { S142082Page } from './s142082/s142082.page';
import { S142082tPage } from './s142082t/s142082t.page';
import { S142083Page } from './s142083/s142083.page';
import { S142084Page } from './s142084/s142084.page';
import { S142084tPage } from './s142084t/s142084t.page';
import { S142085Page } from './s142085/s142085.page';
import { S142086Page } from './s142086/s142086.page';
import { S142086tPage } from './s142086t/s142086t.page';
import { S142087Page } from './s142087/s142087.page';
import { S142088Page } from './s142088/s142088.page';
import { S142088tPage } from './s142088t/s142088t.page';
import { S142089Page } from './s142089/s142089.page';
import { S142090Page } from './s142090/s142090.page';
import { S142090tPage } from './s142090t/s142090t.page';
import { S142091Page } from './s142091/s142091.page';
import { S142092Page } from './s142092/s142092.page';
import { S142092tPage } from './s142092t/s142092t.page';
import { S142093Page } from './s142093/s142093.page';
import { S142094Page } from './s142094/s142094.page';
import { S142094tPage } from './s142094t/s142094t.page';
import { S142095Page } from './s142095/s142095.page';
import { S142096Page } from './s142096/s142096.page';
import { S142096tPage } from './s142096t/s142096t.page';
import { S142097Page } from './s142097/s142097.page';
import { S142098Page } from './s142098/s142098.page';
import { S142098tPage } from './s142098t/s142098t.page';
import { S142099Page } from './s142099/s142099.page';
import { S142100Page } from './s142100/s142100.page';
import { S142101Page } from './s142101/s142101.page';
import { S142102Page } from './s142102/s142102.page';
import { S142103Page } from './s142103/s142103.page';
import { S142104Page } from './s142104/s142104.page';
import { S142105Page } from './s142105/s142105.page';
import { S142106Page } from './s142106/s142106.page';
import { S142107Page } from './s142107/s142107.page';
import { S142108Page } from './s142108/s142108.page';
import { S142109Page } from './s142109/s142109.page';
import { S142110Page } from './s142110/s142110.page';
import { S142111Page } from './s142111/s142111.page';
import { S142112Page } from './s142112/s142112.page';
import { S142113Page } from './s142113/s142113.page';
import { S142114Page } from './s142114/s142114.page';
import { S142115Page } from './s142115/s142115.page';
import { S142116Page } from './s142116/s142116.page';


@NgModule({
  declarations: [
    S142001Page,
    S142002Page,
    S142003Page,
    S142004Page,
    S142004tPage,
    S142005Page,
    S142006Page,
    S142007Page,
    S142008Page,
    S142009Page,
    S142010Page,
    S142010tPage,
    S142011Page,
    S142012Page,
    S142013Page,
    S142014Page,
    S142015Page,
    S142016Page,
    S142017Page,
    S142018Page,
    S142019Page,
    S142020Page,
    S142021Page,
    S142022Page,
    S142023Page,
    S142024Page,
    S142025Page,
    S142026Page,
    S142027Page,
    S142028Page,
    S142028tPage,
    S142029Page,
    S142030Page,
    S142031Page,
    S142032Page,
    S142033Page,
    S142034Page,
    S142035Page,
    S142036Page,
    S142037Page,
    S142038Page,
    S142039Page,
    S142040Page,
    S142040tPage,
    S142041Page,
    S142041tPage,
    S142042Page,
    S142043Page,
    S142044Page,
    S142045Page,
    S142046Page,
    S142047Page,
    S142047tPage,
    S142048Page,
    S142049Page,
    S142049tPage,
    S142050Page,
    S142051Page,
    S142051tPage,
    S142052Page,
    S142053Page,
    S142054Page,
    S142054tPage,
    S142055Page,
    S142056Page,
    S142057Page,
    S142058Page,
    S142058tPage,
    S142059Page,
    S142060Page,
    S142061Page,
    S142061tPage,
    S142062Page,
    S142063Page,
    S142063tPage,
    S142064Page,
    S142065Page,
    S142066Page,
    S142067Page,
    S142067tPage,
    S142068Page,
    S142069Page,
    S142069tPage,
    S142070Page,
    S142071Page,
    S142072Page,
    S142073Page,
    S142074Page,
    S142075Page,
    S142076Page,
    S142077Page,
    S142078Page,
    S142078tPage,
    S142079Page,
    S142080Page,
    S142080tPage,
    S142081Page,
    S142082Page,
    S142082tPage,
    S142083Page,
    S142084Page,
    S142084tPage,
    S142085Page,
    S142086Page,
    S142086tPage,
    S142087Page,
    S142088Page,
    S142088tPage,
    S142089Page,
    S142090Page,
    S142090tPage,
    S142091Page,
    S142092Page,
    S142092tPage,
    S142093Page,
    S142094Page,
    S142094tPage,
    S142095Page,
    S142096Page,
    S142096tPage,
    S142097Page,
    S142098Page,
    S142098tPage,
    S142099Page,
    S142100Page,
    S142101Page,
    S142102Page,
    S142103Page,
    S142104Page,
    S142105Page,
    S142106Page,
    S142107Page,
    S142108Page,
    S142109Page,
    S142110Page,
    S142111Page,
    S142112Page,
    S142113Page,
    S142114Page,
    S142115Page,
    S142116Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MakingBetterDecisionsRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class MakingBetterDecisionsModule { }