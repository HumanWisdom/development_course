import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module'
import { AdultsService } from '../adults.service';

import { S143001Page } from './s143001/s143001.page';
import { S143002Page } from './s143002/s143002.page';
import { S143003Page } from './s143003/s143003.page';
import { S143003tPage } from './s143003t/s143003t.page';
import { S143004Page } from './s143004/s143004.page';
import { S143005Page } from './s143005/s143005.page';
import { S143006Page } from './s143006/s143006.page';
import { S143007Page } from './s143007/s143007.page';
import { S143008Page } from './s143008/s143008.page';
import { S143009Page } from './s143009/s143009.page';
import { S143010Page } from './s143010/s143010.page';
import { S143010tPage } from './s143010t/s143010t.page';
import { S143011Page } from './s143011/s143011.page';
import { S143012Page } from './s143012/s143012.page';
import { S143012tPage } from './s143012t/s143012t.page';
import { S143013Page } from './s143013/s143013.page';
import { S143014Page } from './s143014/s143014.page';
import { S143015Page } from './s143015/s143015.page';
import { S143016Page } from './s143016/s143016.page';
import { S143017Page } from './s143017/s143017.page';
import { S143017tPage } from './s143017t/s143017t.page';
import { S143018Page } from './s143018/s143018.page';
import { S143019Page } from './s143019/s143019.page';
import { S143019tPage } from './s143019t/s143019t.page';
import { S143020Page } from './s143020/s143020.page';
import { S143020tPage } from './s143020t/s143020t.page';
import { S143021Page } from './s143021/s143021.page';
import { S143021tPage } from './s143021t/s143021t.page';
import { S143022Page } from './s143022/s143022.page';
import { S143023Page } from './s143023/s143023.page';
import { S143024Page } from './s143024/s143024.page';
import { S143025Page } from './s143025/s143025.page';
import { S143026Page } from './s143026/s143026.page';
import { S143027Page } from './s143027/s143027.page';
import { S143028Page } from './s143028/s143028.page';
import { S143029Page } from './s143029/s143029.page';
import { S143030Page } from './s143030/s143030.page';
import { S143031Page } from './s143031/s143031.page';
import { S143032Page } from './s143032/s143032.page';
import { S143033Page } from './s143033/s143033.page';
import { S143034Page } from './s143034/s143034.page';
import { S143035Page } from './s143035/s143035.page';
import { S143036Page } from './s143036/s143036.page';
import { S143037Page } from './s143037/s143037.page';
import { S143038Page } from './s143038/s143038.page';
import { S143039Page } from './s143039/s143039.page';
import { S143040Page } from './s143040/s143040.page';
import { S143041Page } from './s143041/s143041.page';
import { S143041tPage } from './s143041t/s143041t.page';
import { S143042Page } from './s143042/s143042.page';
import { S143043Page } from './s143043/s143043.page';
import { S143043tPage } from './s143043t/s143043t.page';
import { S143044Page } from './s143044/s143044.page';
import { S143045Page } from './s143045/s143045.page';
import { S143046Page } from './s143046/s143046.page';
import { S143047Page } from './s143047/s143047.page';
import { S143047tPage } from './s143047t/s143047t.page';
import { S143048Page } from './s143048/s143048.page';
import { S143049Page } from './s143049/s143049.page';
import { S143049tPage } from './s143049t/s143049t.page';
import { S143050Page } from './s143050/s143050.page';
import { S143051Page } from './s143051/s143051.page';
import { S143052Page } from './s143052/s143052.page';
import { S143053Page } from './s143053/s143053.page';
import { S143053tPage } from './s143053t/s143053t.page';
import { S143054Page } from './s143054/s143054.page';
import { S143055Page } from './s143055/s143055.page';
import { S143056Page } from './s143056/s143056.page';
import { S143057Page } from './s143057/s143057.page';
import { S143057tPage } from './s143057t/s143057t.page';
import { S143058Page } from './s143058/s143058.page';
import { S143059Page } from './s143059/s143059.page';
import { S143059tPage } from './s143059t/s143059t.page';
import { S143060Page } from './s143060/s143060.page';
import { S143061Page } from './s143061/s143061.page';
import { S143062Page } from './s143062/s143062.page';
import { S143062tPage } from './s143062t/s143062t.page';
import { S143063Page } from './s143063/s143063.page';
import { S143064Page } from './s143064/s143064.page';
import { S143064tPage } from './s143064t/s143064t.page';
import { S143065Page } from './s143065/s143065.page';
import { S143066Page } from './s143066/s143066.page';
import { S143067Page } from './s143067/s143067.page';
import { S143068Page } from './s143068/s143068.page';
import { S143069Page } from './s143069/s143069.page';
import { S143070Page } from './s143070/s143070.page';
import { S143071Page } from './s143071/s143071.page';
import { S143072Page } from './s143072/s143072.page';
import { S143072tPage } from './s143072t/s143072t.page';
import { S143073Page } from './s143073/s143073.page';
import { S143074Page } from './s143074/s143074.page';
import { S143075Page } from './s143075/s143075.page';
import { S143075tPage } from './s143075t/s143075t.page';
import { S143076Page } from './s143076/s143076.page';
import { S143077Page } from './s143077/s143077.page';
import { S143078Page } from './s143078/s143078.page';
import { S143079Page } from './s143079/s143079.page';
import { S143080Page } from './s143080/s143080.page';
import { S143081Page } from './s143081/s143081.page';
import { S143082Page } from './s143082/s143082.page';
import { S143083Page } from './s143083/s143083.page';
import { S143084Page } from './s143084/s143084.page';
import { S143085Page } from './s143085/s143085.page';
import { S143086Page } from './s143086/s143086.page';
import { S143087Page } from './s143087/s143087.page';
import { S143088Page } from './s143088/s143088.page';
import { S143089Page } from './s143089/s143089.page';
import { S143090Page } from './s143090/s143090.page';
import { S143091Page } from './s143091/s143091.page';
import { S143092Page } from './s143092/s143092.page';
import { S143093Page } from './s143093/s143093.page';
import { S143094Page } from './s143094/s143094.page';
import { S143095Page } from './s143095/s143095.page';
import { S143096Page } from './s143096/s143096.page';
import { S143097Page } from './s143097/s143097.page';
import { S143098Page } from './s143098/s143098.page';
import { S143099Page } from './s143099/s143099.page';
import { S143100Page } from './s143100/s143100.page';
import { S143101Page } from './s143101/s143101.page';
import { S143102Page } from './s143102/s143102.page';
import { S143103Page } from './s143103/s143103.page';
import { S143104Page } from './s143104/s143104.page';
import { S143105Page } from './s143105/s143105.page';
import { S143106Page } from './s143106/s143106.page';

import { DiversityAndInclusionRoutingModule } from './diversity-and-inclusion-routing.module';

@NgModule({
  declarations: [
    S143001Page,
    S143002Page,
    S143003Page,
    S143003tPage,
    S143004Page,
    S143005Page,
    S143006Page,
    S143007Page,
    S143008Page,
    S143009Page,
    S143010Page,
    S143010tPage,
    S143011Page,
    S143012Page,
    S143012tPage,
    S143013Page,
    S143014Page,
    S143015Page,
    S143016Page,
    S143017Page,
    S143017tPage,
    S143018Page,
    S143019Page,
    S143019tPage,
    S143020Page,
    S143020tPage,
    S143021Page,
    S143021tPage,
    S143022Page,
    S143023Page,
    S143024Page,
    S143025Page,
    S143026Page,
    S143027Page,
    S143028Page,
    S143029Page,
    S143030Page,
    S143031Page,
    S143032Page,
    S143033Page,
    S143034Page,
    S143035Page,
    S143036Page,
    S143037Page,
    S143038Page,
    S143039Page,
    S143040Page,
    S143041Page,
    S143041tPage,
    S143042Page,
    S143043Page,
    S143043tPage,
    S143044Page,
    S143045Page,
    S143046Page,
    S143047Page,
    S143047tPage,
    S143048Page,
    S143049Page,
    S143049tPage,
    S143050Page,
    S143051Page,
    S143052Page,
    S143053Page,
    S143053tPage,
    S143054Page,
    S143055Page,
    S143056Page,
    S143057Page,
    S143057tPage,
    S143058Page,
    S143059Page,
    S143059tPage,
    S143060Page,
    S143061Page,
    S143062Page,
    S143062tPage,
    S143063Page,
    S143064Page,
    S143064tPage,
    S143065Page,
    S143066Page,
    S143067Page,
    S143068Page,
    S143069Page,
    S143070Page,
    S143071Page,
    S143072Page,
    S143072tPage,
    S143073Page,
    S143074Page,
    S143075Page,
    S143075tPage,
    S143076Page,
    S143077Page,
    S143078Page,
    S143079Page,
    S143080Page,
    S143081Page,
    S143082Page,
    S143083Page,
    S143084Page,
    S143085Page,
    S143086Page,
    S143087Page,
    S143088Page,
    S143089Page,
    S143090Page,
    S143091Page,
    S143092Page,
    S143093Page,
    S143094Page,
    S143095Page,
    S143096Page,
    S143097Page,
    S143098Page,
    S143099Page,
    S143100Page,
    S143101Page,
    S143102Page,
    S143103Page,
    S143104Page,
    S143105Page,
    S143106Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DiversityAndInclusionRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class DiversityAndInclusionModule { }
