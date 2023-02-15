import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { LivingWithPeaceRoutingModule } from './living-with-peace-routing.module';

import { S63001Page } from './s63001/s63001.page';
import { S63002Page } from './s63002/s63002.page';
import { S63003Page } from './s63003/s63003.page';
import { S63004Page } from './s63004/s63004.page';
import { S63005Page } from './s63005/s63005.page';
import { S63006Page } from './s63006/s63006.page';
import { S63006tPage } from './s63006t/s63006t.page';
import { S63007Page } from './s63007/s63007.page';
import { S63008Page } from './s63008/s63008.page';
import { S63008tPage } from './s63008t/s63008t.page';
import { S63009Page } from './s63009/s63009.page';
import { S63009tPage } from './s63009t/s63009t.page';
import { S63010Page } from './s63010/s63010.page';
import { S63011Page } from './s63011/s63011.page';
import { S63012Page } from './s63012/s63012.page';
import { S63013Page } from './s63013/s63013.page';
import { S63014Page } from './s63014/s63014.page';
import { S63015Page } from './s63015/s63015.page';
import { S63016Page } from './s63016/s63016.page';
import { S63017Page } from './s63017/s63017.page';
import { S63018Page } from './s63018/s63018.page';
import { S63019Page } from './s63019/s63019.page';
import { S63020Page } from './s63020/s63020.page';
import { S63021Page } from './s63021/s63021.page';
import { S63022Page } from './s63022/s63022.page';
import { S63023Page } from './s63023/s63023.page';
import { S63024Page } from './s63024/s63024.page';
import { S63025Page } from './s63025/s63025.page';
import { S63026Page } from './s63026/s63026.page';
import { S63027Page } from './s63027/s63027.page';
import { S63028Page } from './s63028/s63028.page';
import { S63029Page } from './s63029/s63029.page';
import { S63030Page } from './s63030/s63030.page';
import { S63031Page } from './s63031/s63031.page';
import { S63032Page } from './s63032/s63032.page';
import { S63033Page } from './s63033/s63033.page';
import { S63034Page } from './s63034/s63034.page';
import { S63034tPage } from './s63034t/s63034t.page';
import { S63035Page } from './s63035/s63035.page';
import { S63036Page } from './s63036/s63036.page';
import { S63037Page } from './s63037/s63037.page';
import { S63038Page } from './s63038/s63038.page';
import { S63039Page } from './s63039/s63039.page';
import { S63040Page } from './s63040/s63040.page';
import { S63041Page } from './s63041/s63041.page';
import { S63041tPage } from './s63041t/s63041t.page';
import { S63042Page } from './s63042/s63042.page';
import { S63043Page } from './s63043/s63043.page';
import { S63044Page } from './s63044/s63044.page';
import { S63044tPage } from './s63044t/s63044t.page';
import { S63045Page } from './s63045/s63045.page';
import { S63046Page } from './s63046/s63046.page';
import { S63046tPage } from './s63046t/s63046t.page';
import { S63047Page } from './s63047/s63047.page';
import { S63048Page } from './s63048/s63048.page';
import { S63049Page } from './s63049/s63049.page';
import { S63050Page } from './s63050/s63050.page';
import { S63050tPage } from './s63050t/s63050t.page';
import { S63051Page } from './s63051/s63051.page';
import { S63052Page } from './s63052/s63052.page';
import { S63053Page } from './s63053/s63053.page';
import { S63054Page } from './s63054/s63054.page';
import { S63055Page } from './s63055/s63055.page';
import { S63055tPage } from './s63055t/s63055t.page';
import { S63056Page } from './s63056/s63056.page';
import { S63057Page } from './s63057/s63057.page';
import { S63058Page } from './s63058/s63058.page';
import { S63059Page } from './s63059/s63059.page';
import { S63060Page } from './s63060/s63060.page';
import { S63061Page } from './s63061/s63061.page';
import { S63062Page } from './s63062/s63062.page';
import { S63063Page } from './s63063/s63063.page';
import { S63064Page } from './s63064/s63064.page';
import { S63065Page } from './s63065/s63065.page';
import { S63066Page } from './s63066/s63066.page';
import { S63066tPage } from './s63066t/s63066t.page';
import { S63067Page } from './s63067/s63067.page';
import { S63067tPage } from './s63067t/s63067t.page';
import { S63068Page } from './s63068/s63068.page';
import { S63069Page } from './s63069/s63069.page';
import { S63069tPage } from './s63069t/s63069t.page';
import { S63070Page } from './s63070/s63070.page';
import { S63071Page } from './s63071/s63071.page';
import { S63072Page } from './s63072/s63072.page';
import { S63073Page } from './s63073/s63073.page';
import { S63074Page } from './s63074/s63074.page';
import { S63075Page } from './s63075/s63075.page';
import { S63076Page } from './s63076/s63076.page';
import { S63077Page } from './s63077/s63077.page';
import { S63078Page } from './s63078/s63078.page';
import { S63079Page } from './s63079/s63079.page';

import { NgxCircularPlayerModule } from '../../../../../ngx-circular-player';

@NgModule({
  declarations: [
    S63001Page,
    S63002Page,
    S63003Page,
    S63004Page,
    S63005Page,
    S63006Page,
    S63006tPage,
    S63007Page,
    S63008Page,
    S63008tPage,
    S63009Page,
    S63009tPage,
    S63010Page,
    S63011Page,
    S63012Page,
    S63013Page,
    S63014Page,
    S63015Page,
    S63016Page,
    S63017Page,
    S63018Page,
    S63019Page,
    S63020Page,
    S63021Page,
    S63022Page,
    S63023Page,
    S63024Page,
    S63025Page,
    S63026Page,
    S63027Page,
    S63028Page,
    S63029Page,
    S63030Page,
    S63031Page,
    S63032Page,
    S63033Page,
    S63034Page,
    S63034tPage,
    S63035Page,
    S63036Page,
    S63037Page,
    S63038Page,
    S63039Page,
    S63040Page,
    S63041Page,
    S63041tPage,
    S63042Page,
    S63043Page,
    S63044Page,
    S63044tPage,
    S63045Page,
    S63046Page,
    S63046tPage,
    S63047Page,
    S63048Page,
    S63049Page,
    S63050Page,
    S63050tPage,
    S63051Page,
    S63052Page,
    S63053Page,
    S63054Page,
    S63055Page,
    S63055tPage,
    S63056Page,
    S63057Page,
    S63058Page,
    S63059Page,
    S63060Page,
    S63061Page,
    S63062Page,
    S63063Page,
    S63064Page,
    S63065Page,
    S63066Page,
    S63066tPage,
    S63067Page,
    S63067tPage,
    S63068Page,
    S63069Page,
    S63069tPage,
    S63070Page,
    S63071Page,
    S63072Page,
    S63073Page,
    S63074Page,
    S63075Page,
    S63076Page,
    S63077Page,
    S63078Page,
    S63079Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LivingWithPeaceRoutingModule,
    NgxCircularPlayerModule    
  ],
  providers:[
    AdultsService
  ]
})
export class LivingWithPeaceModule { }
