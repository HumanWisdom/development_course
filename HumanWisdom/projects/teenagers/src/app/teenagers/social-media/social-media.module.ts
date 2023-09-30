import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { TeenagersService } from '../teenagers.service';
import { S138001Page } from './s138001/s138001.page';
import { S138002Page } from './s138002/s138002.page';
import { S138003Page } from './s138003/s138003.page';
import { S138003tPage } from './s138003t/s138003t.page';
import { S138004Page } from './s138004/s138004.page';
import { S138005Page } from './s138005/s138005.page';
import { S138005tPage } from './s138005t/s138005t.page';
import { S138006Page } from './s138006/s138006.page';
import { S138007Page } from './s138007/s138007.page';
import { S138008Page } from './s138008/s138008.page';
import { S138009Page } from './s138009/s138009.page';
import { S138010Page } from './s138010/s138010.page';
import { S138012Page } from './s138012/s138012.page';
import { S138013Page } from './s138013/s138013.page';
import { S138014Page } from './s138014/s138014.page';
import { S138015Page } from './s138015/s138015.page';
import { S138016Page } from './s138016/s138016.page';
import { S138017Page } from './s138017/s138017.page';
import { S138018Page } from './s138018/s138018.page';
import { S138011Page } from './s138011/s138011.page';
import { S138019Page } from './s138019/s138019.page';
import { S138020Page } from './s138020/s138020.page';
import { S138021Page } from './s138021/s138021.page';
import { S138022Page } from './s138022/s138022.page';
import { S138023Page } from './s138023/s138023.page';
import { S138024Page } from './s138024/s138024.page';
import { S138025Page } from './s138025/s138025.page';
import { S138026Page } from './s138026/s138026.page';
import { S138027Page } from './s138027/s138027.page';
import { S138028Page } from './s138028/s138028.page';
import { S138029Page } from './s138029/s138029.page';
import { S138030Page } from './s138030/s138030.page';
import { S138031Page } from './s138031/s138031.page';
import { S138032Page } from './s138032/s138032.page';
import { S138033Page } from './s138033/s138033.page';
import { S138034Page } from './s138034/s138034.page';
import { S138035Page } from './s138035/s138035.page';
import { S138035tPage } from './s138035t/s138035t.page';
import { S138036Page } from './s138036/s138036.page';
import { S138037Page } from './s138037/s138037.page';
import { S138038Page } from './s138038/s138038.page';
import { S138039Page } from './s138039/s138039.page';
import { S138039tPage } from './s138039t/s138039t.page';
import { S138040Page } from './s138040/s138040.page';
import { S138041Page } from './s138041/s138041.page';
import { S138041tPage } from './s138041t/s138041t.page';
import { S138042Page } from './s138042/s138042.page';
import { S138043Page } from './s138043/s138043.page';
import { S138044Page } from './s138044/s138044.page';
import { S138045Page } from './s138045/s138045.page';
import { S138046Page } from './s138046/s138046.page';
import { S138047Page } from './s138047/s138047.page';
import { S138048Page } from './s138048/s138048.page';
import { S138049Page } from './s138049/s138049.page';
import { S138049tPage } from './s138049t/s138049t.page';
import { S138050Page } from './s138050/s138050.page';
import { S138051Page } from './s138051/s138051.page';
import { S138051tPage } from './s138051t/s138051t.page';
import { S138052Page } from './s138052/s138052.page';
import { S138053Page } from './s138053/s138053.page';
import { S138054Page } from './s138054/s138054.page';
import { S138054tPage } from './s138054t/s138054t.page';
import { S138055Page } from './s138055/s138055.page';
import { S138056Page } from './s138056/s138056.page';
import { S138057Page } from './s138057/s138057.page';
import { S138057tPage } from './s138057t/s138057t.page';
import { S138058Page } from './s138058/s138058.page';
import { S138059Page } from './s138059/s138059.page';
import { S138060Page } from './s138060/s138060.page';
import { S138060tPage } from './s138060t/s138060t.page';
import { S138061Page } from './s138061/s138061.page';
import { S138062Page } from './s138062/s138062.page';
import { S138063Page } from './s138063/s138063.page';
import { S138064Page } from './s138064/s138064.page';
import { S138065Page } from './s138065/s138065.page';
import { S138065tPage } from './s138065t/s138065t.page';
import { S138066Page } from './s138066/s138066.page';
import { S138067Page } from './s138067/s138067.page';
import { S138068Page } from './s138068/s138068.page';
import { S138069Page } from './s138069/s138069.page';
import { S138070Page } from './s138070/s138070.page';
import { S138071Page } from './s138071/s138071.page';
import { S138072Page } from './s138072/s138072.page';
import { S138073tPage } from './s138073t/s138073t.page';
import { S138074Page } from './s138074/s138074.page';
import { S138075Page } from './s138075/s138075.page';
import { S138076Page } from './s138076/s138076.page';
import { S138077Page } from './s138077/s138077.page';
import { S138078Page } from './s138078/s138078.page';
import { S138079Page } from './s138079/s138079.page';
import { S138079tPage } from './s138079t/s138079t.page';
import { S138080Page } from './s138080/s138080.page';
import { S138081Page } from './s138081/s138081.page';
import { S138082Page } from './s138082/s138082.page';
import { S138082tPage } from './s138082t/s138082t.page';
import { S138083Page } from './s138083/s138083.page';
import { S138084Page } from './s138084/s138084.page';
import { S138085Page } from './s138085/s138085.page';
import { S138085tPage } from './s138085t/s138085t.page';
import { S138086Page } from './s138086/s138086.page';
import { S138087Page } from './s138087/s138087.page';
import { S138088Page } from './s138088/s138088.page';
import { S138089Page } from './s138089/s138089.page';
import { S138090Page } from './s138090/s138090.page';
import { S138091Page } from './s138091/s138091.page';
import { S138092Page } from './s138092/s138092.page';
import { S138093Page } from './s138093/s138093.page';
import { S138094Page } from './s138094/s138094.page';
import { S138095Page } from './s138095/s138095.page';
import { S138096Page } from './s138096/s138096.page';
import { S138097Page } from './s138097/s138097.page';
import { S138098Page } from './s138098/s138098.page';
import { S138099Page } from './s138099/s138099.page';
import { S138100Page } from './s138100/s138100.page';
import { S138101Page } from './s138101/s138101.page';
import { S138102Page } from './s138102/s138102.page';
import { S138073Page } from './s138073/s138073.page';


@NgModule({
  declarations: [
    S138001Page,
    S138002Page,
    S138003Page,
    S138003tPage,
    S138004Page,    
    S138005Page,
    S138005tPage,
    S138006Page,
    S138007Page,
    S138008Page,
    S138009Page,
    S138010Page,
    S138011Page,
    S138012Page,
    S138013Page,
    S138014Page,
    S138015Page,
    S138016Page,    
    S138017Page,
    S138018Page,
    S138019Page,
    S138020Page,
    S138021Page,
    S138022Page,
    S138023Page,
    S138024Page,
    S138025Page,
    S138026Page,
    S138027Page,
    S138028Page,
    S138029Page,
    S138030Page,
    S138031Page,
    S138032Page,
    S138033Page,
    S138034Page,
    S138035Page,
    S138035tPage,
    S138036Page,
    S138037Page,
    S138038Page,
    S138039Page,
    S138039tPage,
    S138040Page,
    S138041Page,
    S138041tPage,
    S138042Page,
    S138043Page,
    S138044Page,
    S138045Page,
    S138046Page,
    S138047Page,
    S138048Page,
    S138049Page,
    S138049tPage,
    S138050Page,
    S138051Page,
    S138051tPage,
    S138052Page,
    S138053Page,
    S138054Page,
    S138054tPage,
    S138055Page,
    S138056Page,
    S138057Page,
    S138057tPage,
    S138058Page,
    S138059Page,
    S138060Page,
    S138060tPage,    
    S138061Page,
    S138062Page,
    S138063Page,
    S138064Page,
    S138065Page,
    S138065tPage,
    S138066Page,
    S138067Page,    
    S138068Page,
    S138069Page,
    S138070Page,
    S138071Page,
    S138072Page,
    S138073Page,
    S138073tPage,
    S138074Page,
    S138075Page,
    S138076Page,
    S138077Page,
    S138078Page,
    S138079Page,
    S138079tPage,
    S138080Page,    
    S138081Page,
    S138082Page,
    S138082tPage,
    S138083Page,
    S138084Page,
    S138085Page,
    S138085tPage,
    S138086Page,
    S138087Page,
    S138088Page,
    S138089Page,
    S138090Page,
    S138091Page,
    S138092Page,
    S138093Page,
    S138094Page,
    S138095Page,
    S138096Page,
    S138097Page,    
    S138098Page,
    S138099Page,
    S138100Page,
    S138101Page,
    S138102Page,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SocialMediaRoutingModule
  ],
  providers:[
    TeenagersService,
    
  ]
})
export class SocialMediaModule { }
