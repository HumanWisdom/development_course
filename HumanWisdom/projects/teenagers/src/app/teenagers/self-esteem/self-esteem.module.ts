import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { SelfEsteemRoutingModule } from './self-esteem-routing.module';
import { TeenagersService } from '../teenagers.service';

import { S126001Page } from './s126001/s126001.page';
import { S126002Page } from './s126002/s126002.page';
import { S126003Page } from './s126003/s126003.page';
import { S126003tPage } from './s126003t/s126003t.page';
import { S126004Page } from './s126004/s126004.page';
import { S126005Page } from './s126005/s126005.page';
import { S126006Page } from './s126006/s126006.page';
import { S126007Page } from './s126007/s126007.page';
import { S126008Page } from './s126008/s126008.page';
import { S126009Page } from './s126009/s126009.page';
import { S126010Page } from './s126010/s126010.page';
import { S126011Page } from './s126011/s126011.page';
import { S126012Page } from './s126012/s126012.page';
import { S126012tPage } from './s126012t/s126012t.page';
import { S126013Page } from './s126013/s126013.page';
import { S126014Page } from './s126014/s126014.page';
import { S126015Page } from './s126015/s126015.page';
import { S126016Page } from './s126016/s126016.page';
import { S126017Page } from './s126017/s126017.page';
import { S126018Page } from './s126018/s126018.page';
import { S126019Page } from './s126019/s126019.page';
import { S126020Page } from './s126020/s126020.page';
import { S126021Page } from './s126021/s126021.page';
import { S126022Page } from './s126022/s126022.page';
import { S126023Page } from './s126023/s126023.page';
import { S126024Page } from './s126024/s126024.page';
import { S126025Page } from './s126025/s126025.page';
import { S126026Page } from './s126026/s126026.page';
import { S126027Page } from './s126027/s126027.page';
import { S126028Page } from './s126028/s126028.page';
import { S126029Page } from './s126029/s126029.page';
import { S126030Page } from './s126030/s126030.page';
import { S126031Page } from './s126031/s126031.page';
import { S126032Page } from './s126032/s126032.page';
import { S126033Page } from './s126033/s126033.page';
import { S126034Page } from './s126034/s126034.page';
import { S126035Page } from './s126035/s126035.page';
import { S126035tPage } from './s126035t/s126035t.page';
import { S126036Page } from './s126036/s126036.page';
import { S126037Page } from './s126037/s126037.page';
import { S126038Page } from './s126038/s126038.page';
import { S126039Page } from './s126039/s126039.page';
import { S126040Page } from './s126040/s126040.page';
import { S126041Page } from './s126041/s126041.page';
import { S126042Page } from './s126042/s126042.page';
import { S126043Page } from './s126043/s126043.page';
import { S126044Page } from './s126044/s126044.page';
import { S126045Page } from './s126045/s126045.page';
import { S126046Page } from './s126046/s126046.page';
import { S126047Page } from './s126047/s126047.page';
import { S126048Page } from './s126048/s126048.page';
import { S126049Page } from './s126049/s126049.page';
import { S126050Page } from './s126050/s126050.page';
import { S126051Page } from './s126051/s126051.page';
import { S126052Page } from './s126052/s126052.page';
import { S126053Page } from './s126053/s126053.page';
import { S126054Page } from './s126054/s126054.page';
import { S126055Page } from './s126055/s126055.page';
import { S126056Page } from './s126056/s126056.page';
import { S126057Page } from './s126057/s126057.page';
import { S126058Page } from './s126058/s126058.page';
import { S126059Page } from './s126059/s126059.page';
import { S126060Page } from './s126060/s126060.page';
import { S126061Page } from './s126061/s126061.page';
import { S126062Page } from './s126062/s126062.page';
import { S126063Page } from './s126063/s126063.page';
import { S126064Page } from './s126064/s126064.page';
import { S126065Page } from './s126065/s126065.page';
import { S126066Page } from './s126066/s126066.page';
import { S126067Page } from './s126067/s126067.page';
import { S126068Page } from './s126068/s126068.page';
import { S126069Page } from './s126069/s126069.page';
import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  declarations: [
S126001Page, 
S126002Page,
S126003Page,
S126003tPage,
S126004Page,
S126005Page,
S126006Page,
S126007Page,
S126008Page,
S126009Page,
S126010Page,
S126011Page,
S126012Page,
S126012tPage,
S126013Page,
S126014Page,
S126015Page,
S126016Page,
S126017Page,
S126018Page,
S126019Page,
S126020Page,
S126021Page,
S126022Page,
S126023Page,
S126024Page,
S126025Page,
S126026Page,
S126027Page,
S126028Page,
S126029Page,
S126030Page,
S126031Page,
S126032Page,
S126033Page,
S126034Page,
S126035Page,
S126035tPage,
S126036Page,
S126037Page,
S126038Page,
S126039Page,
S126040Page,
S126041Page,
S126042Page,
S126043Page,
S126044Page,
S126045Page,
S126046Page,
S126047Page,
S126048Page,
S126049Page,
S126050Page,
S126051Page,
S126052Page,
S126053Page,
S126054Page,
S126055Page,
S126056Page,
S126057Page,
S126058Page,
S126059Page,
S126060Page,
S126061Page,
S126062Page,
S126063Page,
S126064Page,
S126065Page,
S126066Page,
S126067Page,
S126068Page,
S126069Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelfEsteemRoutingModule,
    NgxCircularPlayerModule
  ],
  providers:[
    TeenagersService
  ]
})
export class SelfEsteemModule { }
