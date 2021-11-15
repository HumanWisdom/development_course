import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { OpinionsBeliefsRoutingModule } from './opinions-beliefs-routing.module';

import { S49001Page } from './s49001/s49001.page';
import { S49002Page } from './s49002/s49002.page';
import { S49003Page } from './s49003/s49003.page';
import { S49004Page } from './s49004/s49004.page';
import { S49004tPage } from './s49004t/s49004t.page';
import { S49005Page } from './s49005/s49005.page';
import { S49006Page } from './s49006/s49006.page';
import { S49007Page } from './s49007/s49007.page';
import { S49008Page } from './s49008/s49008.page';
import { S49009Page } from './s49009/s49009.page';
import { S49010Page } from './s49010/s49010.page';
import { S49011Page } from './s49011/s49011.page';
import { S49012Page } from './s49012/s49012.page';
import { S49013Page } from './s49013/s49013.page';
import { S49014Page } from './s49014/s49014.page';
import { S49015Page } from './s49015/s49015.page';
import { S49015tPage } from './s49015t/s49015t.page';
import { S49016Page } from './s49016/s49016.page';
import { S49017Page } from './s49017/s49017.page';
import { S49018Page } from './s49018/s49018.page';
import { S49019Page } from './s49019/s49019.page';
import { S49020Page } from './s49020/s49020.page';
import { S49021Page } from './s49021/s49021.page';
import { S49022Page } from './s49022/s49022.page';
import { S49023Page } from './s49023/s49023.page';
import { S49024Page } from './s49024/s49024.page';
import { S49025Page } from './s49025/s49025.page';
import { S49026Page } from './s49026/s49026.page';
import { S49027Page } from './s49027/s49027.page';
import { S49028Page } from './s49028/s49028.page';
import { S49029Page } from './s49029/s49029.page';
import { S49030Page } from './s49030/s49030.page';
import { S49031Page } from './s49031/s49031.page';
import { S49032Page } from './s49032/s49032.page';
import { S49033Page } from './s49033/s49033.page';
import { S49034Page } from './s49034/s49034.page';
import { S49035Page } from './s49035/s49035.page';
import { S49036Page } from './s49036/s49036.page';
import { S49037Page } from './s49037/s49037.page';
import { S49038Page } from './s49038/s49038.page';
import { S49039Page } from './s49039/s49039.page';
import { S49040Page } from './s49040/s49040.page';
import { S49041Page } from './s49041/s49041.page';
import { S49041tPage } from './s49041t/s49041t.page';
import { S49042Page } from './s49042/s49042.page';
import { S49043Page } from './s49043/s49043.page';
import { S49044Page } from './s49044/s49044.page';
import { S49045Page } from './s49045/s49045.page';
import { S49045p1Page } from './s49045p1/s49045p1.page';
import { S49046Page } from './s49046/s49046.page';
import { S49047Page } from './s49047/s49047.page';
import { S49048Page } from './s49048/s49048.page';
import { S49049Page } from './s49049/s49049.page';
import { S49050Page } from './s49050/s49050.page';
import { S49051Page } from './s49051/s49051.page';
import { S49052Page } from './s49052/s49052.page';
import { S49052tPage } from './s49052t/s49052t.page';
import { S49053Page } from './s49053/s49053.page';
import { S49054Page } from './s49054/s49054.page';
import { S49055Page } from './s49055/s49055.page';
import { S49055tPage } from './s49055t/s49055t.page';
import { S49056Page } from './s49056/s49056.page';
import { S49057Page } from './s49057/s49057.page';
import { S49058Page } from './s49058/s49058.page';
import { S49059Page } from './s49059/s49059.page';
import { S49060Page } from './s49060/s49060.page';
import { S49060tPage } from './s49060t/s49060t.page';
import { S49061Page } from './s49061/s49061.page';
import { S49061tPage } from './s49061t/s49061t.page';
import { S49062Page } from './s49062/s49062.page';
import { S49063Page } from './s49063/s49063.page';
import { S49064Page } from './s49064/s49064.page';
import { S49065Page } from './s49065/s49065.page';
import { S49065tPage } from './s49065t/s49065t.page';
import { S49066Page } from './s49066/s49066.page';
import { S49067Page } from './s49067/s49067.page';
import { S49067p1Page } from './s49067p1/s49067p1.page';
import { S49068Page } from './s49068/s49068.page';
import { S49069Page } from './s49069/s49069.page';
import { S49070Page } from './s49070/s49070.page';
import { S49071Page } from './s49071/s49071.page';
import { S49072Page } from './s49072/s49072.page';
import { S49073Page } from './s49073/s49073.page';
import { S49074Page } from './s49074/s49074.page';
import { S49075Page } from './s49075/s49075.page';
import { S49076Page } from './s49076/s49076.page';
import { S49077Page } from './s49077/s49077.page';
import { S49078Page } from './s49078/s49078.page';
import { S49079Page } from './s49079/s49079.page';
import { S49079tPage } from './s49079t/s49079t.page';
import { S49080Page } from './s49080/s49080.page';
import { S49081Page } from './s49081/s49081.page';
import { S49082Page } from './s49082/s49082.page';
import { S49083Page } from './s49083/s49083.page';
import { S49084Page } from './s49084/s49084.page';
import { S49085Page } from './s49085/s49085.page';
import { S49086Page } from './s49086/s49086.page';
import { S49087Page } from './s49087/s49087.page';
import { S49088Page } from './s49088/s49088.page';
import { S49089Page } from './s49089/s49089.page';
import { S49090Page } from './s49090/s49090.page';
import { S49091Page } from './s49091/s49091.page';
import { S49092Page } from './s49092/s49092.page';
import { S49093Page } from './s49093/s49093.page';
import { S49094Page } from './s49094/s49094.page';
import { S49094tPage } from './s49094t/s49094t.page';
import { S49095Page } from './s49095/s49095.page';
import { S49096Page } from './s49096/s49096.page';
import { S49097Page } from './s49097/s49097.page';
import { S49098Page } from './s49098/s49098.page';
import { S49099Page } from './s49099/s49099.page';
import { S49100Page } from './s49100/s49100.page';
import { S49101Page } from './s49101/s49101.page';
import { S49102Page } from './s49102/s49102.page';
import { S49103Page } from './s49103/s49103.page';

@NgModule({
  declarations: [
    S49001Page,
    S49002Page,
    S49003Page,
    S49004Page,
    S49004tPage,
    S49005Page,
    S49006Page,
    S49007Page,
    S49008Page,
    S49009Page,
    S49010Page,
    S49011Page,
    S49012Page,
    S49013Page,
    S49014Page,
    S49015Page,
    S49015tPage,
    S49016Page,
    S49017Page,
    S49018Page,
    S49019Page,
    S49020Page,
    S49021Page,
    S49022Page,
    S49023Page,
    S49024Page,
    S49025Page,
    S49026Page,
    S49027Page,
    S49028Page,
    S49029Page,
    S49030Page,
    S49031Page,
    S49032Page,
    S49033Page,
    S49034Page,
    S49035Page,
    S49036Page,
    S49037Page,
    S49038Page,
    S49039Page,
    S49040Page,
    S49041Page,
    S49041tPage,
    S49042Page,
    S49043Page,
    S49044Page,
    S49045Page,
    S49045p1Page,
    S49046Page,
    S49047Page,
    S49048Page,
    S49049Page,
    S49050Page,
    S49051Page,
    S49052Page,
    S49052tPage,
    S49053Page,
    S49054Page,
    S49055Page,
    S49055tPage,
    S49056Page,
    S49057Page,
    S49058Page,
    S49059Page,
    S49060Page,
    S49060tPage,
    S49061Page,      
    S49061tPage,
    S49062Page,
    S49063Page,
    S49064Page,
    S49065Page,
    S49065tPage,
    S49066Page,
    S49067Page,
    S49067p1Page,
    S49068Page,
    S49069Page,
    S49070Page,
    S49071Page,
    S49072Page,
    S49073Page,
    S49074Page,
    S49075Page,
    S49076Page,
    S49077Page,
    S49078Page,
    S49079Page,
    S49079tPage,
    S49080Page,
    S49081Page,
    S49082Page,
    S49083Page,
    S49084Page,
    S49085Page,
    S49086Page,
    S49087Page,
    S49088Page,
    S49089Page,
    S49090Page,
    S49091Page,
    S49092Page,
    S49093Page,
    S49094Page,
    S49094tPage,
    S49095Page,
    S49096Page,
    S49097Page,
    S49098Page,
    S49099Page,
    S49100Page,
    S49101Page,
    S49102Page,
    S49103Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OpinionsBeliefsRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class OpinionsBeliefsModule { }
