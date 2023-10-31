import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';
import { AdultsService } from '../adults.service';

import { ExternalApprovalRoutingModule } from './external-approval-routing.module';

import { S91001Page } from './s91001/s91001.page';  
import { S91002Page } from './s91002/s91002.page';  
import { S91003Page } from './s91003/s91003.page';  
import { S91003tPage } from './s91003t/s91003t.page';  
import { S91004Page } from './s91004/s91004.page';  
import { S91005Page } from './s91005/s91005.page';  
import { S91006Page } from './s91006/s91006.page';  
import { S91007Page } from './s91007/s91007.page';  
import { S91008Page } from './s91008/s91008.page';  
import { S91009Page } from './s91009/s91009.page';  
import { S91010Page } from './s91010/s91010.page';  
import { S91011Page } from './s91011/s91011.page';  
import { S91011tPage } from './s91011t/s91011t.page';  
import { S91012Page } from './s91012/s91012.page';  
import { S91013Page } from './s91013/s91013.page';  
import { S91013tPage } from './s91013t/s91013t.page';  
import { S91014Page } from './s91014/s91014.page';  
import { S91015Page } from './s91015/s91015.page';  
import { S91016Page } from './s91016/s91016.page';  
import { S91017Page } from './s91017/s91017.page';  
import { S91018Page } from './s91018/s91018.page';  
import { S91019Page } from './s91019/s91019.page';  
import { S91020Page } from './s91020/s91020.page';  
import { S91021Page } from './s91021/s91021.page';  
import { S91022Page } from './s91022/s91022.page';  
import { S91023Page } from './s91023/s91023.page';  
import { S91024Page } from './s91024/s91024.page';  
import { S91025Page } from './s91025/s91025.page';  
import { S91026Page } from './s91026/s91026.page';  
import { S91027Page } from './s91027/s91027.page';  
import { S91028Page } from './s91028/s91028.page';  
import { S91029Page } from './s91029/s91029.page';  
import { S91029tPage } from './s91029t/s91029t.page';  
import { S91030Page } from './s91030/s91030.page';  
import { S91031Page } from './s91031/s91031.page';  
import { S91032Page } from './s91032/s91032.page';  
import { S91032tPage } from './s91032t/s91032t.page';  
import { S91033Page } from './s91033/s91033.page';  
import { S91034Page } from './s91034/s91034.page';  
import { S91035Page } from './s91035/s91035.page';  
import { S91036Page } from './s91036/s91036.page';  
import { S91036tPage } from './s91036t/s91036t.page';  
import { S91037Page } from './s91037/s91037.page';  
import { S91038Page } from './s91038/s91038.page';  
import { S91039Page } from './s91039/s91039.page';  
import { S91039tPage } from './s91039t/s91039t.page';  
import { S91040Page } from './s91040/s91040.page';  
import { S91041Page } from './s91041/s91041.page';  
import { S91041tPage } from './s91041t/s91041t.page';  
import { S91042Page } from './s91042/s91042.page';  
import { S91043Page } from './s91043/s91043.page';  
import { S91044Page } from './s91044/s91044.page';  
import { S91045Page } from './s91045/s91045.page';  
import { S91045tPage } from './s91045t/s91045t.page';  
import { S91046Page } from './s91046/s91046.page';  
import { S91047Page } from './s91047/s91047.page';  
import { S91048Page } from './s91048/s91048.page';  
import { S91049Page } from './s91049/s91049.page';  
import { S91050Page } from './s91050/s91050.page';  
import { S91051Page } from './s91051/s91051.page';  
import { S91052Page } from './s91052/s91052.page';  
import { S91053Page } from './s91053/s91053.page';  
import { S91053tPage } from './s91053t/s91053t.page';  
import { S91054Page } from './s91054/s91054.page';  
import { S91055Page } from './s91055/s91055.page';  
import { S91056Page } from './s91056/s91056.page';  
import { S91057Page } from './s91057/s91057.page';  
import { S91057tPage } from './s91057t/s91057t.page';  
import { S91058Page } from './s91058/s91058.page';  
import { S91059Page } from './s91059/s91059.page';  
import { S91060Page } from './s91060/s91060.page';  
import { S91060tPage } from './s91060t/s91060t.page';  
import { S91061Page } from './s91061/s91061.page';  
import { S91062Page } from './s91062/s91062.page';  
import { S91062tPage } from './s91062t/s91062t.page';  
import { S91063Page } from './s91063/s91063.page';  
import { S91064Page } from './s91064/s91064.page';  
import { S91065tPage } from './s91065t/s91065t.page';  
import { S91065Page } from './s91065/s91065.page';  
import { S91066Page } from './s91066/s91066.page';  
import { S91067Page } from './s91067/s91067.page';  
import { S91068Page } from './s91068/s91068.page';  
import { S91069Page } from './s91069/s91069.page';  
import { S91070Page } from './s91070/s91070.page';  
import { S91071Page } from './s91071/s91071.page';  
import { S91072Page } from './s91072/s91072.page';  
import { S91073Page } from './s91073/s91073.page';  
import { S91074Page } from './s91074/s91074.page';  
import { S91074tPage } from './s91074t/s91074t.page';  
import { S91075Page } from './s91075/s91075.page';  
import { S91076Page } from './s91076/s91076.page';  
import { S91077Page } from './s91077/s91077.page';  
import { S91078Page } from './s91078/s91078.page';  
import { S91079Page } from './s91079/s91079.page';  
import { S91080Page } from './s91080/s91080.page';  
import { S91081Page } from './s91081/s91081.page';  
import { S91082Page } from './s91082/s91082.page';  
import { S91083Page } from './s91083/s91083.page';  
import { S91084Page } from './s91084/s91084.page';  

@NgModule({
  declarations: [
    S91001Page,
    S91002Page,
    S91003Page,
    S91003tPage,
    S91004Page,
    S91005Page,
    S91006Page,
    S91007Page,
    S91008Page,
    S91009Page,
    S91010Page,
    S91011Page,
    S91011tPage,
    S91012Page,
    S91013Page,
    S91013tPage,
    S91014Page,
    S91015Page,
    S91016Page,
    S91017Page,
    S91018Page,
    S91019Page,
    S91020Page,
    S91021Page,
    S91022Page,
    S91023Page,
    S91024Page,
    S91025Page,
    S91026Page,
    S91027Page,
    S91028Page,
    S91029Page,
    S91029tPage,
    S91030Page,
    S91031Page,
    S91032Page,
    S91032tPage,
    S91033Page,
    S91034Page,
    S91035Page,
    S91036Page,
    S91036tPage,
    S91037Page,
    S91038Page,
    S91039Page,
    S91039tPage,
    S91040Page,
    S91041Page,
    S91041tPage,
    S91042Page,
    S91043Page,
    S91044Page,
    S91045Page,
    S91045tPage,
    S91046Page,
    S91047Page,
    S91048Page,
    S91049Page,
    S91050Page,
    S91051Page,
    S91052Page,
    S91053Page,
    S91053tPage,
    S91054Page,
    S91055Page,
    S91056Page,
    S91057Page,
    S91057tPage,
    S91058Page,
    S91059Page,
    S91060Page,
    S91060tPage,
    S91061Page,
    S91062Page,
    S91062tPage,
    S91063Page,
    S91064Page,
    S91065Page,
    S91065tPage,
    S91066Page,
    S91067Page,
    S91068Page,
    S91069Page,
    S91070Page,
    S91071Page,
    S91072Page,
    S91073Page,
    S91074Page,
    S91074tPage,
    S91075Page,
    S91076Page,
    S91077Page,
    S91078Page,
    S91079Page,
    S91080Page,
    S91081Page,
    S91082Page,
    S91083Page,
    S91084Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ExternalApprovalRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class ExternalApprovalModule { }
